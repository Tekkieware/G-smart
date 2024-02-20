import React from 'react'
import {v2 as cloud} from 'cloudinary'
import generateSignature from './generateSignature'

cloud.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

const storeImageMetadata = async (data) => {
  const url = data.url
  const public_id = data.public_id
  const user = JSON.parse(localStorage.getItem("userDetails"))
  const owner = user.email
  await fetch('/api/image', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          url: url, owner: owner, public_id: public_id

      }),
      next: { revalidate: 10 }
  },).then((res) => {
      console.log("success")
  }).catch((e) => {
      console.log(e)
  }) 
}
async function uploadNewImage (imagePath) {
  const response = await cloud.uploader.upload(imagePath,{})
  await storeImageMetadata(response)

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
    myEditor.on("export", async function(data) {
      const url = data.assets[0].secureUrl;
      await uploadNewImage(url)
      myEditor.destroy();
      location.reload()
    });
  }

export default StartEditing