import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function layout({children}:{children:React.ReactNode}){
    return(
        <ClerkProvider>
             
            {children}
      
        </ClerkProvider>
    )
}