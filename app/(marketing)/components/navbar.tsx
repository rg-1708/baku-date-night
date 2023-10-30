"use client";

import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

import { useUser } from "@clerk/nextjs";
import { Spinner } from "@/components/ui/spinner";

export const Navbar = () => {
  const { isSignedIn, isLoaded } = useUser();

  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {!isLoaded && <Spinner />}
        {!isSignedIn && isLoaded && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                <span className="underline">Log in</span>
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Sign up</Button>
            </SignUpButton>
          </>
        )}
        {isSignedIn && isLoaded && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Enter Datefy</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
};
