"use client";

import React from "react";
import { DeleteBlock } from "@/components/dates/delete-block";
import { PriorityDisplay } from "@/components/dates/priority-display";
import { ProgressBar } from "@/components/dates/progress-bar";
import { StatusDisplay } from "@/components/dates/status-display";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const DateCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Date name</CardTitle>
        <div className="flex items-center justify-between">
          <PriorityDisplay />
          <DeleteBlock className="ml-auto" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col p-2 gap-y-2">
          <p className="whitespace-pre-wrap">this is date description!</p>
          <div className="flex-grow"></div>
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-xs my-1 text-muted-foreground">
                08/31/23 10:43 PM
              </p>
              <ProgressBar />
            </div>
            <div className="ml-auto flex items-end">
              <StatusDisplay />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};
