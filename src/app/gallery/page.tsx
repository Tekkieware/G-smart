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
import Photo from './components/Photo'
import ImageCard from './components/ImageCard'


interface user {
  name: string,
  email: string,
}

interface image{
  owner: string,
  url: string,
  __v: number,
  _id: string,
  public_id: string
}


function Gallery() {
  const [userDetails, setUserDetails] = useState<user>()
  const [defaultView, setDefaultView] = useState<boolean>(true)
  const [images, setImages] = useState<image[]>()
  const [imageCardUrl, setImageCardUrl] = useState<string>("")
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
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
    getUserImages(user?.email!)
   
  }, [])

  const getUserImages = async (owner: string) => {
    setLoading(true)
    const response =  await fetch(`/api/image?owner=${owner}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    const data = await response.json()
    setImages(data)
    setLoading(false)
}

const resetPage =() =>{
  location.reload()
}

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
          <Upload resetPage={resetPage} email={userDetails?.email!} />
        </div>
        <User name={userDetails?.name!} setUser={setUserDetails} />
      </div>


      <div className="flex items-end justify-center py-4 md:py-8 flex-wrap">
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">All categories</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Vacations</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Work</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">School</button>
        {
          imageCardUrl === "" ?<></> :
          <ImageCard setImg={setImageCardUrl} url={imageCardUrl} />
        }
      </div>
    
      
        {loading ?<div><p>Loading.....</p></div> :
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          images?.map((image, id)=>{
            return <div className='relative' key={id}>
            <CldImage  width="1000"height="600" crop="thumb" className="h-auto max-w-full rounded-lg" src={image.url} alt='not visible' />
            <Photo url={image.url} id={image._id} setUrl={setImageCardUrl} public_id={image.public_id} />
          </div>
          })

        }
        {images?.length === 0 &&
         <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Your have no images.</span> Click the upload button to add to your gallery.
        </div>
        }
      </div>
      }
    </div>
  )
}

export default Gallery