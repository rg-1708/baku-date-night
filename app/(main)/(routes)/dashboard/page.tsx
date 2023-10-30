"use client";

import Image from "next/image";

import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const DashboardPage = () => {
  const { user } = useUser();

  const create = useMutation(api.notes.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });
    toast.promise(promise, {
      loading: "Creating a new node...",
      success: "New note created!",
      error: "Failed to create a new note",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src="empty.svg" height={300} width={300} alt="empty" />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Datefy
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DashboardPage;
