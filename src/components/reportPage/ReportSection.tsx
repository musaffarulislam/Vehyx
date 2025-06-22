'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import OwnerInfoPopup from './OwnerInfoPopup'

const ReportSection = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full flex justify-between items-center bg-marian text-white p-8 rounded-xl'>
      <OwnerInfoPopup  open={open} setOpen={setOpen} />
      <div className='flex flex-col'>
        <span>2017 FORD EXPLORER XLT</span>
        <span>Sport utility vehicle | 6 Cylinders | Gas</span>
        <span>1FM5K8D87XXXXXXXX</span>
        <span>Country of Assembly: United States</span>
        <span>Last Reported Odometer: 54,129 KM</span>
      </div>
      <div className='flex gap-8'>
        <div className='flex flex-col text-center text-lg'>
          <span>NO ACCIDENT FOUND</span>
          <span>OEM SERVICES ONLY</span>
        </div>
        <div>
          <Button name='One Owner' className='bg-white rounded-md font-normal  text-black'
            onClick={() => setOpen(true)}
          > 
            One Owner
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReportSection