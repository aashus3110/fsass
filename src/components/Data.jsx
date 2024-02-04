import Image from "next/image";
import React from "react";
import Greengrass from "@/components/assets/Greengrass.jpg";
import Map from "@/components/assets/Map.png";
import { FaChevronRight } from "react-icons/fa6";
import { LiaBoltSolid } from "react-icons/lia";
import { CiDroplet } from "react-icons/ci";
import { MdOutlineAgriculture } from "react-icons/md";
import { MdFence } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { MdOutlineLocalAirport } from "react-icons/md";
import { MdOutlineAddRoad } from "react-icons/md";
import Link from "next/link";

const ProgressBar = ({ currentValue, maxValue }) => {
  const progressPercentage = (currentValue / maxValue) * 100;
  const progressBarStyle = {
    width: `${progressPercentage}%`,
  };

  return (
    <div className="w-[100%] my-5 md:my-0 ">
      <div className="text-sm flex justify-around items-end">
        <span className="md:text-2xl text-base font-extrabold text-blue-500/100 ">
          RS {currentValue}
        </span>
        <span className="md:text-sm text-xs font-light text-black/100">
          {" "}
          RS {maxValue}
        </span>
      </div>
      <div className="relative h-2 bg-gray-300/100 rounded mb-2">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded"
          style={progressBarStyle}
        ></div>
      </div>
    </div>
  );
};

const Data = ({ user }) => {
  const isUserPresent = user !== null;

  return (
    <div className="h-[100%] border-2 text-justify md:px-20 px-2 overflow-auto">
      <div className="md:mt-10 mt-5 mb-3 border-2 ">JMarket</div>
      <div className="flex items-center justify-center">
        <Image
          src={Greengrass}
          alt="Unsplash Image"
          width={500}
          height={500}
          className="h-96 w-[90%] mx-auto"
        />
      </div>
      <div className="border-2 my-5 mx-5">
        <div className="md:h-12 h-24 md:flex flex-row items-center md:justify-between mx-2 md:mx-20 ">
          <div className="text-2xl font-extrabold">Theme Park Site</div>
          <button className="px-16 py-2 bg-blue-500/100 text-white font-thin text-base">
            Complete
          </button>
        </div>
        <div className="md:h-12 h-44 md:flex flex-row items-center md:justify-between md:mx-20 mx-2">
          <div className="">
            <span>Address of the site</span>
            <div className=" md:flex flex-row md:gap-3 border-2 border-white md:border-none my-3 md:my-0">
              <span className="bg-gray-400/100 px-2 text-sm flex items-center justify-center">
                <LiaBoltSolid />
                Adult rides
              </span>
              <span className="bg-gray-400/100 px-2 text-sm flex items-center justify-center">
                <CiDroplet />
                Family Rides
              </span>
              <span className="bg-gray-400/100 px-2 text-sm flex items-center justify-center">
                <MdOutlineAgriculture />
                Restaurants
              </span>
              <span className="bg-gray-400/100 px-2 text-sm flex items-center justify-center">
                <MdFence />
                Premum
              </span>
            </div>
          </div>
          <button className="px-6 py-2 border-2 border-blue-500/100 text-blue-500/100 font-medium text-base flex items-center justify-center">
            Site visit <FaChevronRight />
          </button>
        </div>

        <div className="md:h-12 h-24 md:flex flex-row mt-5 items-center justify-between md:mx-20 mx-5">
          <button className="md:px-6 px-1 py-0.5 border-2 border-blue-500/100 text-blue-500/100 font-medium md:text-base text-sm flex items-center justify-center">
            <CgArrowTopRight className="text-2xl md:text-base" />
            View opportunity on polygon
          </button>
          <div className="md:w-[40%] w-[100%]">
            <ProgressBar currentValue={2000000} maxValue={6500000} />
          </div>
        </div>

        <div className="md:h-12 h-fit md:my-5 items-center justify-between md:mx-20 mx-5">
          <div className="md:flex gap-3">
            <span className="px-2 text-sm flex-row items-center justify-center">
              <p className="text-2xl font-bold">200 Acres</p>
              <p className="text-sm font-thin ">Area </p>
            </span>
            <span className="px-2 text-sm flex-row items-center justify-center">
              <p className="text-2xl font-bold">5 Lacks</p>
              <p className="text-sm font-thin ">Starting price</p>
            </span>
            <span className="px-2 text-sm flex-row items-center justify-center">
              <p className="text-2xl font-bold">10 days </p>
              <p className="text-sm font-thin ">Remaining Days</p>
            </span>
            <span className="px-2 text-sm flex-row items-center justify-center">
              <p className="text-2xl font-bold">2.5 years</p>
              <p className="text-sm font-thin ">Next check</p>
            </span>
          </div>
        </div>

        <div className="md:flex flex-row">
          <div className="w-full">
            <div className="text-black px-5 border-2">
              <span className="text-lg font-semibold block">Overview</span>
              <span className="text-sm font-light tracking-tighter line-clamp-6">
                Our AI feature simplifies your life by automating routine tasks.
                Spend more time on the things you love!Our AI feature simplifies
                your life by automating routine tasks. Spend more time on the
                things you love!Our AI feature simplifies your life by
                automating routine tasks. Spend more time on the things you
                love.
              </span>
            </div>
            <div className="text-black px-5 border-2">
              <span className="text-lg font-semibold block">Why ?</span>
              <span className="text-sm font-light tracking-tighter line-clamp-6">
                Our AI feature simplifies your life by automating routine tasks.
                Spend more time on the things you love!Our AI feature simplifies
                your life by automating routine tasks. Spend more time on the
                things you love!Our AI feature simplifies your life by
                automating routine tasks. Spend more time on the things you
                love.
              </span>
            </div>
            <div className="text-black px-5 border-2">
              <span className="text-lg font-semibold block">What ?</span>
              <span className="text-sm font-light tracking-tighter line-clamp-6">
                Our AI feature simplifies your life by automating routine tasks.
                Spend more time on the things you love!Our AI feature simplifies
                your life by automating routine tasks. Spend more time on the
                things you love!Our AI feature simplifies your life by
                automating routine tasks. Spend more time on the things you
                love.
              </span>
            </div>

            <div className="text-black px-5 border-2">
              <span className="text-lg font-semibold block">Landmarks</span>
              <div className="text-right">
                <div className="flex items-center justify-between">
                  <span className="flex text-lg items-center font-medium text-blue-500/100 ">
                    <MdOutlineLocalAirport />
                    Airport
                  </span>
                  <div className="">
                    <span className="block">100km</span>
                    <span className="block text-gray-300/100 text-sm">
                      Airport 1
                    </span>
                  </div>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                  <span className="flex text-lg items-center font-medium text-blue-500/100 ">
                    <MdOutlineLocalAirport />
                    Airport
                  </span>
                  <div className="">
                    <span className="block">25km</span>
                    <span className="block text-gray-300/100 text-sm">
                      Green Which Terminla
                    </span>
                  </div>
                </div>
                <hr />

                <div className="flex items-center justify-between">
                  <span className="flex text-lg items-center font-medium text-blue-500/100 ">
                    <MdOutlineAddRoad />
                    Highway
                  </span>
                  <div className="">
                    <span className="block ">100km</span>
                    <span className="block text-gray-300/100 text-sm">
                      Highway number 5
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="">
              <span className="mx-5 my-5 block">Map</span>
              <Image
                src={Map}
                alt="Unsplash Image"
                width={500}
                height={500}
                className="h-60 w-[90%] mx-auto"
              />
              <div className=" flex justify-end my-5">
                <button className="px-6 py-2 border-2 border-blue-500/100 text-blue-500/100 font-medium text-base flex items-center">
                  Schedule a call <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full border-2">
            <div className="w-[100%] text-center border-2 border-black h-[100vh] nav">
              <div className="border-2 h-[15%] flex-row items-center justify-center cursor-pointer">
                <div className="mx-5 flex gap-5 justify-start">
                  <input className="px-1 py-1" type="checkbox" name="" id="" />

                  <label className="text-base" htmlFor="">
                    Complete Profile
                  </label>
                </div>
                <div className="flex justify-end">
                  <button className="px-16 py-2 bg-blue-500/100 text-white font-thin text-base">
                    Complete
                  </button>
                </div>
              </div>
              <div className="border-2 h-[15%] flex-row items-center justify-center cursor-pointer">
                <div className="mx-5 flex gap-5 justify-start">
                  <input className="px-1 py-1" type="checkbox" name="" id="" />
                  <label className="text-base" htmlFor="">
                    Step 1
                  </label>
                </div>
                <div className="flex justify-end">
                  <button className="px-16 py-2 bg-blue-500/100 text-white font-thin text-base">
                    Pay
                  </button>
                </div>
              </div>
              <div className="border-2 h-[15%] flex-row items-center justify-center cursor-pointer">
                <div className="mx-5 flex gap-5 justify-start">
                  <input className="px-1 py-1" type="checkbox" name="" id="" />
                  <label className="text-base" htmlFor="">
                    Step 2
                  </label>
                </div>
                <div className="flex justify-end">
                  <button className="px-16 py-2 bg-blue-500/100 text-white font-thin text-base">
                    Pay
                  </button>
                </div>
              </div>
              <div className="border-2 h-[15%] flex-row items-center justify-center cursor-pointer">
                <div className="mx-5 flex gap-5 justify-start">
                  <input className="px-1 py-1" type="checkbox" name="" id="" />

                  <label className="text-base" htmlFor="">
                    Step 3
                  </label>
                </div>
                <div className="flex justify-end">
                  <button className="px-16 py-2 bg-blue-500/100 text-white font-thin text-base">
                    Pay
                  </button>
                </div>
              </div>

              <div className="border-2 h-[15%] flex-row items-center justify-center cursor-pointer">
                <div className="mx-5 flex gap-5 justify-start">
                  <input className="px-1 py-1" type="checkbox" name="" id="" />
                  <label className="text-base" htmlFor="">
                    Step 4
                  </label>
                </div>
                <div className="flex justify-end">
                  <button className="px-16 py-2 bg-blue-500/100 text-white font-thin text-base">
                    Pay
                  </button>
                </div>
              </div>
              <div className="border-2 h-[15%] flex-row items-center justify-center cursor-pointer">
                <div className="mx-5 flex gap-5 justify-start">
                  <input className="px-1 py-1" type="checkbox" name="" id="" />
                  <label className="text-base" htmlFor="">
                    Step 5
                  </label>
                </div>
                <div className="flex justify-end">
                  <button className="px-16 py-2 bg-blue-500/100 text-white font-thin text-base">
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 mb-32 w-full"></div>
    </div>
  );
};

export default Data;
