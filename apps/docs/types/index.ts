/**
 * Common type definitions for the documentation site
 */

export interface NavItem {
  title?: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }> | string;
  label?: string;
}
export interface NavSection {
  title: string;
  items: NavItem[];
  collapsible?: boolean;
  defaultOpen?: boolean;
}

export interface DocPage {
  title: string;
  description: string;
  slug: string;
  content: string;
}

export interface SidebarConfig {
  sections: NavSection[];
}

export interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: SidebarConfig;
}
