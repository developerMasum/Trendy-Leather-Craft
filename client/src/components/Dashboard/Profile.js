"use client"
import React, { useState } from "react";
import { GrFormEdit } from "react-icons/gr";
const Profile = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [gender, setGender] = useState("Gender");
  const [editingGender, setEditingGender] = useState(false);
  const [birthDate, setBirthDate] = useState("Date of Birth"); // To store the birth date
  const [editingBirthDate, setEditingBirthDate] = useState(false); // To check if birth date is being edited

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setEditingGender(false);
  };
  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
    setEditingBirthDate(false);
  };
  return (
    <div>
       <div className="pt-24 px-10">
          <h2 className="text-xl font-semibold">ACCOUNT INFORMATION</h2>
          <p className="text-gray-700 text-sm">
            This section contains your personal information
          </p>
          {/* Profile */}
          <div className="mt-10">
            <div
              className="py-5 w-3/4"
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
            >
              <div className="flex justify-between px-6">
                <p className="text-xl  font-semibold">Personal Information</p>
                <button
                  className="px-4 bg-black py-2 rounded-md text-white"
                  onClick={() => setEditMode(!isEditMode)} // Toggle edit mode
                >
                  {isEditMode ? "Cancel" : "Edit"}
                </button>
              </div>
              <hr className="my-5" />

              {isEditMode ? (
                <div className="px-5 space-y-4">
                  {/* First Name */}
                  <label
                    htmlFor="firstName"
                    className="relative block overflow-hidden rounded border border-gray-600 px-3 pt-3 shadow-sm outline-none"
                  >
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs">
                      First Name*
                    </span>
                  </label>
                  {/* Last Name */}
                  <label
                    htmlFor="lastName"
                    className="relative block overflow-hidden rounded border border-gray-600 px-3 pt-3 shadow-sm outline-none"
                  >
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs">
                      Last Name*
                    </span>
                  </label>
                  {/* Email */}
                  <label
                    htmlFor="email"
                    className="relative block overflow-hidden rounded border border-gray-600 px-3 pt-3 shadow-sm outline-none"
                  >
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs">
                      Email*
                    </span>
                  </label>
                  {/* Gender */}
                  <div onClick={() => setEditingGender(true)}>
                    {editingGender ? (
                      <select
                        value={gender}
                        onChange={handleGenderChange}
                        onBlur={() => setEditingGender(false)}
                        className="border border-gray-700 w-full py-2 rounded px-3"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    ) : (
                      <p className="border border-gray-700 w-full py-2 rounded px-3">
                        {gender}
                      </p>
                    )}
                  </div>
                  {/* Date of Birth */}
                  {editingBirthDate ? (
                    <input
                      type="date"
                      value={birthDate === "Date of Birth" ? "" : birthDate}
                      onChange={handleBirthDateChange}
                      onBlur={() => setEditingBirthDate(false)}
                      className="border border-gray-700 w-full py-2 rounded px-3"
                    />
                  ) : (
                    <p
                      className="border border-gray-700 w-full py-2 rounded px-3 cursor-pointer"
                      onClick={() => setEditingBirthDate(true)}
                    >
                      {birthDate}
                    </p>
                  )}
                  <button className="bg-black px-3 py-3 rounded-md text-white">
                    Save Changes
                  </button>
                </div>
              ) : (
                <div className="px-5 space-y-4 flex justify-between">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-800">First Name</p>
                      <p className="font-semibold">Kabir</p>
                    </div>
                    <div>
                      <p className="text-gray-800">Email</p>
                      <p className="font-semibold">
                        programmerkabirr@gmail.com
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-800">Gender</p>
                      <p className="font-semibold">N/A</p>
                    </div>
                    <div>
                      <p className="text-gray-800">Date of Birth</p>
                      <p className="font-semibold">N/A</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-start">
                      <p className="text-gray-800">Last Name</p>
                      <p className="font-semibold">Hossen</p>
                    </div>
                    <div>
                      <p className="text-gray-800">Phone Number</p>
                      <p className="font-semibold">N/A</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Add a Phone Number */}
          {!isEditMode && (
            <div className="my-7">
              <div
                className="py-5 w-1/2 "
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
              >
                <p className="text-xl px-6 font-semibold">Add Phone Number</p>
                <hr className="my-5" />
                <div className="px-5 space-y-3">
                  {/* input Number */}
                  <label
                    htmlFor="number"
                    className="relative block overflow-hidden rounded border border-gray-600 px-3 pt-3 shadow-sm outline-none"
                  >
                    <input
                      type="text"
                      id="number"
                      placeholder="Phone Number"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs">
                      Phone Number*
                    </span>
                  </label>
                  <button className="w-full bg-black text-white py-3 rounded-md text-center">
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default Profile;
