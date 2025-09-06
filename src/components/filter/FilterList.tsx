/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";

const CarFilterComponent = () => {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<any>({
    location: false,
    makeModel: false,
    year: false,
    price: false,
    mileage: false,
    bodyStyle: false,
    color: false,
    engineType: false,
    fuelType: false,
    interiorColor: false,
    popularType: false,
  });

  const filterOptions = [
    { id: "color", name: "Color" },
    { id: "engineType", name: "Engine type" },
    { id: "fuelType", name: "Fuel type" },
    { id: "interiorColor", name: "Interior color" },
    { id: "popularType", name: "Popular type" },
  ];
  // Function to toggle section expansion
  const toggleSection = (section: any) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  // SVG for the chevron down icon
  const ChevronDown = ({ isExpanded }: any) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${
        isExpanded ? "transform rotate-180" : ""
      }`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="max-lg:hidden w-96 p-6 px-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-normal">Filter</h1>
        <button className="text-blue-600 text-md font-medium">Clear All</button>
      </div>

      {/* Location */}
      <div className="p-4 px-6 bg-white shadow-md rounded-xl">
        <div className="border-b border-tertiary border-opacity-50">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleSection("location")}
          >
            <h2 className="text-lg font-normal">Location</h2>
            <ChevronDown isExpanded={expandedSections.location} />
          </div>
          {expandedSections.location && (
            <div className="flex gap-2 items-center py-2">
              <div className="relative w-1/2">
                <select className="appearance-none border rounded-md p-2 w-full bg-white text-xs">
                  <option>Radius</option>
                </select>
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
              <span className="text-gray-400 text-center text-sm">
                Miles of
              </span>
              <div className="relative w-1/2">
                <select className="appearance-none border rounded-md p-2 w-full bg-white text-xs">
                  <option>Pincode</option>
                </select>
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Make & Model */}
        <div className="border-b border-tertiary border-opacity-50">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleSection("makeModel")}
          >
            <h2 className="text-lg font-normal">Make & Model</h2>
            <ChevronDown isExpanded={expandedSections.makeModel} />
          </div>
          {expandedSections.makeModel && (
            <div className="flex flex-col gap-3  py-2">
              <div className="relative">
                <select className="appearance-none border rounded-md py-3 px-4 w-full bg-white">
                  <option>Acura</option>
                </select>
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none border rounded-md py-3 px-4 w-full bg-white">
                  <option>All Models</option>
                </select>
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Year */}
        <div className="border-b border-tertiary border-opacity-50">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleSection("year")}
          >
            <h2 className="text-lg font-normal">Year</h2>
            <ChevronDown isExpanded={expandedSections.year} />
          </div>
          {expandedSections.year && (
            <div className="flex gap-2 items-center py-2">
              <div className="relative w-1/2">
                <select className="appearance-none border rounded-md p-2 w-full bg-white text-xs">
                  <option>1999</option>
                </select>
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
              <span className="text-gray-400">to</span>
              <div className="relative w-1/2">
                <select className="appearance-none border rounded-md p-2 w-full bg-white text-xs">
                  <option>2025</option>
                </select>
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="border-b border-tertiary border-opacity-50">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleSection("price")}
          >
            <h2 className="text-lg font-normal">Price</h2>
            <ChevronDown isExpanded={expandedSections.price} />
          </div>
          {expandedSections.price && (
            <div className="mt-2 overflow-x-auto">
              <div className="relative pt-1 min-w-full">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-1 bg-indigo-800 rounded-full"
                    style={{ width: "60%", left: "0%" }}
                  ></div>
                  <div
                    className="absolute h-4 w-4 bg-indigo-800 rounded-full -mt-1.5 cursor-grab"
                    style={{ left: "0%" }}
                  ></div>
                  <div
                    className="absolute h-4 w-4 bg-indigo-800 rounded-full -mt-1.5 cursor-grab"
                    style={{ left: "60%" }}
                  ></div>
                </div>
              </div>
              <p className="mt-4 text-lg  py-2">₹10,0000 - ₹15,0000</p>
            </div>
          )}
        </div>

        {/* Mileage */}
        <div className="border-b border-tertiary border-opacity-50">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleSection("mileage")}
          >
            <h2 className="text-lg font-normal">Mileage</h2>
            <ChevronDown isExpanded={expandedSections.mileage} />
          </div>
          {expandedSections.mileage && (
            <div className="mt-2 overflow-x-auto">
              <div className="relative pt-1 min-w-full">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-1 bg-indigo-800 rounded-full"
                    style={{ width: "80%", left: "0%" }}
                  ></div>
                  <div
                    className="absolute h-4 w-4 bg-indigo-800 rounded-full -mt-1.5 cursor-grab"
                    style={{ left: "0%" }}
                  ></div>
                  <div
                    className="absolute h-4 w-4 bg-indigo-800 rounded-full -mt-1.5 cursor-grab"
                    style={{ left: "80%" }}
                  ></div>
                </div>
              </div>
              <p className="mt-4 text-lg py-2">₹5,000 - ₹1,85,000</p>
            </div>
          )}
        </div>

        {/* Body style */}
        <div className="border-b border-tertiary border-opacity-50">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleSection("bodyStyle")}
          >
            <h2 className="text-lg font-normal">Body style</h2>
            <ChevronDown isExpanded={expandedSections.bodyStyle} />
          </div>
          {expandedSections.bodyStyle && (
            <div className="space-y-3 py-2">
              <div className="flex justify-between items-center">
                <label className="text-lg">SUV (876)</label>
                <div className="h-6 w-6 border rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-lg">Sedan (379)</label>
                <div className="h-6 w-6 border rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-lg">Coupe (6)</label>
                <div className="h-6 w-6 border rounded"></div>
              </div>
            </div>
          )}
        </div>

        {/* Additional filter options */}
        {filterOptions.map((option, index) => (
          <div
            key={option.id}
            className={`${
              filterOptions.length - 1 !== index &&
              "border-b border-tertiary border-opacity-50"
            } py-4`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(option.id)}
            >
              <h2 className="text-lg font-normal">{option.name}</h2>
              <ChevronDown isExpanded={expandedSections[option.id]} />
            </div>
            {expandedSections[option.id] && (
              <div className="py-3">
                <p className="text-gray-500">
                  No {option.name.toLowerCase()} options available
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarFilterComponent;
