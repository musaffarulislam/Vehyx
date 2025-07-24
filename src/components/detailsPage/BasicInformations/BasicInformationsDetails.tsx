"use client";
import Link from "next/link";
import SpeedMeterIcon from "@/assets/SpeedMeterIcon.png";
import LocationIcon from "@/assets/LocationIcon.png";
import Image from "next/image";
import HeartIcon from "@/assets/svg/HeartIcon";

const BasicInformationsDetails = () => {
  return (
    <div className="w-full flex max-lg:flex-col gap-8 justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex max-lg:flex-col gap-2 md:gap-4">
          <h1 className="font-bold capitalize">2021 Audi Q3 PROGRESSIV | </h1>
          <div className="flex items-center gap-2 text-xl font-bold">
            ₹14,985
          </div>
          <Link
            href="/lists/details"
            className="flex items-center text-blue-700 underline"
          >
            Buy VEHYX History Report
          </Link>
        </div>
        <div className="flex gap-2 md:gap-4">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={LocationIcon}
              alt="LocationIcon"
              width={40}
              height={40}
              className="w-5 h-5"
            />
            <p className="text-tertiary">
              <span className="font-bold">Coldbrook</span>{" "}
              <span>953 km + Delivery available</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              src={SpeedMeterIcon}
              alt="SpeedMeterIcon"
              width={40}
              height={40}
              className="w-5 h-5"
            />
            <p className="text-tertiary">120,728 km</p>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-end">
        <div className="flex gap-4">
          <div className="w-fit h-fit p-2 rounded-full border border-black cursor-pointer">
            <HeartIcon />
          </div>
          <div className="bg-green-700 rounded-full px-4 py-3 h-fit text-white">
            Great Price
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformationsDetails;
