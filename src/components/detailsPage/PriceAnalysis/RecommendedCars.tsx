import ListingCards from '@/components/card/ListingCards'
import React from 'react'

const RecommendedCars = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h3 className='font-bold'>You may also like</h3>
        <div className='w-full grid grid-cols-4 gap-6 '>
        <ListingCards />
        <ListingCards />
        <ListingCards />
        <ListingCards />
        </div>
    </div>
  )
}

export default RecommendedCars