import React from "react";

export default function LoginLayout({ children }) {
   return (
      <div className="flex items-center justify-center min-h-screen bg-orange-50">
         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">

            {children}
         </div>
      </div>
   )
}
