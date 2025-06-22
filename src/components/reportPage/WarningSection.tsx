import React from 'react'
import WarnnignIcon from '@/assets/WarningIcon.png'
import Image from 'next/image'
const WarningSection = () => {
  return (
    <div className='w-full flex gap-8 justify-between bg-red-600/10 border border-red-600 p-8 rounded-xl'>
      <div className='h-fit p-4 rounded-xl bg-white'>
        <Image src={WarnnignIcon} width={300} height={300} className='w-24' alt='Record Found Vhyex' />
      </div>
      <p>This vehicle history report is based on information that was reported and available to VEHYX India as of March 10, 2025 (or once all the data was collected from our data sources and the report was complete). VEHYX India draws on billions of data records from thousands of sources across North America, and we receive new historical data records every day. There may be other information about this vehicle that has not been reported to VEHYX India. When buying a used vehicle, we always recommend using a VEHYX India Vehicle History Report, along with a vehicle inspection and test drive, to make an informed decision.</p>
    </div>
  )
}

export default WarningSection