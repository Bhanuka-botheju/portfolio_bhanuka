import Link from 'next/link'
import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [status,setstatus] = useState<FormStatus>('idle');
  return (
    <div className='container max-w-7xl mx-auto py-20'>
        <h1 className='text-4xl font-bold mb-20 trxt-center'>
          Contact Me
        </h1>
      <div className='space-y-8'>
        <h2 className='text-2xl font-semibold mb-4'>
          Get in Touch
        </h2>
        <p className='text-secondary md:w-2/3'>
          I'm always open to discussing new projects,create ideas or opportunities to be paert of your visions
        </p>
        <div className='flex items-center gap-4'>
          <FaEnvelope className='w-6 h-6 text-primary'/>
          <div>
            <h3 className='text-semibold'>Email:</h3>
            <Link href="mailtobhanukabotheju@gmail.com" className='text-secondary hover:text-primary'>bhanukabothejuofficial@gmail.com</Link>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <FaPhone className='w-6 h-6 text-primary'/>
          <div>
            <h3 className='text-semibold'>Phone:</h3>
            <Link href="tel:+94766420749" className='text-secondary hover:text-primary'>+94 766420749</Link>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <FaMapMarkerAlt className='w-6 h-6 text-primary'/>
          <div>
            <h3 className='text-semibold'>Address:</h3>
            <Link href="mailtobhanukabotheju@gmail.com" className='text-secondary hover:text-primary'>574 Enderamulla Wattala</Link>
          </div>
        </div>
        <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>Name</label>
              <input 
              required
              type='text' id="name" name='name' placeholder='Enter your Name' className='w-full px-4 py-2 rounded-md  border-garay-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'></input>
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
              <input
              required 
              type='text' id="email" name='email' placeholder='Enter your Email' className='w-full px-4 py-2 rounded-md  border-garay-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'></input>
            </div>
            <div>
              <label htmlFor='massage' className='block text-sm font-medium mb-2'>Message</label>
              <textarea
              rows={4} 
              id="Message" name='Message' placeholder='Enter your Message' className='w-full px-4 py-2 rounded-md  border-garay-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none'></textarea>
            </div>
            <button type='submit' className='w-full btm btn-primary'>
              {status === 'loading'? "Sending...":"Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
