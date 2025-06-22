import React from 'react'
import StolenVehicleIcon from '@/assets/StolenVehicleIcon.png'
import Image from 'next/image'

const StolenSection = () => {
  return (
      <div className='w-full flex flex-col gap-4 bg-green-600/10 border border-green-600 p-8 rounded-xl'>
        <div className='flex items-center font-bold gap-4'>
          <div className='h-fit p-4 rounded-xl bg-white'>
            <Image src={StolenVehicleIcon} width={300} height={300} className='w-8' alt='Record Found Vhyex' />
          </div>
          <span>Stolen Vehicle Check</span>
        </div>
        <div className='flex flex-col gap-4'>
          <span className='text-lg'>This vehicle is not actively declared stolen.</span>
        </div>
      </div>
  )
}

export default StolenSection