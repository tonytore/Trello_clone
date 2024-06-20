import { OrganizationList } from '@clerk/nextjs'
import React from 'react'

const SelectOrg = () => {
  return (
    <OrganizationList hidePersonal/>
  )
}

export default SelectOrg
