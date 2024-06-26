
import React from 'react'
import OrganizationForm from './_components/OrganizationForm'
import BoardForm from './_components/BoardForm'
import db from '@/lib/db'


export type boardProp =  {
    id:string,
    title:string

}

const OrganizationIdPage = async() => {
  const BoardData = await db.board.findMany()
  console.log(BoardData);
  


  return (
    <div className=''>
      <OrganizationForm/>
      {
        BoardData.map(({id,title}:boardProp)=>{
          return (
            <div key={id} className='my-4'>
              <BoardForm title={title} id={id}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default OrganizationIdPage
