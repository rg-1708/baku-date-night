"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
        From Plans to Memories: All in One Place. Welcome to{" "}
        <span className="underline">Datefy</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Datefy is your All-in-One Date Planner with Note Collaboration
      </h3>
      <Button>
        <Link href="/dashboard">Enter Datefy</Link>
      </Button>
    </div>
  );
};
