"use client";
import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const [passwordConditions, setPasswordConditions] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();


  const watchedFields = watch();
  const password = watch("password");
  // Password Validity
  const handlePasswordChange = (e) => {
    const value = e.target.value;

    setPasswordConditions({
      minLength: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      specialChar: /[!@#$&*]/.test(value),
    });
  };
  // password show

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // Confirm password show
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Button Checkbox
  const isAccepted = watchedFields.acceptance === "accept";
  const isButtonDisabled = !isAccepted;
  // From
  const onSubmit = async (data) => {
    // console.log(data);

    const { email, password } = data;
    console.log(data);
    const toastId = toast.loading("Loading...");
    try {
      await createUser(email, password);
      await createJWT({ email });
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
      replace(from);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }

    if (data.password !== data.confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
  };

  return (
    <div className="px-6 py-20 w-2/3 mx-auto">
      <h2 className="text-3xl text-center">REGISTRATION</h2>
      <p className="text-center pt-2 text-gray-700">
        Create an account and Register yourself as Trendy-Leather-Craft Club
        member! Trendy-Leather-Craft club members can enjoy exclusive benefits.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
        {/* First name and last name */}
        <div className="grid grid-cols-2 gap-7 mt-7">
          <div className="">
            <label className="text-sm flex items-center gap-2">
              First Name <span className="text-red-700">*</span>{" "}
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First name"
              {...register("firstName", { required: true })}
              className="w-full py-1 rounded px-2 text-lg  border outline-none border-gray-600 text-black"
            />
          </div>
          <div className="">
            <label className="text-sm flex items-center gap-2">
              Last name <span className="text-red-700">*</span>{" "}
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              {...register("lastName", { required: true })}
              placeholder="Last name"
              className="w-full text-lg py-1 px-2 rounded  border outline-none border-gray-600 text-black"
            />
          </div>
        </div>
        {/* Mobile */}
        <div className="">
          <label className="text-sm flex items-center gap-2">
            Mobile No <span className="text-red-700">*</span>{" "}
          </label>
          <input
            id="number"
            type="text"
            name="number"
            {...register("number", { required: true })}
            placeholder="number"
            className="w-full text-lg py-1 px-2 rounded  border outline-none border-gray-600 text-black"
          />
        </div>
        {/* Email */}
        <div className="">
          <label className="text-sm flex items-center gap-2">
            Email <span className="text-red-700">*</span>{" "}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Your Email Here"
            className="w-full text-lg py-1 px-2 rounded  border outline-none border-gray-600 text-black"
          />
        </div>
        {/*  Password section */}
        <div className="">
          <label className="text-sm flex items-center gap-2">
            Password <span className="text-red-700">*</span>{" "}
          </label>
          <div className="flex justify-between py-1 px-2 rounded items-center border border-gray-600">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your password Here"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 18,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
              })}
              className="w-full py-[3px] px-1.5    outline-none  text-black"
              onFocus={() => setInputFocused(true)}
              onChange={handlePasswordChange}
            />
            <span className="px-4">
              {showPassword ? (
                <FaEyeSlash
                  className="w-5 h-5"
                  color="black"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="w-5 h-5"
                  color="black"
                  onClick={togglePasswordVisibility}
                />
              )}
            </span>
          </div>
          {isInputFocused && (
            <div className="text-gray-500 py-2 text-sm">
              <div>
                {passwordConditions.minLength ? "✅" : "❌"} At least 8
                characters long
              </div>
              <div>
                {passwordConditions.uppercase ? "✅" : "❌"} Contains an
                uppercase letter
              </div>
              <div>
                {passwordConditions.lowercase ? "✅" : "❌"} Contains a
                lowercase letter
              </div>
              <div>
                {passwordConditions.number ? "✅" : "❌"} Contains a number
              </div>
              <div>
                {passwordConditions.specialChar ? "✅" : "❌"} Contains a
                special character(!, @, #, $, %, &, *)
              </div>
            </div>
          )}
        </div>
        {/* Confirm Password */}
        <div className="">
          <label className="text-sm flex items-center gap-2">
            Confirm Password <span className="text-red-700">*</span>{" "}
          </label>
          <div className="flex justify-between py-1 px-2 rounded items-center border border-gray-600">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Your confirm password Here"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full  py-[3px] px-1.5  outline-none  text-black"
            />
            <span className="px-4">
              {showConfirmPassword ? (
                <FaEyeSlash
                  className="w-5 h-5"
                  color="black"
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <FaEye
                  className="w-5 h-5"
                  color="black"
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </span>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        {/* Radio */}
        <div className=" ">
          <label className="flex items-center">
            <input
              value="accept"
              {...register("acceptance")}
              type="checkbox"
              name="acceptance"
              className="mr-2 accent-emerald-400/25 "
            />
            I accept{" "}
            <Link
              href=""
              className="text-slate-900 ml-1 hover:underline font-semibold"
            >
              Terms and Condition
            </Link>
          </label>
        </div>
        <button
          disabled={isButtonDisabled}
          className={`text-white font-medium w-full py-3 rounded-md ${
            isButtonDisabled
              ? "bg-[#aaaaaa] cursor-not-allowed"
              : "bg-[#090909] hover:bg-[#444444]"
          }`}
          type="submit"
        >
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
