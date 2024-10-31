'use client'
import Image from 'next/image';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase';


const SignUpPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);


   const handleSignUp = async (e) => {
      e.preventDefault();
      try {
         const res = await createUserWithEmailAndPassword(email, password);
         console.log({ res });
         sessionStorage.setItem('user', true);
         setEmail('');
         setPassword('');
      } catch (e) {
         console.error(e);
      }
   };

   return (

      <form>
         <div className="flex flex-col items-center p-5 pt-0">
            <Image src={"/logo.png"} alt={"logo"} width={90} height={90} />


            <h2 className="text-3xl text-center  m-2 font-semibold text-gray-800">Sign Up here</h2>
         </div>

         <div className='flex flex-col gap-2'>
            <label className='text-lg font-medium'>Email:</label>
            <input
               className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500'
               type="email"
               name="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder='Enter your email'
            />
         </div>

         <div className='flex flex-col gap-2 mt-4'>
            <label className='text-lg font-medium'>Password:</label>
            <input
               className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500'
               type="password"
               name="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder='Enter your password'
            />
         </div>

         <div className='flex justify-center mt-6'>
            <input
               className='bg-orange-500 w-[100%] text-white rounded-md px-4 py-2 hover:bg-orange-600 transition duration-200 cursor-pointer'
               type="submit"
               value="Sign Up"
               onClick={handleSignUp}

            />
         </div>
      </form>

   );
}

export default SignUpPage;


