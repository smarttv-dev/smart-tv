"use client";
import React from "react";

export default function Sidebar(): React.ReactElement {
  return (
    <aside className="w-72 border-r border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 p-6 hidden md:block">
      <div>Sidebar Navigation</div>
    </aside>
  );
}
