import React from 'react'
import {useRouter} from 'next/navigation'
interface user {
    name: string,
    setUser: React.Dispatch<React.SetStateAction<any>>;
  }
const User:React.FC<user> = ({name, setUser}) => {
  const router = useRouter()
    const handleLogout = async () => {
        localStorage.removeItem("userDetails")
        setUser({ name: "", email: "" })
        router.push("/")
      }
  return (
    <div className='justify-self-end'><b className='m-5'>Welcome, {name}</b><button className='py-2 px-5 text-sm font-medium text-red-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={handleLogout}>Log Out</button></div>
  )
}

export default User