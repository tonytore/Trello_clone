import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <div className=' top-0 border-b  z-50 h-14 px-8 flex items-center justify-between shadow-sm '>
      <div className='flex'>
         <div className='hidden md:flex space-x-4 '>
         <Logo/>
         </div>
         <Button size={"sm"} className='rounded-sm hidden md:block'>Create</Button>
         <Button size={"sm"} className='rounded-sm w-4 h-4 block md:hidden'><Plus/></Button>
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
