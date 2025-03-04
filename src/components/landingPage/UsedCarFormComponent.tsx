import React from 'react'
import { InputForm } from '../ui/inputForm'
import { Label } from '@radix-ui/react-label'
import { SelectForm } from '../ui/selectForm'
import { Button } from '../ui/button'

const UsedCarFormComponent = () => {
  return (
    <>
                    
              <div className='text-center py-4'>
                  <h1>Used Cars for Sale Buy with confidence.</h1>
                  <h3 className='font-light text-base'>Everything you need to browse nearby cars, all in one place.</h3>
              </div>
              <div className='my-4 w-3/5 drop-shadow-default  rounded-2xl bg-white p-12 py-16 flex flex-col gap-6'>
                  <div className='flex gap-4 w-full'>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="zip-code" className="text-black">Enter your Zip Code*</Label>
                      <InputForm placeholder='Enter your car worth' className='w-full px-4' />
                    </div>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="zip-code" className="text-black">Select Brand*</Label>
                      <SelectForm  options={[{value: 'Audi', label: 'Audi'}, {value: 'BMW', label: 'BMW'}]} className='w-full px-4' />
                    </div>
                  </div>
                  <div className='flex gap-4 w-full'>
                  <div className="grid gap-2 w-full">
                      <Label htmlFor="model" className="text-black">Model*</Label>
                      <SelectForm  options={[{value: 'Audi', label: 'Audi'}, {value: 'BMW', label: 'BMW'}]} className='w-full px-4' />
                    </div>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="year" className="text-black">Min Year*</Label>
                      <SelectForm  options={[{value: 'Audi', label: 'Audi'}, {value: 'BMW', label: 'BMW'}]} className='w-full px-4' />
                    </div>
                  </div>
                  <div className='flex gap-4 w-full'>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="price" className="text-black">Price Under*</Label>
                      <SelectForm  options={[{value: '10000', label: '10000'}, {value: '20000', label: '20000'}]} className='w-full px-4' />
                    </div>
                    <div className="grid gap-2 w-full">
                      <Label htmlFor="mileage" className="text-black">Max Mileage*</Label>
                      <SelectForm  options={[{value: '20km', label: '20km'}, {value: '30km', label: '30km'}]} className='w-full px-4' />
                    </div>
                  </div>
                  <div className='flex gap-2 w-full items-center'>
                    <InputForm id='certified' type='checkbox' className='rounded-md border-0 bg-transparent text-primary focus:ring-0' />
                    <Label htmlFor="certified" className="text-black">Certified Pre-Owned</Label>
                  </div>
                  <Button className="w-full bg-gradient-mixture text-white rounded-lg">Get Value</Button>
              </div>
    </>
  )
}

export default UsedCarFormComponent