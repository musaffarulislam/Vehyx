"use client";

import React from "react";
import RecordSFoundIcon from "@/assets/RecordsFoundIcon.png";
import RegisteredIcon from "@/assets/RegisteredIcon.png";
import DamageIcon from "@/assets/DemageRecordsIcon.png";
import RecallIcon from "@/assets/RecallFoundIcon.png";
import DeclaredStolen from "@/assets/DeclaredStolenIcon.png";
import Image from "next/image";

const IconSection = () => {
  const handleSmoothScrollById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-evenly items-center bg-white p-8 py-16 rounded-xl gap-8">
      <div
        className="flex flex-col items-center gap-8 cursor-pointer"
        onClick={() => handleSmoothScrollById("registration")}
      >
        <div className="w-fit bg-marian p-4 rounded-3xl">
          <Image
            src={RegisteredIcon}
            width={300}
            height={300}
            className="w-16 object-contain"
            alt="Record Found Vhyex"
          />
        </div>
        <div className="flex flex-col text-center">
          <span>Last Registered In:</span>
          <span>Ontario (Normal)</span>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-8 cursor-pointer"
        onClick={() => handleSmoothScrollById("accident")}
      >
        <div className="w-fit bg-marian p-4 rounded-3xl">
          <Image
            src={DamageIcon}
            width={300}
            height={300}
            className="w-16 object-contain"
            alt="Record Found Vhyex"
          />
        </div>
        <div className="flex flex-col text-center">
          <span>Accident/Damage</span>
          <span>Records Found</span>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-8 cursor-pointer"
        onClick={() => handleSmoothScrollById("stolen")}
      >
        <div className="w-fit bg-marian p-4 rounded-3xl">
          <Image
            src={DeclaredStolen}
            width={300}
            height={300}
            className="w-16 object-contain"
            alt="Record Found Vhyex"
          />
        </div>
        <div className="flex flex-col text-center">
          <span>Not Actively</span>
          <span>Declared Stolen</span>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-8 cursor-pointer"
        onClick={() => handleSmoothScrollById("recall")}
      >
        <div className="w-fit bg-marian p-4 rounded-3xl">
          <Image
            src={RecallIcon}
            width={300}
            height={300}
            className="w-16 object-contain"
            alt="Record Found Vhyex"
          />
        </div>
        <div className="flex flex-col text-center">
          <span>1 open recall</span>
          <span>Found</span>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-8 cursor-pointer"
        onClick={() => handleSmoothScrollById("service-record")}
      >
        <div className="w-fit bg-marian p-4 rounded-3xl">
          <Image
            src={RecordSFoundIcon}
            width={300}
            height={300}
            className="w-16 object-contain"
            alt="Record Found Vhyex"
          />
        </div>
        <div className="flex flex-col text-center">
          <span>6 Service Records</span>
          <span>Found</span>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
