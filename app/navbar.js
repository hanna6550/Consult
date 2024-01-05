import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/image/logo.png'

function Navbar() {
  return (

    
    <header className="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <a href="#" className="flex basis-1/2 items-center space-x-5">
            <Image src={logo} class="h-8" alt="Gobeze Logo" />
            <span href="/" className='text-blue-500 font-extrabold text-3xl'>Gobeze Consult</span>
          </a>

        <div className="flex basis-1/2 w-full md:w-auto">
         <div className="font-medium flex p-10 md:p-0 mt-4 md:flex-row md:space-x-20 md:border-0">
             <ul>
             <a href="#Home" className="block rounded md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:-translate-y-1" aria-current="page">Home</a>
             </ul>
             <ul>
             <a href="#About" className="block text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:-translate-y-1">About_Us</a>
             </ul>
             <ul>
             <a href="#Services" className="block text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:-translate-y-1">Services</a>
             </ul>
             <ul>
             <a href="#Blog" className="block text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:-translate-y-1">Blog</a>
             </ul>
             <ul>
             <a href="#Contact" className="block text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:-translate-y-1">Contact</a>
             </ul>
         </div>
         </div>

        </div>
      </div>
    </header>
    // <div >
    // <nav className="fixed top-0 left-0 w-full bg-gray-200 border-black-900 ">
    // <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4 ml-20">
        
    //     <div className="flex basis-1/2 w-full md:w-auto">
    //     <div className="font-medium flex p-10 md:p-0 mt-4 md:flex-row md:space-x-16 md:border-0">
    //         <ul>
    //         <a href="#Home" className="block rounded md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:-translate-y-1" aria-current="page">Home</a>
    //         </ul>
    //         <ul>
    //         <a href="#About" className="block text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:-translate-y-1">About</a>
    //         </ul>
    //         <ul>
    //         <a href="#Services" className="block text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:-translate-y-1">Services</a>
    //         </ul>
    //         <ul>
    //         <a href="#Contact" className="block text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent hover:-translate-y-1">Contact</a>
    //         </ul>
    //     </div>
    //     </div>

    //     <a href="#" className="flex basis-1/2 items-center space-x-5 ml-40">
    //         <Image src={logo} class="h-8" alt="Gobeze Logo" />
    //         <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Gobeze Consult</span>
    //     </a>

    // </div>
    // </nav>

    // </div>
  )
}


export default Navbar;
