"use client"

import { useOrganizationList } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import { useEffect } from "react"

const OrgControl = () => {
    const params = useParams()
    const { setActive }  = useOrganizationList()

    useEffect(()=>{
        if(!setActive) return
        setActive({
            organization: params.id as string
        })

    },[setActive,params.id])

 return null
}

export default OrgControl
