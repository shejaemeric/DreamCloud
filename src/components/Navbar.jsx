import React from 'react'
import logo from '../assets/DreamCloud Logo 1 (1).svg'

const Navbar = () => {
   return (
      <nav className="flex justify-between items-center text-white px-12">
         <span>
            <img src={logo} alt="logo"  />
         </span>

         <div className="flex items-center gap-8">

            <div className="navlinks">
               <div className="navlinks flex items-center gap-8 font-medium ">
                  <a href="#">Home</a>
                  <a href="#">Movies</a>
                  <a href="#">Podcasts</a>
               </div>
            </div>

            <div className="navButtons flex items-center gap-8 font-medium">
               <span className=" rounded-lg px-6 py-2 border-white border-2 cursor-pointer text-[14px]">
                  <p>Login</p>
               </span>
               <span className=" rounded-lg px-6 py-2 bg-primaryPurple cursor-pointer text-[14px]">
                  <p>Sign Up</p>
               </span>
            </div>

         </div>

      </nav>
   )
}

export default Navbar