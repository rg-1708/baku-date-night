import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  notes: defineTable({
    title: v.string(),
    userId: v.string(),
    isArchived: v.boolean(),
    isPublished: v.boolean(),
    isShared: v.boolean(),
    sharedWithId: v.optional(v.string()),
    parentNote: v.optional(v.id("notes")),
    content: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    icon: v.optional(v.string()),
  }),
});
