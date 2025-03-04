import React from 'react'
import { InputForm } from '../ui/inputForm'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'

const CarWorthFormComponent = () => {
  return (
    <>
                    
              <div className='text-center py-4'>
                  <h1>What is your Car Worth?</h1>
                  <h3 className='font-light text-base'>Get the VEHYX History-Based value to find out what your car is really worth.</h3>
              </div>
              <div className='my-4 w-3/5 drop-shadow-default  rounded-2xl bg-white p-12 py-16 flex flex-col gap-6'>
                  <div className='flex gap-4 w-full'>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="zip-code" className="text-black">Enter your Zip Code*</Label>
                      <InputForm placeholder='Enter your car worth' className='w-full px-4' />
                    </div>
                  </div>
                  <div className='flex gap-4 w-full'>
                  <div className="grid gap-2 w-full">
                      <Label htmlFor="model" className="text-black">Enter your VIN</Label>
                      <InputForm placeholder='Enter your car worth' className='w-full px-4' />
                    </div>
                  </div>
                  <div className='text-center '>OR</div>
                  <div className='flex gap-4 w-full'>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="plate" className="text-black">Enter your License Plate</Label>
                     <div className='flex gap-2 w-full'>
                      <div className='flex-grow w-3/5'>
                     <InputForm placeholder='License Plate Number' className='w-full px-4' />

                      </div>
                      <div className='w-2/5'>
                     <InputForm placeholder='Select State' className='w-full px-4' />

                      </div>
                     </div>
                    </div>
                  </div>
                  <div className='flex gap-2 w-full items-center'>
                    <InputForm id='certified' type='checkbox' className='rounded-md border-0 bg-transparent text-primary focus:ring-0' />
                    <Label htmlFor="certified" className="text-black">I own this car</Label>
                  </div>
                  <Button className="w-full bg-gradient-mixture text-white rounded-lg">Get Value</Button>
              </div>
    </>
  )
}

export default CarWorthFormComponent