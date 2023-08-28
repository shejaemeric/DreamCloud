/* eslint-disable react/prop-types */
import React from "react";
import logo from "../assets/DreamCloud Logo 1 (1).svg";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../base";
import { showToast } from "../utils";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const login = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result);
        localStorage.setItem("user", JSON.stringify({ ...result }));
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  };

  const getUserName = () => {
    return user.user.displayName;
  };

  return (
    <nav className="flex justify-between items-center text-white px-12">
      <span>
        <img src={logo} alt="logo" />
      </span>

      <div className="flex items-center gap-8">
        <div className="navlinks">
          <div className="navlinks flex items-center gap-8 font-medium ">
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">Podcasts</a>
          </div>
        </div>
        {props.includeSearch && (
          <div>
            <input
              className=" mr-6 w-[230px] py-3 px-4 bg-transparent border-2 rounded-full outline-none"
              type="text"
              placeholder="Search..."
              onChange={props.handleInputChange}
            />
            <button
              className=" bg-primaryPurple w-[64px] h-[64px] rounded-full "
              onClick={props.search}
            >
              <i className="fa-solid fa-magnifying-glass text-white text-[18px]"></i>
            </button>
          </div>
        )}

        <div className="navButtons flex items-center gap-8 font-medium">
          <span className=" rounded-lg px-6 py-2 border-white border-2 cursor-pointer text-[14px]">
            {!user ? (
              <p onClick={login}>Login</p>
            ) : (
              <span className=" flex items-center justify-center w-[40px] h-[40px] rounded-full bg-primaryPurple">
                <i class="fa-regular fa-user"></i>
              </span>
            )}
          </span>
          {/* <span className=" rounded-lg px-6 py-2 bg-primaryPurple cursor-pointer text-[14px]">
                  <p>Sign Up</p>
               </span> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
