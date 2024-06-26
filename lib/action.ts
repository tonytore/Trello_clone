"use server"

import { revalidatePath } from "next/cache"
import db from "./db"
import {z} from 'zod'
import { redirect } from "next/navigation";

export interface State {
  message?: string | null,
  errors?:{
    title?:string[];
  },
  
}


const CreateBoard = z.object({
  title:z.string().min(3, "minimum length of 3 letters is required")
})

export const create = async (prevState:State , formData : FormData) =>{
 
  await new Promise((resolve)=>{
     return  setTimeout(resolve,2000)
  })

  const validatedFields = CreateBoard.safeParse({
    title : formData.get("title")
  })

  if(!validatedFields.success){
    return ({
      errors : validatedFields.error.flatten().fieldErrors,
      message : "Missing fields"
    })
  }

  const { title } = validatedFields.data

  try {

    await  db.board.create({
      data:{
        title,
      }
     })
    
  } catch (error) {
    return {
      message : "Database error"
    }
  }

  
 revalidatePath('/organization/org_2hvaKqSMHHgKEB7cSmevvK13N5Os')
 redirect('/organization/org_2hvaKqSMHHgKEB7cSmevvK13N5Os')
}

export async function deleteBoard(id:string){
  await db.board.delete({
    where:{
      id
    }
  })

  revalidatePath('/organization/id')
}