import React from 'react'

const OwnerInfoPopup = ({ open = false, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    if (!open) return null
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-950 bg-opacity-50 z-10 flex justify-center items-center'>
      <div className='w-2/5 text-black bg-white rounded-lg flex flex-col overflow-hidden'>
        <div className='w-full p-4 px-8 flex justify-between items-center bg-platinum '>
            <span className='font-bold'>Vehyx Info One Owner™ Badge</span>
            <div className='w-8 h-8 flex justify-center items-center aspect-square bg-black rounded-lg cursor-pointer'
            onClick={() => setOpen(false)}
            >
                <span className='text-white'>X</span>
            </div>
        </div>
        <p className='p-8'>The VEHYX Info One Owner™ badge that is based on the registration information reported to VEHYX Info. The badge is available for personal and commercial vehicles that have only been registered in the provinces of British Columbia, Alberta, Saskatchewan, Manitoba, Ontario, Quebec, Nova Scotia, New Brunswick, or PEI.</p>
      </div>
    </div>
            
  )
}

export default OwnerInfoPopup