import "@smart-tv/ui/styles.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import React from "react";
import { TopNav } from "../components";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart TV — Docs",
  description:
    "Documentation for Smart TV packages (UI, Query, Player) — open source and highly-customizable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
