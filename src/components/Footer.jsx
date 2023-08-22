import React from 'react'

const Footer = () => {
   return (
      <footer className="flex items-start justify-around text-white/10">
         <div>
            <p>FAQ</p>
            <p>Investor relations</p>
            <p>Ways to watch</p>
            <p>Corporate information</p>
            <p>Only on DreamCloud</p>
         </div>

         <div>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Terms Of Use</p>
            <p>Contact Us</p>
         </div>

         <div>
            <p>Account</p>
            <p>Privacy</p>
            <p>Speed Test</p>
         </div>

         <div>
            <p>Media center</p>
            <p>Cookie Prefrences</p>
            <p>Legal Notices</p>

            <span className=" rounded-lg px-6 py-2 bg-primaryPurple cursor-pointer text-sm">
               <p>Get Started</p>
            </span>
         </div>

      </footer>
   )
}

export default Footer