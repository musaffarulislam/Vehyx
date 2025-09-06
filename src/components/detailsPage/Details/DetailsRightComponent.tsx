import Image from "next/image";
import React from "react";
import AutoCar from "@/assets/AutoCar.png";
import Direction from "@/assets/direction.svg";
import Phone from "@/assets/phone.svg";
import GlobeClick from "@/assets/globclick.svg";
import CarAssured from "@/assets/carassured.svg";
import Clock from "@/assets/clock.svg";

const DetailsRightComponent = () => {
  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-8  shadow-sm h-fit">
      <p className="text-xl font-bold">About the dealer</p>
      <div className="flex items-center gap-2 mt-4">
        <div className="relative w-28 h-24 rounded-lg overflow-hidden">
          <Image src={AutoCar} alt="auto car" layout="fill" objectFit="cover" />
        </div>
        <div>
          <p className="font-bold">Coughlin of Chillicothe</p>
          <p>
            Indiranagar Post Office, 1st Stage, CMH Road, Bangalore, Karnataka
            560038, India
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex items-center gap-4">
          <Direction />
          <p className="text-blue-600 underline cursor-pointer">
            Driving direction
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Phone />
          <p>(740) 224-8453</p>
        </div>
        <div className="flex items-center gap-4">
          <GlobeClick />
          <p className="text-blue-600 underline cursor-pointer">
            Dealer website
          </p>
        </div>
        <div className="flex items-center gap-4">
          <CarAssured />
          <p className="text-blue-600 underline cursor-pointer">
            Dealer Inventory
          </p>
        </div>
        <div className="flex items-center pb-4 gap-4">
          <Clock />
          <p>9:00 AM to 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsRightComponent;
