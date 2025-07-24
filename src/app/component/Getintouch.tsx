import React from 'react'

export default function Getintouch() {
  return (
    <section className='py-20 bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up'>
        <div className='p-8 md:p-12'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>
                    Get in touch
                </h2>
                <p className='text-gray-600 dark:text-gray-300 md:w-2/3'>
                    Browse my recent Machine Learning work and explore in-depth Physics class content tailored for A/L students
                </p>
            </div>
            <form className='flex flex-col md:flex-row gap-4'>
                <input type='email' placeholder="input you'r email" className='flex-1 px-4 py-3 border rounded-lg dark:text-white border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary'></input>
                <button type='submit' className='bg-primary text-white px-8 py-3 rounded-lg'>
                    Subscribe
                </button>
            </form>
        </div>
    </section>
  )
}
