'use client'
import {useEffect} from 'react'
import Image from "next/image";
import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import app from '../auth/firebase'
import { getAuth } from 'firebase/auth'
import useGoogleLogin from '@/hooks/useGoogleLogin';
import { FcGoogle } from "react-icons/fc";
import Footer from './components/Footer';

interface user{
  name: string,
  email: string,
}

export default function Home() {
  const router = useRouter();
  const user = useGoogleLogin()

  const retrieveUserData = (): user | null =>{
    const data = localStorage.getItem("userDetails");
    return data ? JSON.parse(data) as user : null
  }

  useEffect(() =>{
    const user = retrieveUserData()
    if (user?.name){
        router.push("gallery")
    }
 }, )

  const signInWithGoogle = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      localStorage.setItem("userDetails", JSON.stringify(user))
      router.push("/gallery")
    } catch (error: any) {
      console.log("Error signing in with google", error.message)
    }
  }



  return (
    <main className="flex min-h-screen flex-col gap-12 p-12 md:p-16 home-content">

      <div className="flex w-full items-end justify-center md:p-6 from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Image
          src="/images/logo.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={250}
          height={24}
          priority
        />
      </div>
      <div className="grid w-full justify-center justify-items-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div className="">
          <p className="hero-cap text-lg  font-semibold text-center pb-10">
            Welcome to G-smart, your curated gallery. <br/>Discover a world of art.
          </p>
        </div>
        <div className="gallery p-10 relative max-w-xl mx-auto">
          <Image
            src="/images/gallery.png"
            alt="Vercel Logo"
            className="h-64 w-full object-cover rounded-md"
            width={200}
            height={24}
            priority
          />
          <div className="absolute inset-0 bg-gray-700 opacity-20 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
          <div className=''>
            <button  onClick={signInWithGoogle} className="button-text inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <FcGoogle size={20} />&nbsp; Sign in with Gooogle
                    </button>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    


    </main>
  );
}
