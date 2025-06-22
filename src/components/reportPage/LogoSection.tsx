import React from 'react'
import LogoInfo from '@/assets/VehyxInfoLogo.png'
import Image from 'next/image'
import Link from 'next/link'

const LogoSection = ({ isDescription = true }: { isDescription?: boolean }) => {
  return (
    <div className='flex flex-col gap-12 items-center py-8'>
      <Link href='/'><Image alt='vehyx' src={LogoInfo} width={300} height={300} className='w-48' /></Link> 
      {isDescription && (
        <div className='flex flex-col text-center font-normal text-lg '>
          <span>Vehicle History Report #: XXXXXXXX</span>
          <span>Report Date: January 7, 2025 | 01:04 PM</span>
          <span>Report Status: Complete</span>
        </div>
      )}
    </div>
  )
}

export default LogoSection