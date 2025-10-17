"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";

export default function TopNav(): React.ReactElement {
    const { setTheme, theme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50 h-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between text-gray-900 dark:text-white">
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    <Link href="/" className="font-bold text-lg text-gray-900 dark:text-white">
                        Smart TV
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-3 text-sm">
                        <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Docs
                        </Link>
                        <Link href="/components" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Components
                        </Link>
                        <Link href="/themes" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Themes
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="hidden sm:block text-sm text-gray-600 dark:text-gray-400">Open source</div>

                    <div className="flex items-center gap-2">
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            className="text-xs sm:text-sm px-2 py-1 rounded border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                            aria-label="Theme selector"
                        >
                            <option value="system">System</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>

                        <a
                            href="https://github.com/smarttv-dev/smart-tv"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            aria-label="View repository on GitHub"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
                    <nav className="flex flex-col py-2">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            🏠 Home
                        </Link>
                        <Link
                            href="/docs"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            🚀 Docs
                        </Link>
                        <Link
                            href="/components"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            🧩 Components
                        </Link>
                        <Link
                            href="/themes"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            🎨 Themes
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
