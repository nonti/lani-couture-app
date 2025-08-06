import React from 'react'
import { BiPlay } from 'react-icons/bi'
import sewing from '../assets/sewing-bg.jpg';
import Carousel from './Carousel';
import { images } from '../data';
const Hero = () => {
  return (
   <section>
<div className="relative overflow-hidden">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <Carousel images={images}/>
    <div className="max-w-2xl text-center mx-auto">
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Designed for you to get more <span className="text-blue-600">simple</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Build your business here. Take it anywhere.</p>
    </div>

    <div className="mt-10 relative max-w-5xl mx-auto">
      <img src={sewing} className="w-full object-cover h-96 sm:h-120  bg-no-repeat bg-center bg-cover rounded-xl"/>

      <div className="absolute inset-0 size-full">
        <div className="flex flex-col justify-center items-center size-full">
          <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <BiPlay />
            Play the overview
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 -start-20 -z-1 size-48 bg-linear-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
        <div className="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
      </div>

      <div className="absolute -top-12 -end-20 -z-1 size-48 bg-linear-to-t from-blue-600 to-cyan-400 p-px rounded-full">
        <div className="bg-white size-48 rounded-full dark:bg-neutral-900"></div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Hero