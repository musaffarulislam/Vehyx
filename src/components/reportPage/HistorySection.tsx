import React from 'react'
import RegistrationIcon from '@/assets/RegistrationIcon.png'
import Image from 'next/image'

const HistorySection = () => {
  return (
    <div className='w-full flex flex-col gap-8 items-center  rounded-xl'>
      <h1 className='text-center font-bold'>Vehicle History Report</h1>
      <div className='w-full flex flex-col gap-8 bg-prinwkle border border-marian p-8 rounded-xl'>
        <div className='flex items-center font-bold gap-4'>
          <div className='h-fit p-4 rounded-xl bg-white'>
            <Image src={RegistrationIcon} width={300} height={300} className='w-8' alt='Record Found Vhyex' />
          </div>
          <span>Registration</span>
        </div>
        <div className='flex flex-col gap-4'>
          <span className='text-lg'>This vehicle has been registered in the province of Ontario in Canada with Normal branding.</span>
          <span><span className='font-bold'>We checked for: </span>Inspection Required, Normal, Non-repairable, Rebuilt, Salvage and Stolen.</span>
        </div>
      </div>
    </div>
  )
}

export default HistorySection