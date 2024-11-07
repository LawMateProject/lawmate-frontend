'use client';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const SignUpPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
   const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
   const [generalError, setGeneralError] = useState(null); // To store general error messages
   const router = useRouter();

   const handleSignUp = async (e) => {
      e.preventDefault();
      setGeneralError(null); // Reset any previous errors
      try {
         const res = await createUserWithEmailAndPassword(email, password);
         if (res) {
            sessionStorage.setItem('user', true);
            setEmail('');
            setPassword('');
            router.push('/login'); // Redirect to homepage after successful signup
         } else {
            setGeneralError('Sign up failed. Please check your credentials and try again.');
         }
      } catch (e) {
         console.error("Sign-up error:", e);
         setGeneralError('An error occurred during sign-up. Please try again later.');
      }
   };

   const handleGoogleSignIn = async () => {
      setGeneralError(null); // Reset any previous errors
      try {
         const res = await signInWithGoogle();
         if (res) {
            sessionStorage.setItem('user', true);
            router.push('/dashboard'); // Redirect to homepage after successful Google login
         } else {
            setGeneralError('Google sign-in failed. Please try again.');
         }
      } catch (e) {
         console.error(e);
         setGeneralError('An error occurred during Google sign-in. Please try again later.');
      }
   };

   return (
      <form onSubmit={handleSignUp} className="flex flex-col  items-center p-5 pt-0">
         <div className="flex flex-col items-center p-5 pt-0">
            <Image src={"/logo.png"} alt="logo" width={90} height={90} />
            <h2 className="text-3xl text-center m-2 font-semibold text-gray-800">Sign Up here</h2>
         </div>

         <div className="flex flex-col gap-2 w-full ">
            <label className="text-lg font-medium">Email:</label>
            <input
               className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter your email"
               required
            />
         </div>

         <div className="flex flex-col w-full gap-4 mt-4">
            <label className="text-lg font-medium">Password:</label>
            <input
               className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter your password"
               required
            />
         </div>

         {error && <p className="text-red-500 mt-2">{error.message}</p>}
         {generalError && <p className="text-red-500 mt-2">{generalError}</p>}

         <div className="flex justify-center w-full mt-6">
            <button
               className="bg-orange-500 w-full text-white rounded-md px-4 py-2 hover:bg-orange-600 transition duration-200"
               type="submit"
               disabled={loading}
            >
               {loading ? "Signing up..." : "Sign Up"}
            </button>
         </div>

         <div className='w-full'>
            {/* Divider with "or" */}
            <div className="flex items-center my-6">
               <div className="flex-grow border-t border-gray-300"></div>
               <span className="mx-3 text-gray-500">or</span>
               <div className="flex-grow border-t border-gray-300"></div>
            </div>
            {/* Google Sign-In Button */}

            <div className="flex justify-center mt-6">
               <button
                  className="bg-white flex flex-row items-center justify-center text-black border gap-5 border-gray-300 rounded-md px-4 py-2 w-full hover:bg-orange-200 transition duration-200"
                  onClick={handleGoogleSignIn}
                  disabled={googleLoading}
               >
                  <Image src="/google_icon.png" alt="Google logo" width={30} height={30} className="mr-2" />
                  {googleLoading ? 'Continuing with Google...' : 'Continue with Google'}
               </button>
            </div>
         </div>




         {googleError && <p className="text-red-500 text-center mt-2">Error: {googleError.message}</p>}

         {/* "Already have an account?" link */}
         <div className="flex justify-center mt-4">
            <p className="text-gray-600">
               Already have an account?{' '}
               <Link href="/login" className="text-orange-500  hover:text-orange-600">
                  Log In
               </Link>
            </p>
         </div>

      </form >

   );
};


export default SignUpPage;
