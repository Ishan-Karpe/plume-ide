// src/inngest/functions.ts
import { generateText } from "ai";
import { inngest } from "./client";
import { google } from "@ai-sdk/google";
import { anthropic } from "@ai-sdk/anthropic";

export const demoGenerate = inngest.createFunction(
  { id: "demo-generate", triggers: { event: "demo/generate" } },
  async ({ step }) => {
    await step.run("generate-text", async () => {
        return await generateText({
            model: google("gemini-3.5-flash"),
            prompt: "Write a butter chicken recipe for a Indian 16 year old who likes spice.",
        });
    })
  },
);