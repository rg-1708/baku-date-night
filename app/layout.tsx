import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Montserrat as FontSans } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import { EdgeStoreProvider } from "../lib/edgestore";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Baku DateIO",
  description: "Date planner in Baku",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
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
          <EdgeStoreProvider>
            <Toaster position="bottom-center" visibleToasts={1} />
            <ModalProvider />
            {children}
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
