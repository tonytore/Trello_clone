"use clients"

import { Button } from '@/components/ui/button'
import React from 'react'
import { boardProp } from '../page'
import { deleteBoard } from '@/lib/action'
import DeleteBtn from './DeleteBtn'




const BoardForm = ({title,id}:boardProp) => {

  const deleteBoardWithId = deleteBoard.bind(null, id)
 
  return (
    <form action={deleteBoardWithId}>
      <div className='flex justify-between items-center gap-3 px-9 mx-auto max-w-4xl'>
        <p>{title}</p>
        <DeleteBtn/>
      </div>
    </form>
  )
}

export default BoardForm
