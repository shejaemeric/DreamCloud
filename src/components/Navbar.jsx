import React from "react";
import logo from "../assets/DreamCloud Logo 1 (1).svg";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../base";
import { showToast } from "../utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
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

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
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

        <div className="navButtons flex items-center gap-8 font-medium">
          {!user ? (
            <span className=" rounded-lg px-6 py-2 border-white border-2 cursor-pointer text-[14px]">
              <p onClick={login}>Login</p>
            </span>
          ) : (
            <>
              <span className=" flex items-center justify-center w-[48px] h-[48px] rounded-full bg-primaryPurple ">
                <i class="fa-regular fa-user text-[20px]"></i>
              </span>
              <span className=" rounded-lg px-6 py-2 border-white border-2 cursor-pointer text-[14px]">
                <p onClick={logOut}>Logout</p>
              </span>{" "}
            </>
          )}

          {/* <span className=" rounded-lg px-6 py-2 bg-primaryPurple cursor-pointer text-[14px]">
                  <p>Sign Up</p>
               </span> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
