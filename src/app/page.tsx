'use client'
import Image from "next/image";
import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import app from '../auth/firebase'
import { getAuth } from 'firebase/auth'

export default function Home() {

  const router = useRouter()
  const signInWithGoogle = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
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
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center justify-items-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none ">
        <div className="">
          <h5 className="hero-cap text-center p-4">
            Welcome to G-smart, your curated gallery. Discover a world of art.
          </h5>
        </div>

        <div className="grid grid-cols-1 justify-items-center px-16 py-10 sign-in ">
          <Image
            src="/images/google.png"
            alt="google Logo"
            width={130}
            height={24}
            priority
          />
          <div className=''>
            <button onClick={signInWithGoogle} className='button-text'>
              Sign in with google

            </button>
          </div>
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
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-[#fff] hover:text-[#e9580b] text-4xl font-bold gallery-text">Explore Gallery</h2>
          </div>
        </div>
      </div>



    </main>
  );
}
