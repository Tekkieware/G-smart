import React from 'react'
const cloud = require('cloudinary').v2;
import generateSignature from './generateSignature'

cloud.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

const updateImage = async (publicId, imagePath) => {
  const paramsToSign = {
    public_id: publicId,
    timestamp: Date.now() 
  };

  const s = generateSignature(paramsToSign)
  const a = await cloud.uploader.upload(imagePath, {
    public_id: publicId,
    signature: s,
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    timestamp: Date.now()
})
console.log(a)
}

function StartEditing(publicId) {
    const myEditor = cloudinary.mediaEditor();
  
    myEditor.update({
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      publicIds: [publicId],
      image: {
        steps: ["resizeAndCrop", "export"],
        resizeAndCrop: {
          flip: true,
          rotate: true,
      
          presets: [
            "original",
            "square",
            "landscape-16:9",
            "landscape-4:3",
            "portrait-3:4",
            "portrait-9:16",
            "facebookAd",
            "facebookCover",
            "instagramStory",
            "twitterAd",
            "linkedInAd",
            "linkedInCover",
            { label: "Cover Ad", width: 500, height: 1000 },
          ],
        },
        export: {
          formats: ["auto", "png", "webp"],
          quality: ["auto", "best", "good", 55, 75, "low"],
          download: true,
        },
      },
    });
    myEditor.show();
    myEditor.on("close", function(data) {
      myEditor.destroy();
    });
    myEditor.on("export", function(data) {
      const url = data.assets[0].url;
      myEditor.destroy();
    });
  }

export default StartEditing