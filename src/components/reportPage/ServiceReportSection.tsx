import React from 'react'
import ServiceReportIcon from '@/assets/ServiceRecordsIcon.png'
import Image from 'next/image'

const ServiceReportSection = () => {
  return (
    <div className='w-full flex flex-col gap-8 bg-white p-8 rounded-xl shadow-sm'>
      <div className='flex items-center font-bold gap-4'>
        <div className='h-fit p-4 rounded-xl bg-platinum'>
          <Image src={ServiceReportIcon} width={300} height={300} className='w-8' alt='Record Found Vhyex' />
        </div>
        <span>Registration</span>
      </div>
      <table className='w-full rounded-xl overflow-hidden border border-platinum'>
        <thead>
          <tr className='text-white  bg-marian'>
            <th className='w-1/4 p-4 text-left border-r border-platinum'>Date</th>
            <th className='w-1/4 p-4 text-left border-r border-platinum'>Odometer</th>
            <th className='w-1/4 p-4 text-left border-r border-platinum'>Source</th>
            <th className='w-1/4 p-4 text-left'>Details</th>
          </tr>
        </thead>
        <tbody className='border border-platinum'>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>6,995 KM</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8'>
              <div className='flex flex-col' >
              <span>Service Facility</span>
              <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className='w-full p-4 py-8'>
              <span className='font-bold'>Vehicle serviced</span>
              <ul className='list-disc list-inside mt-2'> 
                <li>Pre-delivery inspection completed</li>
                <li>Recommended maintenance performed</li>
              </ul>
            </td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>6,995 KM</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8'>
              <div className='flex flex-col' >
              <span>Service Facility</span>
              <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className='w-full p-4 py-8'>
              <span className='font-bold'>Vehicle serviced</span>
              <ul className='list-disc list-inside mt-2'> 
                <li>Pre-delivery inspection completed</li>
                <li>Recommended maintenance performed</li>
              </ul>
            </td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>6,995 KM</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8'>
              <div className='flex flex-col' >
              <span>Service Facility</span>
              <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className='w-full p-4 py-8'>
              <span className='font-bold'>Vehicle serviced</span>
              <ul className='list-disc list-inside mt-2'> 
                <li>Pre-delivery inspection completed</li>
                <li>Recommended maintenance performed</li>
              </ul>
            </td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>6,995 KM</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8'>
              <div className='flex flex-col' >
              <span>Service Facility</span>
              <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className='w-full p-4 py-8'>
              <span className='font-bold'>Vehicle serviced</span>
              <ul className='list-disc list-inside mt-2'> 
                <li>Pre-delivery inspection completed</li>
                <li>Recommended maintenance performed</li>
              </ul>
            </td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>6,995 KM</td>
            <td className='w-1/4 p-4 border-r border-platinum py-8'>
              <div className='flex flex-col' >
              <span>Service Facility</span>
              <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className='w-full p-4 py-8'>
              <span className='font-bold'>Vehicle serviced</span>
              <ul className='list-disc list-inside mt-2'> 
                <li>Pre-delivery inspection completed</li>
                <li>Recommended maintenance performed</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ServiceReportSection