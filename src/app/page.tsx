import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 p-12 md:p-24 home-content">
      
        <div className="flex w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Image
              src="/images/logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={300}
              height={24}
              priority
            />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center justify-items-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none ">
            <div>
            <h5 className="hero-cap text-center p-4">
            Welcome to G-smart, your curated gallery. Discover a world of art. 
            </h5>
            </div>

            <div>
            <Image
              src="/images/logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={300}
              height={24}
              priority
            />
            </div>
            <div className="gallery p-10 relative max-w-xl mx-auto">
            <Image
              src="/images/gallery.png"
              alt="Vercel Logo"
              className="h-64 w-full object-cover rounded-md"
              width={200}
              height={24}
              priority
            />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-[#fff] hover:text-[#e9580b] text-4xl font-bold gallery-text">Explore Gallery</h2>
    </div>
            </div>
        </div>
     

     
    </main>
  );
}
