import React, { startTransition } from 'react';
import fb from '../../assests/fb.png'
import google from '../../assests/google.png'
import toast from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';
import createJWT from '@/utils/createJWT';
// import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const SocialLogin = ({from}) => {
  const { googleLogin } = useAuth();
  const { replace, refresh } = useRouter();

    const handleGoogleLogin= async()=>{
      const toastId = toast.loading("Loading...");
      try {
        const { user } = await googleLogin();
        await createJWT({ email: user.email });
        startTransition(() => {
          refresh();
          // replace('/');
          replace(from)
          toast.dismiss(toastId);
          toast.success("User signed in successfully");
        });
      } catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message || "User not signed in");
      }
    }
    return (
        <div className='flex justify-around gap-3 mt-5'>
            <img src={fb} alt="" />
            <button
                className=' border border-black w-full py-2
                             hover:bg-black hover:text-white rounded-md
                             flex justify-center gap-2 align-middle'>
                <img src={fb} alt="" />
                <img className='w-5' src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png" alt="" />
                <h2 className='font-bold'>Facebook</h2>
            </button>
            <button onClick={handleGoogleLogin}
                className=' border border-black w-full py-2 hover:bg-black
                             hover:text-white rounded-md 
                             flex justify-center gap-2 align-middle'>
                <img src={google} alt="" />
                <img className='w-5' src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="" />
                <h2 className='font-bold'>Google</h2>
            </button>
        </div>
    );
};

export default SocialLogin;