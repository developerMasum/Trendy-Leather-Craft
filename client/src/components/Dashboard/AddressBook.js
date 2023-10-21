import React from 'react'
import { FaPlus } from 'react-icons/fa';

const AddressBook = () => {
    const [addNew, setAddNew] = useState(false);
  return (
    <div>
        <div className="pt-24 px-10">
          <h2 className="text-xl font-semibold">ADDRESS BOOK</h2>
          <p className="text-gray-700 text-sm">
            This section contains your address information
          </p>
          <div className="my-6">
            <div className="mt-10">
              <div
                className="py-5 w-3/4"
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
              >
                {
                  addNew ? <span className="px-6 text-xl  font-semibold">Your Information</span>:<div className="flex justify-between px-6">
                  <p className="text-xl  font-semibold">Default Address</p>
                  <button
                    className="px-4 flex items-center gap-2 text-xs bg-black py-2 rounded-md text-white"
                    onClick={() => setAddNew(!addNew)}
                  >
                    Add New Address <FaPlus />
                  </button>
                </div>
                }

                <hr className="my-5" />
                {addNew && (
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
                  {/* Mobile Number */}
                  <label
                    htmlFor="number"
                    className="relative block overflow-hidden rounded border border-gray-600 px-3 pt-3 shadow-sm outline-none"
                  >
                    <input
                      type="text"
                      id="number"
                      placeholder="Mobile Number"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs">
                    Mobile Number*
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
                 
                  
                 
                 <div className="flex space-x-3"> 
                 <button className="bg-black px-3 py-3 rounded-md text-white">
                    Save Changes
                  </button>
                  <button className="hover:bg-black px-3 py-3 rounded-md text-black border border-black hover:text-white">
                    Cancel
                  </button>
                 </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddressBook