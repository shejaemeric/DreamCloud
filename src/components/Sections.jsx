import React from 'react'
import section1 from "../assets/images/section 1.png"
import section2 from "../assets/images/section 2.png"
import section3 from "../assets/images/section 3.png"
import section4 from "../assets/images/section 4.png"

const Sections = () => {
   return (
      <div className="flex flex-col gap-2 mb-2 w-full">

         <section className="bg-black" >

            <span className="flex justify-center">
               <button className=" bg-primaryPurple text-sm h-[40px] flex items-center justify-center gap-4 w-[200px] rounded-bl-3xl rounded-br-3xl">
                  View full site
                  <i class="fa-solid fa-circle-right"></i>
               </button>
            </span>
         
            <div className="w-full flex items-center px-20 pt-8 pb-16 gap-10 ">
               <div>
                  <h1 className=" font-bold text-[40px]">Enjoy on your TV.</h1>
                  <p className="w-2/3 text-xl">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
               </div>
               <div>
                  <img className="rounded-2xl" src={section1} alt="" />
               </div>
            </div>
         </section>

         <section className="flex flex-row-reverse  items-center px-20 py-16 gap-10 bg-black">
            <div>
               <h1 className=" font-bold text-[40px]">Download to watch and listen offline.</h1>
               <p className="w-2/3 text-xl">Save your favorite shows, music and podcasts easily and always have something to watch and listen.</p>
            </div>
            <div>
               <img className="rounded-2xl" src={section2} alt="" />
            </div>
         </section>

         <section className="flex items-center px-20 py-16 gap-10 bg-black">
            <div>
               <h1 className=" font-bold text-[40px]">Watch everywhere.</h1>
               <p className="w-2/3 text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <div>
               <img className="rounded-2xl" src={section3} alt="" />
            </div>
         </section>

         <section className="flex flex-row-reverse items-center px-20 py-16 gap-20 bg-black">
            <div>
               <h1 className=" font-bold text-[40px]">Create profiles for kids.</h1>
               <p className="w-2/3 text-xl">Send kids on adventures with their favorite characters in a space made just for them—free with your account.</p>
            </div>
            <div>
               <img className="rounded-2xl" src={section4} alt="" />
            </div>
         </section>

      </div>
   )
}

export default Sections