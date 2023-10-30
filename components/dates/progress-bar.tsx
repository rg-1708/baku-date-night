import { cn } from "@/lib/utils";
import React from "react";

export const ProgressBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5", className)}>
      <div
        className="bg-indigo-400 h-2.5 rounded-full"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
};
