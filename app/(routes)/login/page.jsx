'use client';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
   const router = useRouter();

   const handleSignIn = async (e) => {
      e.preventDefault(); // Prevents the form from refreshing the page
      console.log(email);
      console.log(password);
      try {
         const res = await signInWithEmailAndPassword(email, password);
         console.log({ res });
         sessionStorage.setItem('user', true);
         setEmail('');
         setPassword('');
         router.push('/');
      } catch (e) {
         console.error(e);
      }
   };

   return (
      <div>
         <div className="flex flex-col items-center p-5 pt-0">
            <Image src="/logo.png" alt="logo" width={90} height={90} />
            <h2 className="text-3xl text-center m-2 font-semibold text-gray-800">Sign in to your account</h2>
         </div>

         <form className="flex flex-col gap-4">
            <div className='flex flex-col gap-2'>
               <label className='text-lg font-medium'>Email:</label>
               <input
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500'
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
               />
            </div>

            <div className='flex flex-col gap-2'>
               <label className='text-lg font-medium'>Password:</label>
               <input
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500'
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  required
               />
            </div>

            <div className='flex justify-center mt-6'>
               <button
                  className='bg-orange-500 w-[100%] text-white rounded-md px-4 py-2 hover:bg-orange-600 transition duration-200'
                  type="submit" // Type set to submit
                  disabled={loading} // Disable the button while loading
                  onClick={handleSignIn}
               >
                  {loading ? 'Signing in...' : 'Sign in'}
               </button>
            </div>

            {error && <p className="text-red-500 text-center">{error.message}</p>} {/* Display error message if exists */}
         </form>
      </div>
   );
}

export default LoginPage;
