import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  return (
    <div
      className="
        overflow-hidden
        p-10
        rounded-[6px]
        top-5
        sticky
        md:mx-auto
        transform
        z-50
        xl:w-4/5
        2xl:w-[68%]
        bg-white
        flex
        items-center
        justify-between py-6
        px-4
        md:px-8
        mx-6
      "
    >
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/logo/softoralogo.png"
          alt="Softoralogo"
          width={150} // Adjusted width for better prominence
                    height={300} // Adjusted height to maintain proportions
                    className="w-28 md:w-36 lg:w-40 transition duration-300 ease-in-out transform hover:scale-105 
                      border-4 border-transparent 
                      hover:border-4 hover:border-solid hover:border-white"
        />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg">
          <Link href="/showcase" className="hover:text-blue-500">Showcase</Link>
          <Link href="/" className="hover:text-blue-500">Services</Link>
          <Link href="/" className="hover:text-blue-500">Process</Link>
          <Link href="/" className="hover:text-blue-500">Guarantees</Link>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        

        <Link
          href={"/meeting"}
          className="py-3 px-6
            text-lg
            hover:bg-[#abcbff] 
            rounded-[6px]
            border-2 
            border-black 
            dark:border-white 
            bg-[#121212] 
            text-white 
            transition 
            duration-200 
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
            dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseNavbar;
