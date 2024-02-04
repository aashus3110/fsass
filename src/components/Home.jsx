"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/components/assets/Logo.png";
import { BiSolidBell } from "react-icons/bi";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Data from "./Data";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in (you may need to adjust this based on your authentication logic)
    const isLoggedIn = checkUserLoggedIn();
    if (isLoggedIn) {
      // Set user state if logged in
      setUser({ username: "exampleUser" }); // Replace with actual user data
    } else {
      // Clear user state if not logged in
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    // Clear the user token from local storage
    localStorage.removeItem("userToken");
    setUser(null);
    // Redirect to the same page
    window.location.href = "/";
  };

  const checkUserLoggedIn = () => {
    // Implement your logic to check if the user is logged in (e.g., check user token in local storage)
    const userToken = localStorage.getItem("userToken");
    return !!userToken; // Return true if user token exists, otherwise false
  };

  return (
    <div className="flex">
      <div className="fixed md:w-[20%] w-[30%] text-center border-2 border-black h-[100vh] nav">
        <div className="border-2 h-[17%] flex items-center justify-center cursor-pointer">
          <Image
            src={Logo}
            width="500"
            height="500"
            alt="Picture of the author"
            loading="lazy"
            quality={100}
            className="h-10 w-10"
          />
        </div>
        <div className="border-2 h-[17%] flex items-center justify-center">
          <Link href="/cart">
            <p className="text-gray-300/100 hover:text-black p-2 cursor-pointer">
              Cart
            </p>
          </Link>
        </div>
        <div className="border-2 h-[17%] flex items-center justify-center">
          <Link href="/market">
            <p className="text-gray-300/100 hover:text-black p-2 cursor-pointer">
              Market
            </p>
          </Link>
        </div>
        <div className="border-2 h-[17%] flex items-center justify-center">
          <Link href="/settings">
            <p className="text-gray-300/100 hover:text-black p-2 cursor-pointer">
              Settings
            </p>
          </Link>
        </div>
        <div className="border-2 h-[17%] flex items-center justify-center">
          {user ? (
            <button
              className="text-gray-300/100 hover:text-black p-2 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link href="/Login">
              <p className="text-red-500 p-2 cursor-pointer">LogIn</p>
            </Link>
          )}
        </div>
      </div>
      <div className="fixed w-[70%] md:w-[80%] end-0 text-center border-2 border-black h-full main">
        <div className="border-2 ">
          <div className="h-20 flex items-center justify-between md:mx-20 mx-5">
            <button className="px-4 py-2 bg-blue-500/100 text-white font-thin text-base">
              Complete Profile
            </button>
            <BiSolidBell className="text-2xl font-semibold text-black" />
          </div>
        </div>
        <div className="border-2 ">
          <div className="h-20 flex items-center justify-between md:mx-20 mx-5">
            <span className="md:text-2xl text-base font-semibold">
              Choose your new site
            </span>
            <ul className="flex gap-1 text-base">
              <li className="underline text-gray-200/100 hover:text-black p-2 cursor-pointer ">
                1
              </li>
              <li className="underline text-gray-200/100 hover:text-black p-2 cursor-pointer ">
                2
              </li>
              <li className="underline text-gray-200/100 hover:text-black p-2 cursor-pointer ">
                3
              </li>
            </ul>
          </div>
        </div>

        <Data />
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/users");
  const userData = await res.json();

  console.log(userData);
  return {
    props: { userData },
  };
}

export default Home;
