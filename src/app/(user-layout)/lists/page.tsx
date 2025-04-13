import FilterList from '@/components/filter/FilterList'
import ListingCardsComponents from '@/components/listsPage/ListingCardsComponents'
import NavbarComponent from '@/components/navbar/NavbarComponent'
import React from 'react'

const page = () => {
  return (
    <div>
         <div className='w-full flex justify-center bg-gradient-mixture'>
            <div className='w-full max-w-screen-2xl py-4 px-8'>
              <NavbarComponent />
            </div>
        </div>
            <div className='w-full flex max-w-screen-2xl py-4 px-8 mx-auto'>
              <FilterList />
              <ListingCardsComponents />
            </div>
    </div>
  )
}

export default page