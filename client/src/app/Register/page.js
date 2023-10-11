"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const watchedFields = watch();
  const allFieldsFilled =
    watchedFields.firstName?.trim().length &&
    watchedFields.lastName?.trim().length &&
    watchedFields.number?.trim().length &&
    watchedFields.email?.trim().length &&
    watchedFields.password?.trim().length &&
    watchedFields.confirmPassword?.trim().length;

  const isAccepted = watchedFields.acceptance === "accept";
  const isButtonDisabled = !(allFieldsFilled && isAccepted);
  return (
    <div className="px-6 py-20 w-2/3 mx-auto">
      <h2 className="text-3xl text-center">REGISTRATION</h2>
      <p className="text-center pt-2 text-gray-700">Create an account and Register yourself as Trendy-Leather-Craft Club member! Trendy-Leather-Craft club members can enjoy exclusive benefits.</p>
      <form className=" space-y-4">
        <div className="grid grid-cols-2 gap-7 mt-7">
          <div className="">
            <label className="text-sm flex items-center gap-2">
              First Name <span className="text-red-700">*</span>{" "}
            </label>
            <input
              id="firstName"
              type="text"
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
              {...register("lastName", { required: true })}
              placeholder="Last name"
              className="w-full text-lg py-1 px-2 rounded  border outline-none border-gray-600 text-black"
            />
          </div>
        </div>
        <div className="">
          <label className="text-sm flex items-center gap-2">
            Mobile No <span className="text-red-700">*</span>{" "}
          </label>
          <input
            id="number"
            type="text"
            {...register("number", { required: true })}
            placeholder="number"
            className="w-full text-lg py-1 px-2 rounded  border outline-none border-gray-600 text-black"
          />
        </div>  
        <div className="">
          <label className="text-sm flex items-center gap-2">
            Email <span className="text-red-700">*</span>{" "}
          </label>
          <input
            id="email"
            type="email"
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
              type={showPassword ? "text" : "password"}
              placeholder="Your password Here"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 18,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
              })}
              className="w-full    outline-none  text-black"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
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
            <span className="text-gray-500 py-2 text-sm">
              The password should be at least 8 characters long and must contain
              at least one upper case letter, one lower case letter, a number
              and a special character(!, @, #, $, %, &, *)
            </span>
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
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Your password Here"
              {...register("confirmPassword", {
                required: true,
                minLength: 8,
                maxLength: 18,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
              })}
              className="w-full  outline-none  text-black"
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
        </div>
        {/* Radio */}
        <div className=" ">
          <label className="flex items-center">
            <input
              value="accept"
              {...register("acceptance")}
              type="checkbox"
              name="acceptance"
              className="mr-2"
            />
            I accept <Link href='' className="text-blue-600 ml-1 hover:underline font-semibold">Terms and Condition</Link>
          </label>

        </div>
        <button
          disabled={isButtonDisabled}
          className={`text-white font-medium w-full py-3 rounded-md ${
            isButtonDisabled
              ? "bg-[#aaaaaa] cursor-not-allowed"
              : "bg-[#787878] hover:bg-[#444444]"
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
