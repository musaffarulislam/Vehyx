import React from 'react'
import DemageRecordIcon from '@/assets/DemageRecordsIcon.png'
import Image from 'next/image'

const DamageReportSection = () => {
  return (
    <div className='w-full flex flex-col gap-8 bg-white p-8 rounded-xl shadow-sm'>
      <div className='flex items-center font-bold gap-4'>
        <div className='h-fit p-4 rounded-xl bg-platinum'>
          <Image src={DemageRecordIcon} width={300} height={300} className='w-8' alt='Record Found Vhyex' />
        </div>
        <span>Accident/Damage Records Found</span>
      </div>
      <table className='w-full rounded-xl overflow-hidden border border-platinum'>
        <thead>
          <tr className='text-white bg-marian'>
            <th className='w-1/4 p-4 text-left border-r border-platinum'>Incident Date</th>
            <th className='w-2/4 p-4 text-left border-r border-platinum'>Details</th>
            <th className='w-1/4 p-4 text-left'>Amount</th>
          </tr>
        </thead>
        <tbody className='border border-platinum'>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>Ontario, Canada</td>
            <td className='w-1/4 p-4 py-8 font-bold'></td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'></td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>
              <div className='flex gap-2'>
                <span className='text-nowrap'>Police Reported Accident:</span>
                <span className='font-light'>Accident reported: minor damage<br/>
                  Involving right front impact<br/>
                  with another motor vehicle</span>
              </div>
            </td>
            <td className='w-1/4 p-4 py-8 font-bold'></td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>Ontario, Canada</td>
            <td className='w-1/4 p-4 py-8 font-bold'></td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'></td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>
              <div className='flex gap-2'>
                <span className='text-nowrap'>Police Reported Accident:</span>
                <span className='font-light'>Accident reported: minor damage<br/>
                  Involving right front impact<br/>
                  with another motor vehicle</span>
              </div>
            </td>
            <td className='w-1/4 p-4 py-8 font-bold'></td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>Ontario, Canada</td>
            <td className='w-1/4 p-4 py-8 font-bold'></td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'></td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>
              <div className='flex gap-2'>
                <span className='text-nowrap'>Police Reported Accident:</span>
                <span className='font-light'>Accident reported: minor damage<br/>
                  Involving right front impact<br/>
                  with another motor vehicle</span>
              </div>
            </td>
            <td className='w-1/4 p-4 py-8 font-bold'>₹1,699.43</td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>Ontario, Canada</td>
            <td className='w-1/4 p-4 py-8 font-bold'></td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'></td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>
              <div className='flex gap-2'>
                <span className='text-nowrap'>Police Reported Accident:</span>
                <span className='font-light'>Accident reported: minor damage<br/>
                  Involving right front impact<br/>
                  with another motor vehicle</span>
              </div>
            </td>
            <td className='w-1/4 p-4 py-8 font-bold'></td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'>2017 Apr 24</td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>Ontario, Canada</td>
            <td className='w-1/4 p-4 py-8 font-bold'></td>
          </tr>
          <tr className='border-b border-platinum text-sm'>
            <td className='w-1/4 p-4 border-r border-platinum py-8 font-bold'></td>
            <td className='w-2/4 p-4 border-r border-platinum py-8 font-bold'>
              <div className='flex gap-2'>
                <span className='text-nowrap'>Police Reported Accident:</span>
                <span className='font-light'>Accident reported: minor damage<br/>
                  Involving right front impact<br/>
                  with another motor vehicle</span>
              </div>
            </td>
            <td className='w-1/4 p-4 py-8 font-bold'>₹1,699.43</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DamageReportSection