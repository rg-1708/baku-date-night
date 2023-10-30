"use client";

import { redirect } from "next/navigation";

import Navigation from "./components/navigation";

import { Spinner } from "@/components/ui/spinner";
import { SearchCommand } from "@/components/commands/search-comand";
import { useConvexAuth } from "convex/react";
import { toast } from "sonner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    toast.error("Please log in or sign up, to enter datefy");
    return redirect("/");
  }

  return (
    <div className="h-full flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
