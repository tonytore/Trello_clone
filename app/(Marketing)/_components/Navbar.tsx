import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

export default function Navbar() {

  return (
    
      <div
        className="fixed top-0 w-full h-14 border-b shadow-sm 
    bg-white flex  mx-auto items-center"
      >
        <div
          className="md:max-w-screen-4xl mx-9 flex justify-between items-center w-full"
        >
          <Logo />
          <div className=" flex-1 md:flex-none flex justify-between md:block">
            <Button
              variant="ghost"
              className='rounded-xl'
              size="sm"
              asChild
            >
              <Link href="/sign-in">{auth().userId ? 'you R Succussfully Login' : "Login"}</Link>
            </Button>
            <Button   
              className="hover:text-neutral-400"
              size="sm"
              asChild
            >
              <Link href="/sign-up">Get Testify for free</Link>
            </Button>
          </div>
        </div>
      </div>
 
  );
}
