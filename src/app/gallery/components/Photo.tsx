"use client"
import React, { useState } from 'react'
import { MdZoomInMap } from "react-icons/md";
import { TbPhotoEdit } from "react-icons/tb";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import startEditing from '../../../utils/StartEditing'
import Script from 'next/script'
import { TbCategoryPlus } from "react-icons/tb";
import { categories } from '../utils/categories'

interface image {
  url: string,
  id: string,
  public_id: string
  setUrl: React.Dispatch<React.SetStateAction<any>>;
}



const Photo: React.FC<image> = ({ url, id, setUrl, public_id }) => {

  const [showChangeCategory, setShowChangeCategory] = useState<boolean>(false)
  const [cat, setCat] = useState<string>("")

  const handleEdit = async (publicId: string) => {
    //…
    startEditing(publicId);
  };


  return (
    <div>
      <div className=''>

      </div>
      <div className='zoom-edit'>
        <button onClick={()=>setUrl(url)} className='px-5'><MdZoomInMap size={25} color='#fff' /></button><button><TbPhotoEdit onClick={() => handleEdit(public_id)} size={25} color='#fff' /></button>

      </div>
      <Script
        src="https://media-editor.cloudinary.com/all.js"
        type="text/javascript"
      ></Script>
    </div>
  )
}

export default Photo