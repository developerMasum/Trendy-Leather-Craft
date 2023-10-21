"use client"
import React from 'react'

const MyOrder = () => {
    const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
        <div className="pt-24 px-10">
          <h2 className="text-xl font-semibold">ORDER HISTORY</h2>
          <p className="text-gray-700 text-sm">
            This section contains your order information
          </p>
          <div className="my-6">
            <div className="border-b">
              <div className="flex justify-start">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`py-2 px-4 border-b-2 ${
                    activeTab === 1
                      ? "font-bold border-black"
                      : "border-transparent"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`py-2 px-4 border-b-2 ${
                    activeTab === 2
                      ? "font-bold border-black"
                      : "border-transparent"
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setActiveTab(3)}
                  className={`py-2 px-4 border-b-2 ${
                    activeTab === 3
                      ? "font-bold border-black"
                      : "border-transparent"
                  }`}
                >
                  Incomplete
                </button>
              </div>
            </div>
            <div className="mt-6">
              {activeTab === 1 && <div>There are no previous orders.</div>}
              {activeTab === 2 && <div>There are no previous orders.</div>}
              {activeTab === 3 && <div>There are no previous orders.</div>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyOrder