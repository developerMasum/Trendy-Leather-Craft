'use client'
import SocialLogin from '@/components/SocialLogin/SocialLogin';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { useForm } from 'react-hook-form';



const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className='pt-20 md:mx-40'>
            {/* left div */}
            <div className='md:grid md:grid-flow-col grid-cols-2'>
                <div className=' md:px-20 px-3 '>
                    <h2 className=' text-2xl'>Discover all the benefits</h2>
                    <p className=' text-sm pt-8'>
                        Create an account to enhance your shopping experience whit  the help of our customized services:
                    </p>
                    <div className='pt-6 ps-5 text-sm grid grid-flow-row gap-3'>
                        <p className='flex gap-2 items-center'><GiCheckMark className='text-[10px]'></GiCheckMark>Seep up to date with the latest news </p>
                        <p className='flex gap-2 items-center'><GiCheckMark className='text-[10px]'></GiCheckMark>Buy faster</p>
                        <p className='flex gap-2 items-center'><GiCheckMark className='text-[10px]'></GiCheckMark>Save your favorite products</p>
                    </div>
                </div>


                {/* right div */}
                <div className=' border-l-2 md:px-20 px-3 md:mt-0 mt-10'>

                    <h2 className=' text-2xl'>Login or create your account</h2>
                    <h2 className=' text-lg pt-8'>Continue with your phone number</h2>
                    <h2 className=' text-sm pt-3'>Please insert your phone number to log in or create account.</h2>

                    <p className='flex justify-end text-[12px] mb-2 mt-5'>Required fields <span className='ms-1'> *</span></p>




                    {/* react hook form */}

                    <form onSubmit={handleSubmit((data) => console.log(data))}>

                        <input className=' border border-gray-500 rounded-md px-3 py-2 w-full mb-6' placeholder='Email' {...register('email', { required: true })} />
                        {errors.lastName && <p className='text-red-400'>Enter your email</p>}
                        <input className=' border border-gray-500 rounded-md px-3 py-2 w-full' placeholder='Password' {...register('password', { required: true })} />
                        {errors.lastName && <p className='text-red-400'>Enter your valid password</p>}


                        <button className='w-full'>
                            <input className='border rounded-md px-3 py-2 w-full mt-5 bg-slate-800 hover:bg-black text-white' type="submit" />
                        </button>
                    </form>

                    {/* ___________________ */}

                    <h2 className='mt-4 flex justify-center'>_____________________ <span className='mx-2 mt-1'>Or</span> _____________________</h2>

                    <div>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;
