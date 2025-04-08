'use client'

import React, { useState } from 'react'

const DetailsLeftComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  // Vehicle data organized in a structured way
  const vehicleData = {
    description: {
      short: "At Coughlin Chevrolet, Buick, GMC in Chillicothe we offer all our pre-owned inventory at market based pricing to insure a no haggle experience and a fair price right up front.2022 Acura MDX SH-AWD...",
      full: "At Coughlin Chevrolet, Buick, GMC in Chillicothe we offer all our pre-owned inventory at market based pricing to insure a no haggle experience and a fair price right up front.2022 Acura MDX SH-AWDWe carry all makes and models and have vehicles in all different colors. This vehicle comes with a clean CarFax report and has been fully serviced by our certified mechanics. Features include leather seats, sunroof, backup camera, Bluetooth connectivity, and advanced safety features."
    },
    basicSpecs: [
      { label: "Kilometers", value: "59,500 km" },
      { label: "Status", value: "Used" },
      { label: "Engine", value: "Used" },
      { label: "Trim", value: "PROGRESSIV" },
      { label: "Body Type", value: "SUV" }
    ],
    extendedSpecs: [
      { label: "Engine", value: "4 Cylinder Engine" },
      { label: "Cylinder", value: "4" },
      { label: "Transmission", value: "8 Speed Automatic" },
      { label: "Drivetrain", value: "AWD" },
      { label: "Stock Number", value: "VW0075A" },
      { label: "Doors", value: "4" },
      { label: "Fuel Type", value: "Gas" },
      { label: "City Fuel Economy", value: "11.7L/100km" },
      { label: "Hwy Fuel Economy", value: "8.4L/100km" }
    ]
  }

  // Reusable spec row component
  const SpecRow = ({ label, value, lineNeeded= true }: { label: string, value: string, lineNeeded?: boolean }) => (
    <>
      <div className="w-full flex gap-4">
        <p className="w-3/4">{label}</p>
        <p className="w-1/4">{value}</p>
      </div>
      {lineNeeded && <div className="w-full h-0.5 bg-tertiary opacity-50" />}
    </>
  )

  // Function to toggle specifications visibility
  const toggleSpecifications = () => setIsOpen(!isOpen)
  
  // Function to toggle description expansion
  const toggleDescription = () => setIsDescriptionExpanded(!isDescriptionExpanded)

  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-8 shadow-sm">
      {/* Description Section */}
      <section>
        <h2 className="text-xl font-bold">Description</h2>
        <p className="my-8 text-tertiary">
          {isDescriptionExpanded ? vehicleData.description.full : vehicleData.description.short}
          <span 
            className="font-semibold text-black cursor-pointer ml-1" 
            onClick={toggleDescription}
          >
            {isDescriptionExpanded ? 'Read less' : 'Read more'}
          </span>
        </p>
      </section>

      {/* Specifications Section */}
      <section>
        <h2 className="text-xl font-bold">Specification</h2>
        <div className="w-full flex flex-col gap-4 mt-4">
          {/* Basic Specifications */}
          {vehicleData.basicSpecs.map((spec, index) => (
            <SpecRow key={`basic-spec-${index}`} label={spec.label} value={spec.value} />
          ))}

          {/* Extended Specifications (conditionally rendered) */}
          {isOpen && vehicleData.extendedSpecs.map((spec, index) => (
            <SpecRow key={`extended-spec-${index}`} label={spec.label} value={spec.value} lineNeeded={vehicleData.extendedSpecs.length-1 !== index} />
          ))}

          {/* Toggle Button */}
          {!isOpen && (
            <p 
              className="text-blue-600 cursor-pointer" 
              onClick={toggleSpecifications}
            >
              See all specifications
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default DetailsLeftComponent