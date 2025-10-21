import {
  PlayerControllerLayout,
  PlayerLayoutStyle,
} from "./PlayerControllerTypes";

// YouTube-style layout (similar to your current PlayerControls)
export const youtubeLayout: PlayerControllerLayout = {
  name: "YouTube Style",
  description: "YouTube-like player controls with bottom progress bar",
  showOnHover: true,
  autoHide: true,
  autoHideDelay: 4000,
  background:
    "player-bg-gradient-to-t player-from-black/90 player-via-black/60 player-to-transparent",
  padding: "player-px-6 player-py-4",
  gap: "player-gap-3",
  buttons: [
    // Progress bar at top
    {
      action: "progressbar",
      position: "top",
      align: "center",
      className: "player-mb-4",
      showPreview: true,
      stepTime: 10,
    },

    // Left controls
    {
      action: "playpause",
      position: "bottom",
      align: "left",
      size: "lg",
      order: 1,
    },
    {
      action: "previous",
      position: "bottom",
      align: "left",
      size: "md",
      order: 2,
    },
    {
      action: "next",
      position: "bottom",
      align: "left",
      size: "md",
      order: 3,
    },
    {
      action: "mutetoggle",
      position: "bottom",
      align: "left",
      size: "md",
      order: 4,
    },
    {
      action: "time",
      position: "bottom",
      align: "left",
      order: 5,
    },

    // Right controls
    {
      action: "playlisttoggle",
      position: "bottom",
      align: "right",
      size: "md",
      order: 1,
    },
    {
      action: "quality",
      position: "bottom",
      align: "right",
      size: "md",
      order: 2,
    },
    {
      action: "subtitles",
      position: "bottom",
      align: "right",
      size: "md",
      order: 3,
    },
    {
      action: "audio",
      position: "bottom",
      align: "right",
      size: "md",
      order: 4,
    },
    {
      action: "piptoggle",
      position: "bottom",
      align: "right",
      size: "md",
      order: 5,
    },
    {
      action: "fullscreentoggle",
      position: "bottom",
      align: "right",
      size: "md",
      order: 6,
    },
  ],
};

// Netflix-style layout
export const netflixLayout: PlayerControllerLayout = {
  name: "Netflix Style",
  description: "Netflix-like player controls with centered play button",
  showOnHover: true,
  autoHide: true,
  autoHideDelay: 5000,
  background: "player-bg-black/70",
  padding: "player-p-8",
  gap: "player-gap-4",
  buttons: [
    // Title at top
    {
      action: "title",
      position: "top",
      align: "left",
      showTitle: true,
      showSubtitle: true,
    },

    // Center play button
    {
      action: "playpause",
      position: "center",
      align: "center",
      size: "xl",
      className: "player-rounded-full player-bg-white/20",
    },

    // Bottom controls
    {
      action: "progressbar",
      position: "bottom",
      align: "center",
      className: "player-mb-4",
    },
    {
      action: "playpause",
      position: "bottom",
      align: "left",
      size: "md",
      order: 1,
    },
    {
      action: "next",
      position: "bottom",
      align: "left",
      size: "md",
      order: 2,
    },
    {
      action: "mutetoggle",
      position: "bottom",
      align: "left",
      size: "md",
      order: 3,
    },
    {
      action: "time",
      position: "bottom",
      align: "left",
      order: 4,
    },
    {
      action: "like",
      position: "bottom",
      align: "right",
      size: "md",
      order: 1,
    },
    {
      action: "subtitles",
      position: "bottom",
      align: "right",
      size: "md",
      order: 2,
    },
    {
      action: "fullscreentoggle",
      position: "bottom",
      align: "right",
      size: "md",
      order: 3,
    },
  ],
};

// TV Remote style layout (similar to your STV example)
export const tvRemoteLayout: PlayerControllerLayout = {
  name: "Smart TV Remote Style",
  description: "TV remote-like controls optimized for D-pad navigation",
  showOnHover: false,
  autoHide: true,
  autoHideDelay: 6000,
  background: "player-bg-black/80",
  padding: "player-p-8",
  gap: "player-gap-6",
  buttons: [
    // Top row
    {
      action: "custom",
      position: "top",
      align: "left",
      label: "Back",
      customAction: "back",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
    },
    {
      action: "settings",
      position: "top",
      align: "right",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
    },

    // Bottom controls
    {
      action: "custom",
      position: "bottom",
      align: "left",
      label: "Loop",
      customAction: "loop",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
      order: 1,
    },
    {
      action: "playpause",
      position: "bottom",
      align: "left",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
      order: 2,
    },
    {
      action: "like",
      position: "bottom",
      align: "left",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
      order: 3,
    },
    {
      action: "info",
      position: "bottom",
      align: "left",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
      popup: true,
      order: 4,
    },

    // Center controls
    {
      action: "previous",
      position: "bottom",
      align: "center",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
      order: 1,
    },
    {
      action: "playpause",
      position: "bottom",
      align: "center",
      size: "lg",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
      order: 2,
    },
    {
      action: "next",
      position: "bottom",
      align: "center",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
      order: 3,
    },

    // Right controls
    {
      action: "mutetoggle",
      position: "bottom",
      align: "right",
      className: "player-bg-gray-100/15 player-rounded-full",
      selectedClass: "player-bg-primary/100",
    },

    // Progress bar
    {
      action: "progressbar",
      position: "bottom",
      align: "bottom",
      className: "player-bg-primary/100 player-border-2",
      progressSelectedClass: "player-bg-primary/100",
    },

    // Title
    {
      action: "title",
      position: "bottom",
      align: "top",
      showTitle: true,
      showSubtitle: true,
    },
  ],
};

// Minimal layout
export const minimalLayout: PlayerControllerLayout = {
  name: "Minimal",
  description: "Minimal controls with just essential buttons",
  showOnHover: true,
  autoHide: true,
  autoHideDelay: 3000,
  background: "player-bg-black/50",
  padding: "player-p-4",
  gap: "player-gap-2",
  buttons: [
    {
      action: "playpause",
      position: "center",
      align: "center",
      size: "xl",
      className: "player-rounded-full player-bg-white/20",
    },
    {
      action: "progressbar",
      position: "bottom",
      align: "center",
    },
  ],
};

// Mobile layout
export const mobileLayout: PlayerControllerLayout = {
  name: "Mobile",
  description: "Mobile-optimized layout with touch-friendly controls",
  showOnHover: false,
  autoHide: true,
  autoHideDelay: 4000,
  background:
    "player-bg-gradient-to-t player-from-black/80 player-to-transparent",
  padding: "player-p-4",
  gap: "player-gap-4",
  buttons: [
    // Center play button
    {
      action: "playpause",
      position: "center",
      align: "center",
      size: "xl",
    },

    // Bottom row
    {
      action: "progressbar",
      position: "bottom",
      align: "top",
      className: "player-mb-2",
    },
    {
      action: "time",
      position: "bottom",
      align: "left",
    },
    {
      action: "fullscreentoggle",
      position: "bottom",
      align: "right",
      size: "lg",
    },
  ],
};

// Layout registry
export const predefinedLayouts: Record<
  PlayerLayoutStyle,
  PlayerControllerLayout
> = {
  youtube: youtubeLayout,
  netflix: netflixLayout,
  "tv-remote": tvRemoteLayout,
  minimal: minimalLayout,
  mobile: mobileLayout,
  custom: {
    name: "Custom",
    description: "Custom layout configuration",
    buttons: [],
  },
};

// Helper function to get layout by style
export const getLayoutByStyle = (
  style: PlayerLayoutStyle
): PlayerControllerLayout => {
  return predefinedLayouts[style] || predefinedLayouts.custom;
};

// Helper function to merge custom buttons with layout
export const mergeLayoutWithCustomButtons = (
  layout: PlayerControllerLayout,
  customButtons: any[]
): PlayerControllerLayout => {
  return {
    ...layout,
    buttons: [...layout.buttons, ...customButtons],
  };
};
