import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {
    title: v.string(),
    parentNote: v.optional(v.id("notes")),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const note = await ctx.db.insert("notes", {
      title: args.title,
      userId,
      isArchived: false,
      isShared: false,
      isPublished: false,
      parentNote: args.parentNote,
    });

    return note;
  },
});
