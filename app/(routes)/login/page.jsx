'use client';
import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
   const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
   const [generalError, setGeneralError] = useState(null);
   const router = useRouter();

   const handleSignIn = async (e) => {
      e.preventDefault();
      setGeneralError(null);
      try {
         const res = await signInWithEmailAndPassword(email, password);
         if (res?.user) {
            sessionStorage.setItem('user', true);
            setEmail('');
            setPassword('');
            router.push('/dashboard'); // Navigate to dashboard on successful login
         } else {
            setGeneralError('Failed to sign in. Please check your credentials and try again.');
         }
      } catch (e) {
         console.error(e);
         setGeneralError('An error occurred during sign-in. Please try again later.');
      }
   };

   const handleGoogleSignIn = async () => {
      setGeneralError(null);
      try {
         const res = await signInWithGoogle();
         if (res?.user) {
            sessionStorage.setItem('user', true);
            router.push('/dashboard'); // Navigate to dashboard on successful Google sign-in
         } else {
            setGeneralError('Google sign-in failed. Please try again.');
         }
      } catch (e) {
         console.error(e);
         setGeneralError('An error occurred during Google sign-in. Please try again later.');
      }
   };

   return (
      <div>
         <div className="flex flex-col gap-3 items-center pt-0">
            <Image src="/logo.png" alt="logo" width={90} height={90} />
            <h2 className="text-3xl text-left m-1 font-semibold text-gray-800">Welcome Back!</h2>
            <h2 className="text-2xl text-center m-1 font-semibold text-gray-800">Sign in to your account</h2>
         </div>

         <form className="flex flex-col gap-6" onSubmit={handleSignIn}>
            <div className='flex flex-col gap-2'>
               <label className='text-lg font-medium'>Email</label>
               <input
                  className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-orange-500'
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
               />
            </div>

            <div className='flex flex-col gap-2'>
               <label className='text-lg font-medium'>Password</label>
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
                  className='bg-orange-500 w-full text-white rounded-md px-4 py-2 hover:bg-orange-600 transition duration-200'
                  type="submit"
                  disabled={loading}
               >
                  {loading ? 'Signing in...' : 'Sign in'}
               </button>
            </div>

            {error && <p className="text-red-500 text-center">Error: {error.message}</p>}
            {generalError && <p className="text-red-500 text-center">{generalError}</p>}
         </form>

         {/* Divider with "or" */}
         <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
         </div>

         {/* Google Sign-In Button */}
         <div className='flex justify-center'>
            <button
               className='bg-white w-full flex flex-row items-center justify-center text-black border gap-5 border-gray-300 rounded-md px-4 py-2 hover:bg-orange-200 transition duration-200'
               onClick={handleGoogleSignIn}
               disabled={googleLoading}
            >
               <Image src="/google_icon.png" alt="Google logo" width={30} height={30} className="mr-2" />
               {googleLoading ? 'Continuing with Google...' : 'Continue with Google'}
            </button>
         </div>

         {googleError && <p className="text-red-500 text-center">{googleError.message}</p>}

         {/* "Don't have an account?" link */}
         <div className="flex justify-center mt-4">
            <p className="text-gray-600">
               Don't have an account?{' '}
               <Link href="/signup" className="text-orange-500 hover:text-orange-600">
                  Sign up
               </Link>
            </p>
         </div>
      </div>
   );
}

export default LoginPage;
