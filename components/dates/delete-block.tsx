import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";

export const DeleteBlock = ({ className }: { className?: string }) => {
  return (
    <X className={cn("h-4 w-4 text-red-500 hover:cursor-pointer", className)} />
  );
};
