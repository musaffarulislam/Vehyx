import React from 'react'

const PriceAnalysis = () => {
    return (
        <div className='w-full bg-white rounded-xl p-4 md:p-8 shadow-sm'>
            <p className='text-xl font-bold'>Price analysis</p>
            <div className='flex flex-col justify-center items-center gap-4 mt-4'>
                <div className='flex flex-col gap-2 text-center'>
                    <p>This vehicle is listed at</p>
                    <h1 className='font-bold'>₹10,40,985</h1>
                </div>
                <div className='w-full flex gap-4 px-8'>
                    <div className='w-full flex flex-col justify-center items-center gap-4'>
                        <div className='w-full h-12 bg-green-600'></div>
                        <p className='text-lg font-bold'>GREAT</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-4'>
                        <div className='w-full h-12 bg-green-400'></div>
                        <p className='text-lg font-bold'>GOOD</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-4'>
                        <div className='w-full h-12 bg-amber-500'></div>
                        <p className='text-lg font-bold'>FAIR</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-4'>
                        <div className='w-full h-12 bg-red-500'></div>
                        <p className='text-lg font-bold'>ABOVE</p>
                    </div>
                </div>
                <p className='max-w-screen-lg text-center'>This vehicle is $2,543 BELOW MARKET (7%). It is compared to similar vehicles in the St. John's and adjacent area. It’s based on kilometers, year, make, model, trim, manufacturer certification, manufacturer packages, options, and much more.</p>
                <h3 className='text-blue-700 underline font-bold'>How we calculate price badges?</h3>
            </div>
        </div>
    )
}

export default PriceAnalysis