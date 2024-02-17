import React from 'react'
import { MdZoomInMap } from "react-icons/md";
import { TbPhotoEdit } from "react-icons/tb";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import startEditing  from '../../../utils/StartEditing'
import Script from 'next/script'

interface image {
  url: string,
  id: string,
  public_id: string
  setUrl: React.Dispatch<React.SetStateAction<any>>;
}
const handleUpload = async (publicId: string) => {
  //…
  startEditing(publicId);
};
const Photo: React.FC<image> = ({ url, id, setUrl, public_id }) => {
  return (
    <div>
      <div className='zoom-edit'>
        <button onClick={()=>setUrl(url)} className='px-5'><MdZoomInMap size={25} color='#fff' /></button><button><TbPhotoEdit onClick={() =>handleUpload(public_id)} size={25} color='#fff' /></button> 
      </div>
      <div className='favorite'>
        <button><MdOutlineFavoriteBorder color='#e35907' size={25} /></button>
      </div>
      <Script
        src="https://media-editor.cloudinary.com/all.js"
        type="text/javascript"
      ></Script>
    </div>
  )
}

export default Photo