import React from 'react'
// import Typewriter from 'typewriter-effect'; 
import Image from 'next/image'
import ppl from '../public/assets/image/ppl.jpg'
import pp from '../public/assets/image/pp2.jpg'
import partners from '../public/assets/image/companyLogos.jpg'


function Index() {
  return (
    <div id='Home' className='max-w-6xl mx-auto px-4 sm:px-6'>

      <div className="md:pt-40 bg-gray-100 rounded">
          <div className="text-center md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Helping<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-400"> Good People Win</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda autem molestias velit, maxime nihil id quo explicabo quis atque animi possimus, non ut iure perspiciatis</p>

              <div>
                <h1 className="text-4xl text-orange-500 md:text-6xl font-bold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">go - </h1>
                {/* <Typewriter>
                options={{
                    strings: ["Learn", "Train", "Accelerate", "Work", "Sira"],
                    autoStart: true,
                    loop: true,
                  }}
                </Typewriter> */}
              </div>

              <div className="sm:justify-center" >
                <div>
                  <a className="inline-flex items-center p-1 text-white-900 rounded font-medium bg-blue-200 hover:bg-orange-400" href="#">More About Us
                  <svg class=" w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>


        
        {/* Services */}
        <div>
          <h1 className="text-center text-orange-400 text-3xl md:text-3xl mb-4 mt-20" data-aos="zoom-y-out">Our Services</h1>

          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="order-1 sm:ml-6 xl:ml-0">
                      <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                          <span className="mb-1 block text-2xl leading-6 text-indigo-500">Consulting</span>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda. </h3>
                      <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda autem molestias velit, maxime nihil id quo explicabo quis atque.</p>
                      </div>
                      <a
                          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                          href="#">more<svg
                              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                              width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round">
                              <path d="M0 0L3 3L0 6"></path>
                          </svg>
                          </a>
                  </div>
              </li>

              <li className="relative flex flex-col sm:flex-row xl:flex-col items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="order-1 sm:ml-6 xl:ml-0">
                      <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                          <span className="mb-1 block text-2xl leading-6 text-indigo-500">Training</span>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda. </h3>
                      <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda autem molestias velit, maxime nihil id quo explicabo quis atque.</p>
                      </div>
                      <a
                          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                          href="#">more<svg
                              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                              width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round">
                              <path d="M0 0L3 3L0 6"></path>
                          </svg>
                          </a>
                  </div>
              </li>
              <li className="relative flex flex-col sm:flex-row xl:flex-col items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="order-1 sm:ml-6 xl:ml-0">
                      <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                          <span className="mb-1 block text-2xl leading-6 text-indigo-500">Job Matching</span>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda. </h3>
                      <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda autem molestias velit, maxime nihil id quo explicabo quis atque.</p>
                      </div>
                      <a
                          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                          href="#">more<svg
                              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                              width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round">
                              <path d="M0 0L3 3L0 6"></path>
                          </svg>
                          </a>
                  </div>
              </li>
          </ul>

          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="order-1 sm:ml-6 xl:ml-0">
                      <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                          <span className="mb-1 block text-2xl leading-6 text-indigo-500">Consulting</span>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda. </h3>
                      <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda autem molestias velit, maxime nihil id quo explicabo quis atque.</p>
                      </div>
                      <a
                          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                          href="#">more<svg
                              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                              width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round">
                              <path d="M0 0L3 3L0 6"></path>
                          </svg>
                          </a>
                  </div>
              </li>

              <li className="relative flex flex-col sm:flex-row xl:flex-col items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="order-1 sm:ml-6 xl:ml-0">
                      <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                          <span className="mb-1 block text-2xl leading-6 text-indigo-500">Cconsulting</span>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda. </h3>
                      <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda autem molestias velit, maxime nihil id quo explicabo quis atque.</p>
                      </div>
                      <a
                          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                          href="#">more<svg
                              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                              width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round">
                              <path d="M0 0L3 3L0 6"></path>
                          </svg>
                          </a>
                  </div>
              </li>
          </ul>

        </div>

     {/* Benifits */}
        <div className='mt-20'>
          <h1 className="text-center text-orange-400 text-3xl md:text-3xl mb-4" data-aos="zoom-y-out">Benifits of Our community</h1>

          <div className='bg-gray-200 grid grid-cols-3 gap-2 rounded py-5 px-3'>
           <p className='bg-blue-300 rounded p-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id quo explicabo quis atque animi possimus, 
              non ut iure perspiciatis.</p>
            <p className='bg-blue-300 rounded p-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className='bg-blue-300 rounded p-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda autem molestias velit.</p>
          </div>
        </div>
      
      {/* The Teams */}
        <div className='mt-20 '>
          <h1 className="text-center text-orange-400 text-2xl md:text-3xl text-3xl mb-4" data-aos="zoom-y-out">Our Team</h1>
          <div className=''>
          <figure className="max-w-screen-md mx-auto text-center rounded-full">
              
              <div className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <Image className="w-20 h-20 rounded-full" src={pp} alt="profile picture"/>
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                      <cite className="pe-3 font-medium text-gray-900 dark:text-white">Melake</cite>
                      <cite className="ps-3 text-sm text-gray-600 dark:text-gray-400">CEO - Gobeze</cite>
                      <cite></cite>
                  </div>
              </div>
              <svg className="w-5 h-5 mx-auto mb-3 text-black-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              <blockquote>
                  <p className="text-xl italic font-small text-gray-700 mx-5">Gobeze contains tons of Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo assumenda autem.</p>
              </blockquote>
              <svg className="w-5 h-5 mx-auto mb-3 text-black-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
          </figure>

          <div className='grid grid-cols-3 gap-3 rounded-full'>
              <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                  <Image className="w-20 h-20 rounded-full" src={ppl} alt="profile picture"/>
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                      <cite className="pe-3 font-medium text-gray-900 dark:text-white">Ayat K</cite>
                      <cite className="ps-3 text-sm text-gray-600 dark:text-gray-400">Manger - Gobeze</cite>
                      <cite></cite>
                  </div>
              </div>
              <div className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <Image className="w-20 h-20 rounded-full" src={ppl} alt="profile picture"/>
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                      <cite className="pe-3 font-medium text-gray-900 dark:text-white">Mikiass</cite>
                      <cite className="ps-3 text-sm text-gray-600 dark:text-gray-400">Junior Developer - Gobeze</cite>
                      <cite></cite>
                  </div>
              </div>
              <div className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <Image className="w-20 h-20 rounded-full" src={ppl} alt="profile picture"/>
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                      <cite className="pe-3 font-medium text-gray-900 dark:text-white">Akram K</cite>
                      <cite className="ps-3 text-sm text-gray-600 dark:text-gray-400">Coordinate - Gobeze</cite>
                      <cite></cite>
                  </div>
              </div>
              </div>
            </div>

        </div>

        {/* Partners */}
        <div className='mt-20'>
        <h1 className="text-center text-orange-400 text-2xl md:text-3xl text-3xl mb-4" data-aos="zoom-y-out">Our Partners</h1>
        <div className='bg-gray-100 full'>
         <h1 className='text-center text-xl p-5'>Trusted by over 0x0x companies and thousands of learners around the world. </h1>
        
         <Image className='ml-5 mr-5 pr-10 pb-10 mb-10' src={partners}/>
        </div>
        
        </div>


        {/* Tesitmonal */}

        <div className='mt-20'>
          
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>

          <h1 className="text-center text-orange-400 text-2xl md:text-3xl text-3xl mb-4" data-aos="zoom-y-out text-red-400">Tesitmonal</h1>
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                </div>
                <blockquote className="text-xl font-small mb-4">
                  “ I love this Lorem ipsum dolor sit amet consectetur adipisicing elit. Oexplicabo quis atque animi possimus, non ut iure perspiciatis “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Meme Youyou</cite>
                <div className="text-gray-600">
                  <span></span>The Graphics Design Tranie <a className="text-blue-600 hover:underline" href="#0"></a>
                </div>
              </div>


            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                </div>
                <blockquote className="text-xl font-small mb-4">
                  “ I love this Lorem ipsum dolor sit amet consectetur adipisicing elit. Oexplicabo quis atque animi possimus, non ut iure perspiciatis “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Meme Youyou</cite>
                <div className="text-gray-600">
                  <span></span>The Graphics Design Tranie <a className="text-blue-600 hover:underline" href="#0"></a>
                </div>
              </div>


            </div>
          </div>


        </div>


        {/* News */}
        <div>
          <h1 className="text-center text-orange-400 text-2xl md:text-3xl text-3xl leading-tighter mb-4 mt-20" data-aos="zoom-y-out text-red-400">News</h1>
          <div className=''>
          <div className='grid grid-cols-2 gap-8 bg-blue-100 rounded border-shadow'>
          <div className='rounded p-3 mb-10 mt-5 ml-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id quo explicabo quis atque animi possimus, 
                non ut iure perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id quo explicabo quis atque animi possimus, 
                non ut iure perspiciatis.</div>
          <div className='rounded pr-5 py-4 mb-10 mt-5 mr-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id quo explicabo quis atque animi possimus, 
                non ut iure perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id quo explicabo quis atque animi possimus, 
                non ut iure perspiciatis. 
                <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id quo explicabo quis atque animi possimus, 
                non ut iure perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id quo explicabo quis atque animi possimus, 
                non ut iure perspiciatis.</p>
          </div>
          
          </div>
          </div>
        </div>

        <div className=''>
        <h1 className="text-center text-orange-400 text-2xl md:text-3xl text-3xl leading-tighter mb-4 mt-10" data-aos="zoom-y-out text-red-400">Contact Us<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </h1>
        </div>
      
    </div>
    
  )
}
export default Index;
