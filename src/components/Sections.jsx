import React from 'react'
import section1 from "../assets/images/section 1.png"
import section2 from "../assets/images/section 2.png"
import section3 from "../assets/images/section 3.png"

const Sections = () => {
   return (
      <div className="flex flex-col gap-2 mb-2 w-full">

         <section className="w-full flex items-center px-20 py-8 gap-10 bg-black">
            <div>
               <h1 className=" font-bold text-[40px]">Enjoy on your TV.</h1>
               <p className="w-2/3 text-xl">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div>
               <img className="rounded-2xl" src={section1} alt="" />
            </div>
         </section>

         <section className="flex flex-row-reverse  items-center px-20 py-8 gap-10 bg-black">
            <div>
               <h1 className=" font-bold text-[40px]">Download to watch and listen offline.</h1>
               <p className="w-2/3 text-xl">Save your favorite shows, music and podcasts easily and always have something to watch and listen.</p>
            </div>
            <div>
               <img className="rounded-2xl" src={section2} alt="" />
            </div>
         </section>

         <section className="flex items-center px-20 py-8 gap-10 bg-black">
            <div>
               <h1 className=" font-bold text-[40px]">Watch everywhere.</h1>
               <p className="w-2/3 text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <div>
               <img className="rounded-2xl" src={section3} alt="" />
            </div>
         </section>

      </div>
   )
}

export default Sections