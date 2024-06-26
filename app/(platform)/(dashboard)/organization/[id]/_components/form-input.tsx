import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface formInputProp { 
    errors?: { 
        title?: string[] 
      }
}


const FormInput = ({errors}:formInputProp) => {
  return (
    <div>
     
          <input
            type="text"
            name="title"
            required
            placeholder="Enter your board title"
            className="border h-10 px-3"
          />
            
        {
             errors?.title ? 
              <div>
                 {
                  errors?.title?.map((error:string)=>(
                    <p key={error} className="text-red-400">
                         {error}
                  </p>
                    )
                  )
                 }
              </div> : (null)
            }
    </div>
  )
}

export default FormInput
