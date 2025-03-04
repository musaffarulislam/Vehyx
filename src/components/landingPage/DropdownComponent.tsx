'use client'

import React, { useState } from 'react'
import CustomDropdown from '../dropdown/CustomDropdown';
import VehicleIconComponent from '@/assets/VehicleIconComponent';
import ProtectionIconComponent from '@/assets/ProtectionIconComponent';
import DetailsIconComponent from '@/assets/DetailsIconComponent';

const DropdownComponent = () => {
    const [selectedOptionVehicle, setSelectedOptionVehicle] = useState<string>("");
    const [selectedOptionSafty, setSelectedOptionSafty] = useState<string>("");
    const [selectedOptionDetails, setSelectedOptionDetails] = useState<string>("");
  
    const damageOptions = [
      "Accident history",
      "Frame or structural damage",
      "Damage location",
      "Weather damage",
      "Repair estimates and costs"
    ];
  
    // // Custom SVG icon
    // const vehicleIcon = (
    //     <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M6 19V9M18 19V9M10 19V9M14 19V9M4 5L20 5M2 19H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //         <path d="M12 5V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //     </svg>
    // );
  
    return (
      <div className="mx-36">
        <div className="py-8 flex justify-center gap-12  w-full">
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
                color='#2E93AD'
            />
        </div>
      </div>
    );
}

export default DropdownComponent