import React from 'react'
import { CldImage } from 'next-cloudinary'

interface image{
    url: string
    setImg: React.Dispatch<React.SetStateAction<any>>
}
const ImageCard: React.FC<image> = ({url, setImg}) => {
  return (
    

<div className="w-auto p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 image-card">
<CldImage 
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }} className="rounded-t-lg image" src={url} alt="" />
   <button onClick={() =>setImg("")} className="inline-flex items-center px-3 py-2 mt-5 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
</div>

  )
}

export default ImageCard