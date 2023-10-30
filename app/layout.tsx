import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Montserrat as FontSans } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { ConvexClientProvider } from "@/components/providers/convex-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Baku DateIO",
  description: "Date planner in Baku",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ConvexClientProvider>
          <Toaster position="bottom-center" />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
