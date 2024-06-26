"use client";


import React from "react";
import { create } from "@/lib/action";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import FormInput from "./form-input";
import FormButton from "./FormButton";


interface stateProp {
    message: string;
    errors: { 
      title?: string[]
    }

}


export default function OrganizationForm() {

  const initialState:stateProp = {
    message: "",
    errors: {}
};
  const [state, formAction] = useFormState(create,initialState)
  return (
    <div>
      <form
        action={formAction}
        className="w-full max-w-4xl p-4   
     dark:bg-zinc-700 bg-transparent my-12 sm:p-6 md:p-8  bg-slate-50
     text-slate-500 dark:text-slate-50
    border-gray-100 mx-auto"
      >
       <div className="flex">
       <FormInput errors={state?.errors}/>
       <FormButton/>
       </div>
        
        
      </form>
    </div>
  );
}
