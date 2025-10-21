import { KeyboardTheme } from "./KeyboardTypes";

// Theme configurations for different keyboard styles
export const getKeyboardThemeClasses = (theme: KeyboardTheme) => {
  const themes = {
    default: {
      container:
        "ui-bg-gray-900 ui-rounded-2xl ui-p-6 ui-shadow-2xl ui-border ui-border-gray-700",
      preview:
        "ui-bg-gray-800 ui-text-white ui-text-2xl ui-px-6 ui-py-4 ui-rounded-xl ui-mb-4 ui-min-h-[60px] ui-flex ui-items-center ui-border ui-border-gray-700",
      rowGap: "ui-gap-2 ui-mb-2 last:ui-mb-0",
      key: "ui-bg-gray-700 hover:ui-bg-gray-600 ui-text-white ui-rounded-lg ui-font-semibold ui-transition-all ui-duration-200 ui-flex ui-items-center ui-justify-center ui-min-h-[48px] ui-border ui-border-gray-600",
      keyFocused:
        "ui-bg-blue-600 ui-scale-110 ui-shadow-lg ui-shadow-blue-500/50 ui-border-blue-400",
      keyPressed: "ui-bg-blue-700 ui-scale-95",
      keyDisabled:
        "ui-bg-gray-800 ui-text-gray-600 ui-cursor-not-allowed ui-opacity-50",
    },
    minimal: {
      container:
        "ui-bg-white/5 ui-backdrop-blur-sm ui-rounded-xl ui-p-4 ui-border ui-border-white/10",
      preview:
        "ui-bg-white/10 ui-text-white ui-text-xl ui-px-4 ui-py-3 ui-rounded-lg ui-mb-3 ui-min-h-[50px] ui-flex ui-items-center ui-border ui-border-white/20",
      rowGap: "ui-gap-1.5 ui-mb-1.5 last:ui-mb-0",
      key: "ui-bg-white/10 hover:ui-bg-white/20 ui-text-white ui-rounded-md ui-font-medium ui-transition-all ui-duration-150 ui-flex ui-items-center ui-justify-center ui-min-h-[40px] ui-border ui-border-white/10",
      keyFocused: "ui-bg-white/30 ui-scale-105 ui-border-white/40",
      keyPressed: "ui-bg-white/40 ui-scale-95",
      keyDisabled:
        "ui-bg-white/5 ui-text-gray-500 ui-cursor-not-allowed ui-opacity-40",
    },
    modern: {
      container:
        "ui-bg-gradient-to-br ui-from-gray-900 ui-via-gray-800 ui-to-gray-900 ui-rounded-3xl ui-p-8 ui-shadow-2xl ui-border-2 ui-border-gray-700",
      preview:
        "ui-bg-gradient-to-r ui-from-gray-800 ui-to-gray-700 ui-text-white ui-text-3xl ui-px-6 ui-py-5 ui-rounded-2xl ui-mb-6 ui-min-h-[70px] ui-flex ui-items-center ui-border-2 ui-border-gray-600 ui-shadow-inner",
      rowGap: "ui-gap-3 ui-mb-3 last:ui-mb-0",
      key: "ui-bg-gradient-to-br ui-from-gray-700 ui-to-gray-800 hover:ui-from-gray-600 hover:ui-to-gray-700 ui-text-white ui-rounded-xl ui-font-bold ui-transition-all ui-duration-200 ui-flex ui-items-center ui-justify-center ui-min-h-[56px] ui-border-2 ui-border-gray-600 ui-shadow-lg",
      keyFocused:
        "ui-from-blue-600 ui-to-blue-700 ui-scale-110 ui-shadow-2xl ui-shadow-blue-500/50 ui-border-blue-400 ui-ring-4 ui-ring-blue-500/30",
      keyPressed: "ui-from-blue-700 ui-to-blue-800 ui-scale-100",
      keyDisabled:
        "ui-from-gray-800 ui-to-gray-900 ui-text-gray-600 ui-cursor-not-allowed ui-opacity-50",
    },
    glassmorphic: {
      container:
        "ui-bg-white/10 ui-backdrop-blur-xl ui-rounded-3xl ui-p-8 ui-shadow-2xl ui-border ui-border-white/20",
      preview:
        "ui-bg-white/10 ui-backdrop-blur-md ui-text-white ui-text-3xl ui-px-6 ui-py-5 ui-rounded-2xl ui-mb-6 ui-min-h-[70px] ui-flex ui-items-center ui-border ui-border-white/30 ui-shadow-lg",
      rowGap: "ui-gap-3 ui-mb-3 last:ui-mb-0",
      key: "ui-bg-white/10 ui-backdrop-blur-md hover:ui-bg-white/20 ui-text-white ui-rounded-xl ui-font-semibold ui-transition-all ui-duration-200 ui-flex ui-items-center ui-justify-center ui-min-h-[56px] ui-border ui-border-white/20 ui-shadow-lg",
      keyFocused:
        "ui-bg-white/30 ui-scale-110 ui-shadow-2xl ui-shadow-white/30 ui-border-white/50 ui-ring-4 ui-ring-white/20",
      keyPressed: "ui-bg-white/40 ui-scale-100",
      keyDisabled:
        "ui-bg-white/5 ui-text-gray-400 ui-cursor-not-allowed ui-opacity-40",
    },
    neon: {
      container:
        "ui-bg-black ui-rounded-3xl ui-p-8 ui-shadow-2xl ui-border-2 ui-border-cyan-500/50 ui-shadow-cyan-500/20",
      preview:
        "ui-bg-gray-900 ui-text-cyan-400 ui-text-3xl ui-px-6 ui-py-5 ui-rounded-2xl ui-mb-6 ui-min-h-[70px] ui-flex ui-items-center ui-border-2 ui-border-cyan-500/50 ui-shadow-lg ui-shadow-cyan-500/30",
      rowGap: "ui-gap-3 ui-mb-3 last:ui-mb-0",
      key: "ui-bg-gray-900 hover:ui-bg-gray-800 ui-text-cyan-400 ui-rounded-xl ui-font-bold ui-transition-all ui-duration-200 ui-flex ui-items-center ui-justify-center ui-min-h-[56px] ui-border-2 ui-border-cyan-500/30 ui-shadow-lg ui-shadow-cyan-500/20",
      keyFocused:
        "ui-bg-cyan-500/20 ui-scale-110 ui-border-cyan-400 ui-shadow-2xl ui-shadow-cyan-500/50 ui-ring-4 ui-ring-cyan-500/30 ui-text-cyan-300",
      keyPressed: "ui-bg-cyan-500/30 ui-scale-100 ui-shadow-cyan-500/60",
      keyDisabled:
        "ui-bg-gray-900 ui-text-gray-600 ui-cursor-not-allowed ui-opacity-50 ui-border-gray-700",
    },
  };

  return themes[theme] || themes.default;
};

// Size configurations
export const getKeySizeClasses = (size: "sm" | "md" | "lg") => {
  const sizes = {
    sm: {
      text: "ui-text-sm",
      padding: "ui-px-2 ui-py-1",
      minHeight: "ui-min-h-[36px]",
    },
    md: {
      text: "ui-text-base",
      padding: "ui-px-3 ui-py-2",
      minHeight: "ui-min-h-[48px]",
    },
    lg: {
      text: "ui-text-lg",
      padding: "ui-px-4 ui-py-3",
      minHeight: "ui-min-h-[56px]",
    },
  };

  return sizes[size] || sizes.md;
};
