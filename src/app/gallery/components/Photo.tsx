import React from 'react'
import { MdZoomInMap } from "react-icons/md";
import { TbPhotoEdit } from "react-icons/tb";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

interface image {
  url: string,
  id: string,
  setUrl: React.Dispatch<React.SetStateAction<any>>;
}
const Photo: React.FC<image> = ({ url, id, setUrl }) => {
  return (
    <div>
      <div className='zoom-edit'>
        <button onClick={()=>setUrl(url)} className='px-5'><MdZoomInMap size={25} color='#fff' /></button><button><TbPhotoEdit size={25} color='#fff' /></button> 
      </div>
      <div className='favorite'>
        <button><MdOutlineFavorite color='#e35907' size={25} /> </button><button><MdOutlineFavoriteBorder color='#e35907' size={25} /></button>
      </div>
    </div>
  )
}

export default Photo