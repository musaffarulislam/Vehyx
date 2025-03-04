import Image from 'next/image'
import React from 'react'
import ApproveIcon from '@/assets/OilIcon.png'

const OilIconComponent = () => {
  return (
    <Image src={ApproveIcon} alt="Approve" width={300} height={300} /> //
  )
}

export default OilIconComponent