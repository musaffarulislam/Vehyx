"use client";

import React from "react";
import Image from "next/image";
import RobotAndCar from "@/assets/RobotAndCar.png";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Link from "next/link";

const BannerComponent = () => {
  return (
    <div className="p-8 w-full h-screen 2xl:h-[75vh]">
      <div className="bg-gradient-mixture w-full h-full rounded-5xl md:rounded-7xl p-12 md:p-16">
        <div className="mx-12">
          <NavbarComponent />
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-full mx-12 flex max-xl:flex-col gap-4 justify-between">
            <div className="w-full flex flex-col justify-center text-white">
              <h1 className="text-4xl md:text-6xl font-semibold mb-6 whitespace-nowrap">
                <span className="text-primary">India's #1</span> platform
              </h1>
              <h1 className="text-4xl md:text-6xl font-semibold mb-6">
                for Vehicle History
              </h1>
              <p className="text-lg md:text-xl mb-6">
                With Vehyx-Info, trust every step of your journey. Get
                transparent and verified vehicle reports instantly.
              </p>
              <div className="relative w-3/4 flex items-center mb-6">
                <input
                  type="text"
                  placeholder="Enter your 17 character VIN"
                  className="p-4 md:p-6 pl-4 md:pl-6 pr-16 md:pr-20 w-full rounded-full text-black focus:outline-none"
                />
                <Link href="/report">
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 md:px-8 py-4 bg-gradient-mixture text-white rounded-full hover:bg-munsell transition">
                    Go
                  </button>
                </Link>
              </div>
              <Link href="/report">
                <span className=" text-white underline">
                  View Sample Report
                </span>
              </Link>
            </div>

            <div className="w-full max-h-full flex justify-center items-center overflow-hidden">
              <Image
                src={RobotAndCar}
                alt="Car"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
