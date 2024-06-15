import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function layout({children}:{children:React.ReactNode}){
    return(
        <ClerkProvider>
             <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
        </ClerkProvider>
    )
}