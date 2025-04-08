"use client"

import React from "react"
import BasicInformationsDetails from "./BasicInformationsDetails"

const BasicInformations = () => {
  return (
    <section id="profile-heading" className="w-full flex flex-col gap-4 ">
      <div className="flex flex-wrap justify-between">
        <BasicInformationsDetails />
      </div>
    </section>
  )
}

export default BasicInformations
