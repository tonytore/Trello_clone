import { OrganizationList } from '@clerk/nextjs'
import React from 'react'

export default function CreateOrganizationPage() {
  return (
    <div className='my-96'>
      <OrganizationList hidePersonal/>
    </div>
  )
}
