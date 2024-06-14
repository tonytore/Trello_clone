import { Medal } from 'lucide-react'
import React from 'react'

const MarketingPage = () => {
  return (
    <div className='pt-40 pb-20 flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-3 items-center justify-center'>
         <div className='flex gap-1 p-4 bg-amber-100 text-amber-700 text-center rounded-full uppercase'>
            <Medal/>
            no 1 task management
         </div>
         <h1 className='text-3xl md:text-6xl text-neutral-800'>Taskify helps team move</h1>
         <p className='p-6 px-8 py-2 pb-4 text-2xl
          text-neutral-50 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-xl shadow-sm'> work forward.</p>
      </div>
    </div>
  )
}

export default MarketingPage
