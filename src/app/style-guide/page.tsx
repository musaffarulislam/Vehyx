import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-4 p-24'>
        <Button className='w-fit'>Hello</Button>
        <Button disabled className='w-fit'>Hello</Button>
        <Button variant={'outline'} className='w-fit'>Hello</Button>
        <Button variant={'outline'} disabled className='w-fit'>Hello</Button>
    </div>
  )
}

export default page