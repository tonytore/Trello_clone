"use client"

import { Button } from '@/components/ui/button'
import { Circle } from 'lucide-react'
import React from 'react'
import { useFormStatus } from 'react-dom'

const DeleteBtn = () => {
    const { pending } = useFormStatus()
  return (
    <div>
        <Button disabled={pending} size='sm' type='submit' className='bg-red-400 hover:bg-red-400'>{pending ? <Circle className='animate-spin'/> : "Delete"}</Button>
    </div>
  )
}

export default DeleteBtn
