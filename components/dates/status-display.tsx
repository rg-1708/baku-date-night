import { cn } from "@/lib/utils";
import React from "react";

export const StatusDisplay = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2 py-1 text-xs font-semibold text-secondary bg-indigo-600",
        className
      )}
    >
      done
    </span>
  );
};
