'use client'

import React, { useState } from 'react'
import ImageCard from '@/assets/ImageCard.png'
import Image from 'next/image'
import HomeIcon from '@/assets/HomeIcon.png'
import LocationIcon from "@/assets/LocationIcon.png"
import SpeedMeterIcon from "@/assets/SpeedMeterIcon.png"
import { Button } from '../ui/button'
import HeartIcon from "@/assets/svg/HeartIcon"
import Link from 'next/link'

const ListingCards = () => {
  const [favourite, setFavourite] = useState(false)
  return (
    <Link href="/lists/details">
    <div className='w-full flex flex-col gap-2 bg-white rounded-2xl shadow-md h-fit p-3'>
        <div className='relative w-full h-full aspect-[5/3] bg-red-500 rounded-xl overflow-hidden'>
          <Image src={ImageCard} alt='image-card' layout='fill' objectFit='cover' />
          <div className={`absolute top-2 right-2 w-fit h-fit p-2 rounded-full border border-black cursor-pointer ${favourite ? 'bg-red-500' : 'bg-tertiary'}`}
                  onClick={() => setFavourite(!favourite)}>
          <HeartIcon iconColor='white' fillColor={favourite ? 'white' : 'none'} size='16'/>
        </div>
        </div>
        <div className=' bg-gray-200 w-fit flex items-center gap-2 p-2 rounded-sm'>
            <Image src={HomeIcon} alt='home-icon' width={20} height={20} className='w-3 h-3' />
            <p className='text-xs font-bold'>Home delivery</p>
        </div>
        <div>
            <h4 className='font-bold'>2015 BMW X1 XDRIVE28I</h4>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center ">
          <Image src={LocationIcon} alt="LocationIcon" width={40} height={40} className="w-5 h-5" />
            <p className="text-tertiary text-xs"><span className="font-bold">Coldbrook</span> <span>953 km + Delivery available</span></p>
          </div>
          <div className="flex gap-2 items-center">
          <Image src={SpeedMeterIcon} alt="SpeedMeterIcon" width={40} height={40} className="w-5 h-5" />
            <p className="text- text-xs">120,728 km</p>
          </div>
        </div>
        <div className='my-1'>
            <h3 className='font-bold'>₹14,985</h3>
        </div>
        <Button className='w-full rounded-2xl p-4 py-6 bg-black text-white hover:bg-tertiary'>View Details</Button>
    </div>
    </Link>
  )
}

export default ListingCards