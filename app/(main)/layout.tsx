"use client";

import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import Navigation from "./components/navigation";

import { Spinner } from "@/components/ui/spinner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  if (isLoaded && !isSignedIn) {
    return redirect("/");
  }

  return (
    <div className="h-full flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
