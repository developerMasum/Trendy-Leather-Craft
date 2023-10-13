"use client";
import { useRouter } from 'next/router';
import './page.css'
import React, { useEffect, useRef, useState } from "react";
import { FiHeart } from "react-icons/fi";
import ReactImageZoom from "react-image-zoom";
const detailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('iddddd',id);
  const [count, setCount] = useState(1);
  const [activeSizeTab, setActiveSizeTab] = useState(1);
  const [modal, setModal] = useState(false);
  const [mainImage, setMainImage] = useState("https://i.ibb.co/7pyK3Hf/2.png");
  const images = [
    "https://i.ibb.co/7pyK3Hf/2.png",
    "https://i.ibb.co/Kx3sqcw/3.png",
    "https://i.ibb.co/vHXjyxZ/4.png",
    "https://i.ibb.co/Kx3sqcw/3.png"
  ];
  // TAbs
  const [activeTab, setActiveTab] = useState("page1");
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };
  // Active tabs
  const activeStyle =
    "bg-white rounded-lg shadow text-indigo-900 px-5 flex justify-center py-4";
  const inactiveStyle = "flex justify-center px-5 py-4";
  // Active and non active style
  const activeSizeStyle = "bg-gray-700 text-white px-4 py-2 rounded-full";
  const inactiveSizeStyle =
    "bg-gray-100 border border-gray-500 px-4 py-2 rounded-full";
// 


  return (
    <section className="pt-20 px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="container">
      <div className="img-container">
        <img src={mainImage} alt="Main Display"/>
        <span>hover Me</span>
      </div>

      <ul className="list-products">
        {images.map((img, index) => (
          <li key={index} 
              className={img === mainImage ? "active" : ""} 
              onClick={() => setMainImage(img)}>
            <img src={img} alt={`Thumbnail ${index}`} />
          </li>
        ))}
      </ul>
    </div>
        <div>
          <h2 className="text-2xl font-semibold">Sandak MIAMI Slides </h2>
          {/*Simple Details  */}
          <div className="w-1/3 space-y-2 pt-4">
            <div className="flex gap-2 text-sm">
              <p className="font-semibold">Style: </p>
              <span className="text-gray-800 text-start">Shoe</span>
            </div>
           
            <div className="flex gap-2 text-sm">
              <p className="font-semibold ">Availability: </p>
              <span className="text-start font-medium">In stock</span>
            </div>
          </div>
          {/* Price */}
          <div className="flex  py-4 items-center">
            <p className="text-2xl pr-4 line-through font-medium text-gray-600">
              Tk 349.00
            </p>
            <p className="text-2xl font-medium pr-3 text-red-600">Tk 262.00</p>
            {/* <p className="bg-red-700 text-sm p-2 text-white">24%</p> */}
          </div>
          {/* Offer */}
          <p className="text-sm font-semibold pb-2">
            * Offer is valid only for new user
          </p>
          <p className="font-medium text-red-600 pb-4 underline">
            <span className="text-slate-700">*</span>Upto 20% Cashback T&C
          </p>
          {/* Details */}
          {/* <p className="text-gray-700 text-justify leading-6">
            PRODUCT DETAILS These are our classic beach-ready or wear-at-home
            flip-flop slide sandals which ensure cool comfort in
            summer.FEATURES:- Type: Slides- Gender: Men- Upper Material: Rubber-
            Color: Black- Sole:...
          </p> */}
          {/* Size */}
          <div>
            <div className="pt-4 flex justify-between">
              <p
               
                className="text-slate-700 font-semibold "
              >
                Size <span className="text-red-600">*</span>
              </p>
              {modal && (
                <div className="fixed h-auto inset-0 overflow-y-scroll flex items-center justify-center bg-gray-500 bg-opacity-50">
                  <div className="h-[50%]  p-4 rounded shadow-lg">
                  <button
                      className=" bg-gray-500 px-5 py-2"
                      onClick={() => setModal(false)}
                    >
                      Close
                    </button>
                    <img
                      className=""
                      src="https://i.ibb.co/4W9YsFm/modalcart.png"
                    />
                   
                  </div>
                </div>
              )}
              <p  onClick={() => setModal(true)} className="text-slate-700 font-semibold flex items-center">
                <img src="https://i.ibb.co/tKB3MXN/icon-sizechar.png" />
                <span className="text-slate-700 text-sm">SIZE CHART</span>
              </p>
            </div>
            <div className="pt-5 flex gap-5">
              <button
                className={
                  activeSizeTab === 1 ? activeSizeStyle : inactiveSizeStyle
                }
                onClick={() => setActiveSizeTab(1)}
              >
                1
              </button>
              <button
                className={
                  activeSizeTab === 2 ? activeSizeStyle : inactiveSizeStyle
                }
                onClick={() => setActiveSizeTab(2)}
              >
                2
              </button>
              <button
                className={
                  activeSizeTab === 3 ? activeSizeStyle : inactiveSizeStyle
                }
                onClick={() => setActiveSizeTab(3)}
              >
                3
              </button>
              <button
                className={
                  activeSizeTab === 4 ? activeSizeStyle : inactiveSizeStyle
                }
                onClick={() => setActiveSizeTab(4)}
              >
                4
              </button>
              <button
                className={
                  activeSizeTab === 5 ? activeSizeStyle : inactiveSizeStyle
                }
                onClick={() => setActiveSizeTab(5)}
              >
                5
              </button>
            </div>
          </div>
       
          {/* Quantity*/}
          <div className="pt-5 space-y-4">
            <p className="text-slate-700 font-semibold ">Quantity</p>
            <div className="flex">
              <button
                className="px-3 py-2 border cursor-pointer"
                onClick={decrement}
              >
                -
              </button>
              <button className="px-3 py-2 border cursor-pointer">
                {count}
              </button>
              <button
                className="px-3 py-2 border cursor-pointer"
                onClick={increment}
              >
                +
              </button>
            </div>
          </div>
          {/* Button */}
          <div className="pt-5 space-y-4">
            <div className="flex items-center gap-4">
              <button className="text-sm font-semibold bg-black py-3  w-full rounded-md text-white hover:bg-red-600 transition-colors 0.5s ease-in-out">
                ADD TO CART
              </button>
              <FiHeart
                className="border border-gray-500 p-2 transition-colors 0.5s ease-in-out rounded-md hover:bg-black hover:text-white"
                size={50}
              />
            </div>
            <button className="text-sm border border-gray-900 font-semibold hover:bg-black py-3  w-full rounded-md hover:text-white transition-colors 0.5s ease-in-out">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      {/* TAbs Section */}
      <div className="pt-6">
        <ul
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
          }}
          className="flex bg-gray-200 gap-3 text-center text-gray-500  rounded-lg p-1"
        >
          <li>
            <button
              className={activeTab === "page1" ? activeStyle : inactiveStyle}
              onClick={() => setActiveTab("page1")}
            >
              Pilot Training
            </button>
          </li>
          <li>
            <button
              className={activeTab === "page2" ? activeStyle : inactiveStyle}
              onClick={() => setActiveTab("page2")}
            >
              Titan maintenance
            </button>
          </li>
          <li>
            <button
              className={activeTab === "page3" ? activeStyle : inactiveStyle}
              onClick={() => setActiveTab("page3")}
            >
              Loadout
            </button>
          </li>
        </ul>
        <div className="pt-6">
          {activeTab === "page1" && (
            <div>
              <h2 className="font-semibold">PRODUCT DETAILS</h2>
              <p className="text-gray-600 pt-5">
                Get your casual style back to the basics & put a sporty step
                forward, wearing this pair of stylish sneakers by Bata. Crafted
                with a premium mesh upper with Hydroguard (a Water Repellent
                Fabric) & quality phylon sole that makes it lightweight,
                comfortable & durable.
              </p>
              {/* Feature */}
              <div className="pt-6 text-gray-600 space-y-3">
                <h6>FEATURES:</h6>
                <p className="text-gray-500 px-2  text-base">
                  - Type: Casual Sneaker
                </p>
                <p className="text-gray-500 px-2  text-base">- Gender: Men</p>
                <p className="text-gray-500 px-2  text-base">
                  - Upper Material: Breathable Mesh with Hydroguard (Water
                  Repellent Fabric)
                </p>
                <p className="text-gray-500 px-2  text-base">- Color: Grey</p>
                <p className="text-gray-500 px-2  text-base">- Sole: Phylon</p>
                <p className="text-gray-500 px-2  text-base">
                  - Closing: Closed
                </p>
              </div>

              <p className="text-gray-500 py-5">
                STYLE TIPS: Keep it casual by matching this navy blue pair with
                trim types of denim & a classic leather jacket.
              </p>
              {/* Disclaimer */}
              <h2 className="font-semibold">Disclaimer</h2>
              <p className="text-gray-500 py-1">
                There may be a slight color variation in the image from the
                original product.
              </p>
            </div>
          )}
          {activeTab === "page2" && (
            <div>
              <div className="space-y-5">
                <p className="text-gray-500">
                  Dear Customer, we try our best from our end to provide you the
                  best customer experience.
                </p>
                <p className="font-medium">
                  **The delivery of your order is subjected to availability of
                  stock.
                </p>
                <p className="font-medium">
                  **Check and receive your product in front of the delivery man.
                  If your product is damaged, defective, incorrect or has any
                  mismatch in size or pricing issue at the time of delivery,
                  please return it immediately to the delivery person.
                </p>
                <p className="text-gray-500">
                  For any assistance, you can call our customer service at
                  09666200300. (9.00am to 9.00pm except Govt. holidays) But in
                  case if you couldn't reach the customer service, you can
                  provide your issue details after selecting the proper issue
                  section in our{" "}
                  <span className="text-blue-500 cursor-pointer">
                    {" "}
                    Report Issue Section.
                  </span>
                </p>
              </div>
              {/* Ordering Policy */}
              <div className="pt-12">
                <h2 className="text-3xl font-semibold pb-7">Ordering Policy</h2>
                <div className="text-gray-500 ">
                  <ul className="list-disc pl-5 space-y-5">
                    <li>
                      Service is only available for articles (products) which
                      are shown in stock on our website
                    </li>
                    <li>
                      The delivery of your order is subjected to availability of
                      stock.
                    </li>
                    <li>
                      Only one product should be booked in one order, in case of
                      any customer needs to order multiple products or same
                      products in multiple quantity, customers will need to
                      place multiple separate orders.
                    </li>
                    <li>
                      Currently, each order will be shipped only to a single
                      destination address. If customers wish to ship products to
                      different addresses, customers will need to place multiple
                      separate orders.
                    </li>
                    <li>Orders that are paid for cannot be cancelled.</li>
                    <li>
                      For Order related queries, please kindly contact our
                      Customer Service at 09666200300. (9.00am to 9.00pm except
                      Govt. holidays).
                    </li>
                  </ul>
                </div>
              </div>
              {/* Shipping Policy */}
              <div className="pt-12">
                <h2 className="text-3xl font-semibold pb-7">Shipping Policy</h2>
                <div className="text-gray-500">
                  <p className="pb-12">
                    We are committed to delivering your order accurately, in
                    good condition, and on time. While we will endeavor to ship
                    all items in your order together, this may not always be
                    possible due to product characteristics, or stock
                    availability.
                  </p>
                  <p className="pb-7">
                    Please note our shipping policy as follows:
                  </p>
                  <ul className="list-disc pl-5 space-y-5">
                    <li>
                      Service is only available for articles (products) which
                      are shown in stock on our website
                    </li>
                    <li>
                      The delivery of your order is subjected to availability of
                      stock.
                    </li>
                    <li>
                      Only one product should be booked in one order, in case of
                      any customer needs to order multiple products or same
                      products in multiple quantity, customers will need to
                      place multiple separate orders.
                    </li>
                    <li>
                      Currently, each order will be shipped only to a single
                      destination address. If customers wish to ship products to
                      different addresses, customers will need to place multiple
                      separate orders.
                    </li>
                    <li>Orders that are paid for cannot be cancelled.</li>
                    <li>
                      For Order related queries, please kindly contact our
                      Customer Service at 09666200300. (9.00am to 9.00pm except
                      Govt. holidays).
                    </li>
                  </ul>
                </div>
              </div>
              {/* Size Change */}
              <div className="pt-12">
                <h2 className="text-3xl font-semibold pb-7">Size Change</h2>
                <div className="text-gray-500">
                  <p className="pb-6">Dear Customer,</p>
                  <ul className="list-none space-y-5">
                    <li>
                      We are committed to ensure your satisfaction with any
                      merchandise you have ordered from Batabd.com. The delivery
                      of your order is subjected to availability of stock. You
                      are expected to check and receive your product in front of
                      the delivery man. If your product is damaged, defective,
                      incorrect or has any mismatch in size or pricing issue at
                      the time of delivery, please return it immediately to the
                      delivery person.
                    </li>
                    <li>
                      The delivery of your order is subjected to availability of
                      stock.
                    </li>
                    <li>
                      If the size doesn't fit, you can exchange the size of the
                      product bought from Bata E-Commerce site within 7 days
                      from the delivery date. We will not accept the exchange
                      request if you request for exchange after 7 days from the
                      delivery date.
                    </li>
                    <li>
                      We will only accept exchange that the product(s) being
                      returned for exchange is unused, clean, and in their
                      original state and packaging. In this case please contact
                      our customer service regarding which store can be the most
                      convenient one for you to get the replacement from
                      depending on the product, size and stock availability.
                    </li>
                    <li>
                      You have to call our customer service at 09666200300.
                      (9.00am to 9.00pm except Govt. holidays) to initiate the
                      exchange.
                    </li>
                    <li>
                      An exchange cannot be done with a product of a different
                      model.
                    </li>
                    <li>
                      Please keep your invoice safe and intact as it is
                      essential to give the same to the store while getting your
                      product exchanged.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Refund */}
              <div className="pt-12">
                <h2 className="text-3xl font-semibold pb-7">Refund</h2>
                <div className="text-gray-500">
                  <ul className="list-none space-y-5">
                    <li>
                      We don't process refund for orders which are in "Shipped".
                      We only process refund for Cancel, Pending or Returned
                      orders. If your order is shipped, you are requested to
                      check with the 3rd Party Logistics Provider first to whom
                      your consignment is provided.
                    </li>
                    <li>
                      After getting your refund request, our team will process
                      the refund after crosschecking and verifying whether your
                      product has reached to your or not.
                    </li>
                    <li>
                      Please provide your details such as Order No, Order Date,
                      Contact No. (the number from which your order was
                      created), payment method (Bkash/Nagad/SSLCommerz) and any
                      other relevant information.
                    </li>
                    <li>
                      For Bkash and Nagad payment, we disburse our refund only
                      via Bkash. Please provide your preferred Bkash number in
                      which you want to receive your refund. (Ideally the number
                      should be same through which you paid via Nagad/Bkash)
                    </li>
                    <li>
                      If you pay via your debit/credit card (via SSLCommerz) and
                      make a refund request, after crosschecking and processing
                      from our end it may take 15-20 working days from the end
                      of SSLCommerz to disburse your refund.
                    </li>
                    <li>
                      If you pay via Bkash/Nagad and make a refund request,
                      after crosschecking and processing from our end it may
                      take 15-20 working days from the end of Bkash to disburse
                      your refund.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Terms & Conditions for BataBd Gift Card/ Gift Vouchers  */}
              <div className="pt-12">
                <h2 className="text-3xl font-semibold pb-7">
                  Terms & Conditions for BataBd Gift Card/ Gift Vouchers{" "}
                </h2>
                <div className="text-gray-500">
                  <ul className="list-disc pl-5 space-y-5">
                    <li>
                      These vouchers can only be redeemed at any directly owned
                      Bata store across Bangladesh but, not from any of the
                      dealer or franchised and Online stores. You can find the
                      list of our Bata stores from which you can redeem your
                      voucher in the{" "}
                      <span className="text-blue-500">Store List</span> .
                    </li>
                    <li>
                      With this voucher, customers will be allowed to buy
                      products of their choice which are of regular price.
                      Discounted products will not be sold through gift
                      vouchers.
                    </li>
                    <li>
                      This voucher is not applicable for Cash on Delivery
                      method. It is up for purchase through pre-payment only
                      (Mobile Banking or Debit/Credit Card).
                    </li>
                    <li>
                      The voucher will be activated within 48 working hours of
                      the purchase date through a confirmation SMS.
                    </li>
                    <li>
                      The voucher will remain valid up to 1 months from the date
                      of activation.
                    </li>
                    <li>
                      To redeem a voucher, the customer must provide their
                      contact number, order source & voucher amount at the store
                      counter. A one-time OTP will be generated & sent to the
                      customer & the customer will be required to show the code
                      at the counter.
                    </li>
                    <li>
                      To redeem a voucher, the customer must provide their
                      contact number, order source & voucher amount at the store
                      counter. A one-time OTP will be generated & sent to the
                      customer & the customer will be required to show the code
                      at the counter.{" "}
                    </li>
                    <li>
                      Customers are not eligible to buy more than 10 products in
                      one invoice. One customer can purchase a maximum 2
                      quantity of a single product/design in a single invoice.
                    </li>
                    <li>
                      This voucher is neither exchangeable for any rewards; nor
                      refundable, replaceable or transferable for cash or credit
                      under any circumstances.
                    </li>
                    <li>
                      A consumer can redeem a maximum of 2 vouchers daily from
                      one or multiple accounts.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Warranty Claim Issue  */}
              <div className="pt-12">
                <h2 className="text-3xl font-semibold pb-5">
                  Warranty Claim Issue
                </h2>
                <h2 className="text-2xl font-semibold pb-6">
                  PROCESS OF RECEIVING WARRANTY CLAIM SETTLEMENT
                </h2>
                <div className="text-gray-500">
                  <ul className="space-y-5">
                    <li>
                      Dear Customer, we try our best from our end to provide you
                      the best customer experience. We are committed to ensure
                      your satisfaction with any merchandise you have ordered
                      from Batabd.com. The delivery of your order is subjected
                      to availability of stock. You are expected to check and
                      receive your product in front of the delivery man. If your
                      product is damaged, defective, incorrect or has any
                      mismatch in size or pricing issue at the time of delivery,
                      please return it immediately to the delivery person.
                      <span className="text-blue-500">Store List</span> .
                    </li>
                    <li>
                      But still if you face product issues which complies with
                      our warranty policy stated below, please kindly call our
                      customer service at 09666200300. (9.00am to 9.00pm except
                      Govt. holidays).
                    </li>
                    <li>
                      Our CS will initiate the claim process and only after that
                      you will be requested to return the product to your nearby
                      Bata Store. The store manager will receive the claim
                      according to our regular Warranty Claim policy. The store
                      manager will send the product to the central warehouse for
                      the claim and central warehouse will confirm for
                      settlement after checking the product according to the
                      Warranty claim procedure.
                    </li>
                    <li>
                      After receiving, verifying and crosschecking of your claim
                      product, we will issue a voucher equal to your paid amount
                      against the number from which you have paid for the order.
                    </li>
                    <li>
                      After the voucher gets activated, you can purchase any
                      product equal to or more than the voucher amount in any
                      nearby Bata directly owned store. If your purchase amount
                      is more than the voucher amount, you have to pay the
                      difference in the store.
                    </li>
                    <li>
                      Please kindly note that no further Warranty Claim or
                      Exchange will be provided to the products which you have
                      purchased via your issued claim voucher.
                    </li>
                  </ul>
                </div>
              </div>
              {/* WARRANTY POLICY */}
              <div className="pt-12">
                <h2 className="text-3xl font-semibold pb-5">WARRANTY POLICY</h2>
                <h2 className="text-gray-500 pb-8">
                  100% claim of paid amount provided for merchandise bought from
                  Batabd.com in case of any major manufacturing defects, if the
                  concerned issue is raised to our customer service and then the
                  product is brought to our store within 30 days from the date
                  of the delivery.
                </h2>
                <div className="text-slate-700 font-semibold">
                  <ul className="space-y-5">
                    <li>
                      *Bata reserves the right not accepts to any fraudulent
                      claim and make final decision on any claim settlement.
                    </li>
                    <li>
                      *No claims will be provided for discounted products having
                      more than 10% discount.
                    </li>
                    <li>
                      *We don't entertain claim for any non-footwear items
                      except Bags, Belts and Wallets
                    </li>
                    <li>
                      *In case of minor defect, customers will get a repair
                      service.
                    </li>
                  </ul>
                </div>
              </div>
              {/* WARRANTY POLICY */}
              <div className="pt-12">
                <h2 className="text-3xl font-semibold pb-5">
                  DEFINITION OF CLAIM
                </h2>
                <h2 className="text-gray-500 pb-5">
                  A Shoe/Accessory manufactured and sold by Batabd.com which
                  develops any defect during the course of normal wear by the
                  customer.
                </h2>
                <h2 className="text-slate-700 font-medium pb-5">For Shoes:</h2>

                <div className="text-gray-500">
                  <ul className="list-disc pl-10 space-y-4">
                    <li>If the upper is damaged and/or becomes discolored.</li>
                    <li>
                      The upper or sole is torn due to bad stitching and/or bad
                      material.
                    </li>
                    <li>Sole detachment occurs due to bad adhesion. </li>
                    <li>
                      The sole/insole/material is cracked or spoiled due to bad
                      material.{" "}
                    </li>
                  </ul>
                </div>
                {/* For Non Footwear (Bags, Belts, Wallets) */}
                <h2 className="text-slate-700 font-medium pb-5 pt-10">
                  For Non Footwear (Bags, Belts, Wallets)
                </h2>

                <div className="text-gray-500">
                  <ul className="list-disc pl-10 space-y-4">
                    <li>Discolor on buckles</li>
                    <li>Material cracked or damaged due to bad material</li>
                    <li>Chain or handler detached due to poor stitching</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === "page3" && (
            <div>
              <img src="https://i.ibb.co/BtF65yz/size-chart-new-2.png" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default detailsPage;