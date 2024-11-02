
import Header from '@/app/_components/Header'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
  return (
    <div>
      <Header/>
      <div className=' flex flex-row w-full bg-orange-200 justify-between'>
        <div className='flex flex-col'>
        <h1 className=' font-semibold text-8xl p-10 text-orange-500 mt-20'>About Us</h1>
        <div className=' p-10'>
        <h1 className=' font-medium text-orange-400 text-4xl'>Welcome to LawMate!</h1>
        <p className=' font-normal text-xl text-justify text-slate-600 pt-5'>LawMate is your comprehensive legal support platform, designed to simplify access to trusted legal advice and services. Our platform connects individuals with verified lawyers across various specialties, offering a secure and user-friendly space for legal consultations, advice, and document sharing.</p>
        </div>

        

        </div>
        
      <img 
      src="/hero.jpg"
      alt='Hero image'
      className='w-[100vh]'
      
      />
      </div>
      <div>
        <h1 className=' font-medium text-orange-400 text-4xl justify-center text-center mt-5'>Our Mission       </h1>
        <p className=' font-normal text-xl text-center text-slate-600 pt-5   p-10' >At LawMate, we aim to bridge the gap between the public and 
          the legal community by providing a digital environment where legal guidance is accessible, 
          secure, and efficient. We empower users to seek professional legal help while ensuring privacy and convenience.</p>
      </div>

      <div>
        <h1 className=' font-medium text-orange-400 text-4xl justify-center text-center mt-5'>What We Offer       </h1>
        <p className=' font-normal text-xl text-center text-slate-600  pt-5' >Our platform is equipped with several features tailored to make legal consultations easier:</p>
        <ul className='text-center font-normal text-xl text-slate-600 pt-5'>
          <li>Verified Lawyer Profiles: Detailed profiles with specializations and availability status.</li>
          <li>Secure Chat and Document Sharing: Real-time chat with encrypted document uploads.</li>
          <li>Knowledge Base: Access articles, FAQs, and legal glossaries.</li>
          
        </ul>
      </div>

    </div>
  )
}

export default AboutUs