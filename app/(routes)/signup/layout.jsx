import Image from "next/image";
import React from "react";

export default function LoginLayout({ children }) {
   return (
      <div className="flex min-h-screen bg-orange-50">
         {/* Left half - could be used for an image or any other content */}
         <div className="w-[55%] min-h-screen relative">
            <Image
               src="/justicelady1.jpg"  // Replace with your image path
               alt="Decorative image"
               layout="fill"
               className="rounded-l-lg "
            />
         </div>

         {/* Right half - Login form container */}
         <div className="flex items-center justify-center w-[45%] bg-orange-50">
            <div className="w-full  h-full p-10  bg-white rounded-lg shadow-md">
               {children}
            </div>
         </div>
      </div>
   );
}
