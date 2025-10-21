/**
 * Configuration constants for the documentation site
 */

export const SITE_CONFIG = {
  name: "Smart TV Documentation",
  description: "Comprehensive documentation for Smart TV development",
  url: "https://smart-tv.dev",
  github: "https://github.com/smarttv-dev/smart-tv",
} as const;

export const NAVIGATION_CONFIG = {
  showSearch: true,
  showThemeToggle: true,
  maxDepth: 3,
} as const;

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
} as const;

export const ROUTES = {
  home: "/",
  docs: "/docs",
  components: "/components",
  themes: "/themes",
} as const;
