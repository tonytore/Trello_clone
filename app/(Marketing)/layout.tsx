import React from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-slate-100 h-screen'>
      {children}
    </div>
  )
}
