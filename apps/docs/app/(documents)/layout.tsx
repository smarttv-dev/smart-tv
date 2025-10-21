import type { ReactNode } from "react";
import React from "react";
import { Sidebar } from "@/components";

export default function DocsLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main
          className="flex-1 p-8"
          style={{
            // limit main area to viewport minus topnav height so it scrolls internally
            overflow: "auto",
          }}
        >
          <div className="content-panel min-h-[60vh] rounded-lg p-6 shadow-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
