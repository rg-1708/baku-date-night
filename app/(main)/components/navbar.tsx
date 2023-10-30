"use client";

import { useEffect, useState } from "react";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Title } from "./title";
import { Menu } from "./menu";
import { Banner } from "./banner";
import { Publish } from "./publish";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    onResetWidth();
  }, []);

  const params = useParams();

  const note = useQuery(api.notes.getById, {
    noteId: params.noteId as Id<"notes">,
  });

  if (note === undefined || !isMounted) {
    return (
      <nav className="bg-background px-3 py-2 w-full flex items-center justify-between">
        <Title.Skeleton />
        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    );
  }

  if (note === null) {
    return null;
  }

  return (
    <>
      <nav
        className="bg-background px-3 py-2 flex items-center gap-x-4"
        style={{ width: "100%" }}
      >
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <Title initialData={note} />
          <div className="flex items-center gap-x-2">
            <Publish initialData={note} />
            <Menu noteId={note._id} />
          </div>
        </div>
      </nav>
      {note.isArchived && <Banner noteId={note._id} />}
    </>
  );
};
