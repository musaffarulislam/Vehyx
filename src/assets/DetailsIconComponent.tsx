import Image from 'next/image'
import React from 'react'
import ApproveIcon from '@/assets/DetailsIcon.png'

const DetailsIconComponent = () => {
  return (
    <Image src={ApproveIcon} alt="Approve" width={300} height={300} /> //
  )
}

export default DetailsIconComponent