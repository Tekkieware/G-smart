'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import app from '../../auth/firebase'
import { Anybody } from 'next/font/google'
import '../../app/globals.css'
import Image from 'next/image'
import { FaK, FaUpload } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { CreateImageRequest, CreateImageResponse } from '../../lib/types'
import Upload from './components/Upload'
import User from './components/User'
import { CldImage } from 'next-cloudinary'


interface user {
  name: string,
  email: string,
}
function Gallery() {
  const [userDetails, setUserDetails] = useState<user>()
  const [defaultView, setDefaultView] = useState<boolean>(true)
  const router = useRouter()
  const retrieveUserData = (): user | null => {
    const data = localStorage.getItem("userDetails");
    return data ? JSON.parse(data) as user : null
  }

  useEffect(() => {
    const user = retrieveUserData()
    if (user?.name) {
      setUserDetails(user)
    } else {
      router.push("/")
    }

  }, [])


  return (
    <div className='min-h-screen p-12 md:p-16 justify-center home-content'>
      <div className='grid grid-cols-1 lg:grid-cols-3 w-full'>
        <div>
          <Image
            src="/images/logo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </div>
        <div className='justify-self-center'>
          <Upload email={userDetails?.email!} />
        </div>
        <User name={userDetails?.name!} setUser={setUserDetails} />
      </div>


      <div className="flex items-end justify-center py-4 md:py-8 flex-wrap">
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">All categories</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
        <button type="button" onClick={() =>setDefaultView(!defaultView)} className="toggle-button">Toggle View</button>
      </div>
      {
        defaultView ?
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <CldImage height={500} width={1000} className="h-auto max-w-full rounded-lg" src="http://res.cloudinary.com/dcajjwtba/image/upload/v1708075609/j7n5xskopsuesp8gkorb.png" alt='not visible' />
        </div>
      </div>
      :
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        
      <CldImage height={500} width={1000} className="h-auto max-w-full rounded-lg" src="http://res.cloudinary.com/dcajjwtba/image/upload/v1708075609/j7n5xskopsuesp8gkorb.png" alt='not visible' />

      </div>
      }
    </div>
  )
}

export default Gallery