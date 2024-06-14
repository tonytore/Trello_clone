import { Button } from '@/components/ui/button'
import { Medal } from 'lucide-react'

import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import Logo from '@/components/logo'

const headingFont = localFont({
    src:'../../public/fonts/ubuntu-light-webfont.woff2'
})

const textFont = Poppins({
  subsets:['latin'],
  weight:[
    "100","200","300","400","500","600","700","800","900"
  ]
})

const MarketingPage = () => {
  return (
    <div className='pt-40 pb-20 flex flex-col gap-3 items-center justify-center'>
      <Logo/>
      <div className={cn(
        'flex flex-col gap-3 items-center font-semibold justify-center', 
        headingFont.className,
        )}>
         <div className='flex gap-1 p-4 bg-amber-100 text-amber-700 text-center rounded-full uppercase'>
            <Medal/>
            no 1 task management
         </div>
         <h1 className='text-3xl md:text-6xl text-neutral-800'>Taskify helps team move</h1>
         <p className='p-6 px-8 py-2 pb-4 text-2xl md:text-3xl font-bold
          text-neutral-50 bg-gradient-to-r from-fuchsia-600
           to-pink-600 rounded-xl shadow-sm'> work forward.</p>
      </div>
      <div className={cn(
        'text-center text-sm md:text-xl max-w-sm md:max-w-2xl text-neutral-400',
        textFont.className,
        )}>
        Collaborate, manage projects, and reach new productivity peaks.
        From high rises to the home office, the way yout team works is
        unique - accomplish it all with Taskify.
      </div>
      <Button variant="destructive" className='bg-black text-white hover:text-black rounded-xl' size='lg' asChild>
        <Link href='/sign-up'>Get Testify for free</Link>
      </Button>
    </div>
  )
}

export default MarketingPage
