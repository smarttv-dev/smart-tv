"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NavSection } from "@/types";

const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { href: "/", label: "Home", icon: "🏠" },
      { href: "/docs", label: "Quick Start", icon: "🚀" },
      { href: "/docs/usage", label: "Usage Guide", icon: "📖" },
      { href: "/docs/cli", label: "CLI Tools", icon: "⚡" },
      { href: "/components", label: "Components", icon: "🧩" },
      { href: "/themes", label: "Themes", icon: "🎨" },
    ],
  },
];

const packageSections = [
  {
    id: "ui",
    title: "UI Components",
    href: "/components/ui",
    description: "Composable components & styles",
    icon: "🎨",
    subItems: [
      { href: "/components/ui", label: "Overview", icon: "📋" },
      { href: "/components/ui/app-provider", label: "AppProvider", icon: "⚡" },
      { href: "/components/ui/router", label: "Router", icon: "🧭" },
      { href: "/components/ui/screen", label: "Screen", icon: "📱" },
      { href: "/components/ui/section", label: "Section", icon: "📄" },
      { href: "/components/ui/button", label: "Button", icon: "🔘" },
      { href: "/components/ui/card", label: "Card", icon: "🃏" },
      { href: "/components/ui/menu", label: "Menu", icon: "☰" },
      { href: "/components/ui/navbar", label: "Navbar", icon: "🔝" },
      { href: "/components/ui/sidebar", label: "Sidebar", icon: "📐" },
      { href: "/components/ui/grid", label: "Grid", icon: "▦" },
      { href: "/components/ui/row", label: "Row", icon: "➡️" },
      { href: "/components/ui/dialog", label: "Dialog", icon: "💬" },
      { href: "/components/ui/drawer", label: "Drawer", icon: "📂" },
      { href: "/components/ui/snackbar", label: "Snackbar", icon: "📢" },
      { href: "/components/ui/tooltip", label: "Tooltip", icon: "💡" },
      { href: "/components/ui/keyboard", label: "Keyboard", icon: "⌨️" },
    ],
  },
  {
    id: "query",
    title: "Query Client",
    href: "/components/query",
    description: "Lightweight query client hooks",
    icon: "🔄",
    subItems: [
      { href: "/components/query", label: "Overview", icon: "📋" },
      {
        href: "/components/query/installation",
        label: "Installation",
        icon: "📦",
      },
      { href: "/components/query/usage", label: "Usage & Config", icon: "⚙️" },
      { href: "/components/query/hooks", label: "Hooks", icon: "🪝" },
      { href: "/components/query/examples", label: "Examples", icon: "💡" },
      { href: "/components/query/types", label: "TypeScript", icon: "📘" },
    ],
  },
  {
    id: "player",
    title: "Smart TV Player",
    href: "/components/player",
    description: "Video/audio player primitives",
    icon: "🎬",
    subItems: [
      { href: "/components/player", label: "Overview", icon: "📋" },
      {
        href: "/components/player/installation",
        label: "Installation",
        icon: "📦",
      },
      { href: "/components/player/usage", label: "Usage & Config", icon: "⚙️" },
      {
        href: "/components/player/components",
        label: "Components",
        icon: "🧩",
      },
      { href: "/components/player/hooks", label: "Hooks", icon: "🪝" },
      { href: "/components/player/examples", label: "Examples", icon: "💡" },
      { href: "/components/player/types", label: "TypeScript", icon: "📘" },
    ],
  },
];

export default function Sidebar(): React.ReactElement {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    ui: true,
    query: true,
    player: true,
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  const SidebarContent = () => (
    <div className="h-full overflow-auto">
      {/* Getting Started Section */}
      <div className="mb-8">
        <h4
          className="mb-4 text-xs font-semibold uppercase tracking-wider"
          style={{ color: "rgba(var(--foreground-rgb), .7)" }}
        >
          Getting Started
        </h4>
        <ul className="space-y-1">
          {navSections[0]?.items.map((item) => {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive(item.href)
                      ? "border-l-2 border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span className="text-base">
                    {typeof item.icon === "string"
                      ? item.icon
                      : React.isValidElement(item.icon)
                        ? item.icon
                        : item.icon
                          ? React.createElement(
                              item.icon as React.ComponentType<{
                                className?: string;
                              }>,
                              { className: "h-4 w-4" }
                            )
                          : null}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Packages Section */}
      <div>
        <h4
          className="mb-4 text-xs font-semibold uppercase tracking-wider"
          style={{ color: "rgba(var(--foreground-rgb), .7)" }}
        >
          Packages
        </h4>
        <div className="space-y-3">
          {packageSections.map((pkg) => (
            <div
              key={pkg.id}
              className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Package Header */}
              <div
                className={`${isActive(pkg.href) ? "bg-blue-50 dark:bg-blue-900/20" : "bg-white dark:bg-gray-800"}`}
              >
                <Link
                  href={pkg.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                    isActive(pkg.href) &&
                    !pkg.subItems?.some(
                      (sub) => isActive(sub.href) && pathname !== pkg.href
                    )
                      ? "font-medium text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{pkg.icon}</span>
                    <div>
                      <div className="text-sm font-medium">{pkg.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {pkg.description}
                      </div>
                    </div>
                  </div>
                  {pkg.subItems && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleSection(pkg.id);
                      }}
                      className="rounded p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${openSections[pkg.id] ? "rotate-90" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </Link>
              </div>

              {/* Package Subitems */}
              {pkg.subItems && openSections[pkg.id] && (
                <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
                  <ul className="space-y-1 p-2">
                    {pkg.subItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            isActive(subItem.href) && pathname === subItem.href
                              ? "ml-1 border-l-2 border-blue-600 bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                              : "text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          <span className="text-sm">{subItem.icon}</span>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
        <h4
          className="mb-3 text-xs font-semibold uppercase tracking-wider"
          style={{ color: "rgba(var(--foreground-rgb), .7)" }}
        >
          Quick Links
        </h4>
        <div className="space-y-2">
          <a
            href="https://github.com/smarttv-dev/smart-tv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <span>📚</span>
            GitHub Repository
          </a>
          <a
            href="https://www.npmjs.com/package/@smart-tv/player"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <span>📦</span>
            NPM Package
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 p-4 text-white shadow-lg transition-all hover:scale-110 hover:bg-blue-700 md:hidden"
        aria-label="Open navigation menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 w-80 transform bg-gray-50 transition-transform duration-300 ease-in-out md:hidden dark:bg-gray-900 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Navigation
          </h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Close navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="h-[calc(100%-73px)] overflow-auto p-6 text-[rgb(var(--foreground-rgb))]">
          <SidebarContent />
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-72 overflow-auto border-r border-gray-200 bg-gray-50/50 p-6 text-[rgb(var(--foreground-rgb))] md:block dark:border-gray-700 dark:bg-gray-900/50">
        <SidebarContent />
      </aside>
    </>
  );
}
