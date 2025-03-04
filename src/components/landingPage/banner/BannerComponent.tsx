import React from 'react'
import Image from 'next/image'
import RobotAndCar from '@/assets/RobotAndCar.png'
import NavbarComponent from '@/components/navbar/NavbarComponent'

const BannerComponent = () => {
  return (
    <div className='p-8 w-full h-screen'>
      <div className='bg-gradient-mixture w-full h-full rounded-7xl p-16'>
        <div className='mx-12'>
          <NavbarComponent />
        </div>
        <div className='w-full h-full flex justify-center'>
          <div className='mx-12 flex justify-between'>
            <div className="w-1/2 flex flex-col justify-center text-white">
              <h1 className="text-6xl font-semibold mb-6"><span className='text-primary'>India’s #1</span> platform</h1>
              <h1 className="text-6xl font-semibold mb-6">for Vehicle History</h1>
              <p className="text-xl mb-6">
                With Vehyx-Info, trust every step of your journey. Get transparent and verified vehicle reports instantly.
              </p>
              <div className="relative w-3/4 flex items-center mb-6">
                <input
                  type="text"
                  placeholder="Enter your 17 character VIN"
                  className="p-6 pl-6 pr-20 w-full rounded-full text-black focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-8 py-4 bg-gradient-mixture text-white rounded-full hover:bg-munsell transition">
                  Go
                </button>
              </div>
              <a href="#" className=" text-white underline">View Sample Report</a>
            </div>

            <div className="w-1/2 flex justify-center items-center">
                <Image src={RobotAndCar} alt="Car" width={500} height={500} objectFit='contain' className='w-full h-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerComponent