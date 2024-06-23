import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'
import MobileSidebar from './MobileSidebar'

const NavBar = () => {
  return (
    <div className=' top-0 border-b  z-50 h-14 px-8 flex items-center justify-between shadow-sm '>
      
      {/** TODO: Mobile Sidebar */}
      <MobileSidebar/>
      
      <div className='flex items-center gap-x-4 '>
         <div className='hidden md:flex space-x-6 '>
         <Logo/>
         </div>
         <Button  size={"sm"} className='text-sky-700 hover:text-sky-700/90 hidden md:block'>Create</Button>
         <Button size={"sm"} className='w-4 h-4 mb-2 block md:hidden text-sky-700 hover:text-sky-700/90'><Plus/></Button>
      </div>
      <div className='ml-auto flex items-center gap-x-2'>
           <OrganizationSwitcher
           hidePersonal
           afterSelectOrganizationUrl='organization/:id'
           afterCreateOrganizationUrl='organization/:id'
           afterLeaveOrganizationUrl='/select-org'
           appearance={
            {
                elements:{
                    rootBox:{
                        display:"flex",
                        justifyContent:"center",
                        alignItems: "center",
                    }
                }
            }
           }
           />
           <UserButton
           afterSignOutUrl='/'
           appearance={
            {
                elements:{
                    avatarBox:{
                        height:30,
                        width:30
                    }
                }
            }
           }

           />
      </div>
    </div>
  )
}

export default NavBar
