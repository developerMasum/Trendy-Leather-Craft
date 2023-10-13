// "use client"
// import React, { useEffect } from 'react';

// import { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import 'swiper/css/free-mode';

// // import "./styles.css";

// // import required modules
// import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";


// const CollectionSlider = () => {

//     const [shoes, setShoes] = useState([])
//     useEffect(() => {
//         fetch('shoes.json')
//             .then(res => res.json())
//             .then(data => setShoes(data))
//         // .catch(error => console.error(error))
//     }, []);

//     console.log(shoes);
//     console.log(shoes.length);

//     return (
//         <div className='md:mx-40 mx-2'>
//             <div className='flex align-center gap-5 items-center'>

//                 <h2 className='mt-20 border-black border-l-2 border-t-2 h-10 w-full'></h2>

//                 <h2 className='pt-10 md:w-[630px] md:text-[16px] text-[12px]'>AUTUMN WINTER COLLECTION</h2>
//                 <h2 className='mt-20  border-black w-full border-t-2 border-r-2 h-10'></h2>
//             </div>
//             <div className=''>
//                 < >
//                     <Swiper
//                         slidesPerView={5}
//                         spaceBetween={30}
//                         freeMode={true}

//                         centeredSlides={true}
//                         autoplay={{
//                             delay: 2500,
//                             disableOnInteraction: false
//                         }}
//                         // pagination={{
//                         //     clickable: true
//                         // }}
//                         navigation={true}
//                         modules={[Autoplay, Pagination, Navigation, FreeMode]}
//                         className="mySwiper"
//                     >
//                         <SwiperSlide className=''>

//                         </SwiperSlide>

//                         {
//                             shoes.map(shoe => <SwiperSlide
//                                 key={shoe.id}
//                                 shoe={shoe}
//                             >
//                                 <div >
//                                     {/* <div className='bg-slate-500'>
//                                         <h1 className='grid justify-center  p-2 rounded-md w-40 mx-auto text-center '>Quick View</h1>
//                                     </div> */}
//                                     <img className='md:h-[150px] h-[50px] hover:scale-125 md:hover:scale-125' src={shoe.image} alt="" />

//                                     <div className='grid justify-center'>
//                                         <h2 className='mt-8 text-sm'>{shoe.name}</h2>
//                                         <h2 className='font-bold text-sm'>{'$' + " " + shoe.price}</h2>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>)
//                         }
//                     </Swiper>
//                 </>
//             </div>
//             <h2 className='mb-20 border-black w-full h-10 border-l-2 border-b-2 border-r-2'></h2>
//         </div>
//     );
// };

// export default CollectionSlider;




"use client"
import React, { useEffect } from 'react';

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/free-mode';
// import Modal from "./Modal";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";


const CollectionSlider = () => {

    // ####
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // ####

    const [shoes, setShoes] = useState([])
    useEffect(() => {
        fetch('shoes.json')
            .then(res => res.json())
            .then(data => setShoes(data))
        // .catch(error => console.error(error))
    }, []);

    console.log(shoes);
    console.log(shoes.length);

    // #######
    const handleClickToView = (card) => {
        openModal(true); // Open the modal
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        setShowLoveButton(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setShowLoveButton(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    // Define closeModal within the component scope
    const closeModal = () => {
        setIsModalOpen(false);
    };
    //   ########


    return (
        <div className='md:mx-40 mx-2'>
            <div className='flex align-center gap-5 items-center'>

                <h2 className='mt-20 border-black border-l-2 border-t-2 h-10 w-full'></h2>

                <h2 className='pt-10 md:w-[630px] md:text-[16px] text-[12px]'>AUTUMN WINTER COLLECTION</h2>
                <h2 className='mt-20  border-black w-full border-t-2 border-r-2 h-10'></h2>
            </div>
            <div className=''>
                < >
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        freeMode={true}

                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        // pagination={{
                        //     clickable: true
                        // }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation, FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide className=''>

                        </SwiperSlide>

                        {
                            shoes.map(shoe => <SwiperSlide
                                key={shoe.id}
                                shoe={shoe}
                            >
                                <div >
                                   
                                    {/* ######################################################## */}
                                    <div
                                        className="max-w-lg mx-1 my-4 hover:border shadow-md transition duration-300 transform rounded-lg hover:shadow-xl  relative overflow-hidden"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <img
                                            src={shoe.image}
                                            alt={shoe.name}
                                            className={`w-full md:h-32 h-20 object-cover rounded-t-lg transition duration-300 transform ${isHovered ? "scale-125 opacity-40 " : ""
                                                }`}
                                        />
                                        <div className="p-4 text-center text-sm ">
                                            <h2 className="text-xs font-semibold text-slate-700">{shoe.name}</h2>
                                            <h2 className='font-bold text-sm'>{'$' + " " + shoe.price}</h2>
                                            {/* <div className="flex justify-center gap-4 my-2">
                                                <del className="text-red-700">{shoe.previousPrice}</del>
                                                <p className="text-green-700">{card.price}</p>
                                            </div> */}
                                            {/* <div className="flex justify-center items-center mt-2">
                                                   <StarsRating className="flex" value={card.rating} isEdit={false} />
                                              </div> */}

                                        </div>

                                        {isHovered && (
                                            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-10">
                                                <button
                                                    className="text-black bg-white text-xs hover:bg-black hover:text-white font-bold py-2 px-4 rounded-md transition duration-500 transform hover:scale-110"
                                                    onClick={() => handleClickToView(card)}
                                                >
                                                    Quick view
                                                </button>
                                            </div>
                                        )}
                                        
                                        {/* <Modal card={card} isOpen={isModalOpen} onClose={closeModal} /> */}
                                    </div>
                                    {/* ######################################################## */}


                                   
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </>
            </div>
            <h2 className='mb-20 border-black w-full h-10 border-l-2 border-b-2 border-r-2'></h2>
        </div>
    );
};

export default CollectionSlider;