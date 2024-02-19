import React from 'react'
import { CldUploadWidget} from 'next-cloudinary';
import { useRouter } from 'next/navigation'

interface user {
    email: string,
    resetPage: () => void
  }
const Upload: React.FC<user> =({email, resetPage}) =>{
  const router = useRouter()
    const storeImageMetadata = async (data:any) => {
        const url = data.url
        const public_id = data.public_id
        console.log(data)
        const owner = email
        await fetch('/api/image', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url, owner: owner, public_id: public_id

            })
        }).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }
  return (
    <CldUploadWidget 
            signatureEndpoint="/api/sign-cloudinary-params"
            uploadPreset='g-smart'
            onUpload={(result) => {
              storeImageMetadata(result?.info)
            }}
            onClose={() => resetPage()}
            >
              {({ open }) => {
                return (
                  <button onClick={() => open()} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  New Photo
                    </button>
                );       
              }}
            </CldUploadWidget>
  )
}

export default Upload