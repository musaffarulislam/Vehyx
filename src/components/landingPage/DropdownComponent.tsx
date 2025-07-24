"use client";

import React, { useState } from "react";
import CustomDropdown from "../dropdown/CustomDropdown";
import VehicleIconComponent from "@/assets/VehicleIconComponent";
import ProtectionIconComponent from "@/assets/ProtectionIconComponent";
import DetailsIconComponent from "@/assets/DetailsIconComponent";

const DropdownComponent = () => {
  const [selectedOptionVehicle, setSelectedOptionVehicle] =
    useState<string>("");
  const [selectedOptionSafty, setSelectedOptionSafty] = useState<string>("");
  const [selectedOptionDetails, setSelectedOptionDetails] =
    useState<string>("");

  const damageOptions = [
    "Accident history",
    "Frame or structural damage",
    "Damage location",
    "Weather damage",
    "Repair estimates and costs",
  ];

  return (
    <div className="mx-36">
      <div className="py-8 flex max-lg:flex-col justify-center gap-8 md:gap-12  w-full">
        <CustomDropdown
          options={damageOptions}
          value={selectedOptionVehicle}
          onValueChange={setSelectedOptionVehicle}
          icon={<VehicleIconComponent />}
          className="bg-gray-100 w-full"
        />
        <CustomDropdown
          options={damageOptions}
          value={selectedOptionSafty}
          onValueChange={setSelectedOptionSafty}
          icon={<ProtectionIconComponent />}
          className="bg-gray-100 w-full"
          color="#566E3E"
        />
        <CustomDropdown
          options={damageOptions}
          value={selectedOptionDetails}
          onValueChange={setSelectedOptionDetails}
          icon={<DetailsIconComponent />}
          className="bg-gray-100 w-full"
          color="#2E93AD"
        />
      </div>
    </div>
  );
};

export default DropdownComponent;
