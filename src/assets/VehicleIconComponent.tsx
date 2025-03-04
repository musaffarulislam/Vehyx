import Image from 'next/image'
import React from 'react'
import ApproveIcon from '@/assets/VehicleIcon.png'

const VehicleIconComponent = () => {
  return (
    <Image src={ApproveIcon} alt="Approve" width={300} height={300} /> //
  )
}

export default VehicleIconComponent