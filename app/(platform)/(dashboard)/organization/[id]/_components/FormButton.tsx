"use client"

import { Button } from '@/components/ui/button'
import { Circle } from 'lucide-react'
import React from 'react'
import { useFormStatus } from 'react-dom'

const FormButton = () => {
    const { pending } = useFormStatus()
  return (
    <div>
       <Button disabled={pending}  className='bg-black hover:bg-black  text-neutral-400'>{pending ? <Circle className='animate-spin'/> : "Submit"}</Button>
    </div>
  )
}

export default FormButton
