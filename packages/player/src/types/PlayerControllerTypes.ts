import { CSSProperties, ReactNode } from "react";

// Action types for player buttons
export type PlayerButtonAction =
  | "play"
  | "pause"
  | "playpause"
  | "stop"
  | "mute"
  | "unmute"
  | "mutetoggle"
  | "fullscreen"
  | "exitfullscreen"
  | "fullscreentoggle"
  | "pip"
  | "exitpip"
  | "piptoggle"
  | "seek"
  | "seekbar"
  | "progressbar"
  | "volume"
  | "volumebar"
  | "previous"
  | "next"
  | "rewind"
  | "forward"
  | "playlist"
  | "playlisttoggle"
  | "settings"
  | "quality"
  | "subtitles"
  | "audio"
  | "playbackrate"
  | "title"
  | "time"
  | "duration"
  | "live"
  | "info"
  | "like"
  | "share"
  | "download"
  | "custom";

// Position and alignment types
export type PlayerButtonPosition = "top" | "center" | "bottom";
export type PlayerButtonAlign = "left" | "center" | "right" | "top" | "bottom";

// Size variants
export type PlayerButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

// Base button configuration interface
interface BasePlayerButtonConfig {
  position: PlayerButtonPosition;
  align: PlayerButtonAlign;
  label?: string;
  icon?: ReactNode | (() => ReactNode);
  size?: PlayerButtonSize;
  disabled?: boolean;
  className?: string;
  selectedClass?: string;
  style?: CSSProperties;
  focusKey?: string;
  onPress?: (event?: any) => void;
  onRelease?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  popup?: boolean;
  content?: ReactNode;
  tooltip?: string;
  visible?: boolean;
  order?: number;
}

// Specific button type configurations
interface PlayButtonConfig extends BasePlayerButtonConfig {
  action: "play" | "pause" | "playpause" | "stop";
  playIcon?: ReactNode;
  pauseIcon?: ReactNode;
  stopIcon?: ReactNode;
}

interface VolumeButtonConfig extends BasePlayerButtonConfig {
  action: "mute" | "unmute" | "mutetoggle" | "volume" | "volumebar";
  showSlider?: boolean;
  muteIcon?: ReactNode;
  volumeIcon?: ReactNode;
  volumeLowIcon?: ReactNode;
  volumeHighIcon?: ReactNode;
}

interface SeekButtonConfig extends BasePlayerButtonConfig {
  action: "seek" | "seekbar" | "progressbar" | "rewind" | "forward";
  stepTime?: number;
  showPreview?: boolean;
  showThumbnails?: boolean;
  thumbnailSrc?: string;
  progressClassName?: string;
  progressSelectedClass?: string;
  timerStyle?:
    | "leftRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
}

interface FullscreenButtonConfig extends BasePlayerButtonConfig {
  action: "fullscreen" | "exitfullscreen" | "fullscreentoggle";
  fullscreenIcon?: ReactNode;
  exitFullscreenIcon?: ReactNode;
}

interface PipButtonConfig extends BasePlayerButtonConfig {
  action: "pip" | "exitpip" | "piptoggle";
  pipIcon?: ReactNode;
  exitPipIcon?: ReactNode;
}

interface PlaylistButtonConfig extends BasePlayerButtonConfig {
  action: "playlist" | "playlisttoggle";
  playlistIcon?: ReactNode;
  showItemCount?: boolean;
}

interface TrackButtonConfig extends BasePlayerButtonConfig {
  action: "quality" | "subtitles" | "audio" | "playbackrate";
  trackType?: "video" | "audio" | "text" | "playbackRate";
  qualityIcon?: ReactNode;
  subtitlesIcon?: ReactNode;
  audioIcon?: ReactNode;
  speedIcon?: ReactNode;
}

interface NavigationButtonConfig extends BasePlayerButtonConfig {
  action: "previous" | "next";
  previousIcon?: ReactNode;
  nextIcon?: ReactNode;
}

interface InfoButtonConfig extends BasePlayerButtonConfig {
  action: "title" | "time" | "duration" | "live" | "info";
  showTitle?: boolean;
  showSubtitle?: boolean;
  showCurrentTime?: boolean;
  showDuration?: boolean;
  showRemaining?: boolean;
  timeFormat?: "12h" | "24h" | "short";
  liveIndicator?: ReactNode;
}

interface CustomButtonConfig extends BasePlayerButtonConfig {
  action: "custom" | "like" | "share" | "download";
  customAction?: string;
  customHandler?: (config: CustomButtonConfig, ...args: any[]) => void;
}

interface SettingsButtonConfig extends BasePlayerButtonConfig {
  action: "settings";
  settingsIcon?: ReactNode;
  showPanel?: boolean;
}

// Union type for all button configurations
export type PlayerButtonConfig =
  | PlayButtonConfig
  | VolumeButtonConfig
  | SeekButtonConfig
  | FullscreenButtonConfig
  | PipButtonConfig
  | PlaylistButtonConfig
  | TrackButtonConfig
  | NavigationButtonConfig
  | InfoButtonConfig
  | CustomButtonConfig
  | SettingsButtonConfig;

// Player controller layout configuration
export interface PlayerControllerLayout {
  name: string;
  description?: string;
  buttons: PlayerButtonConfig[];
  showOnHover?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
  background?: string;
  backgroundOpacity?: number;
  gradient?: string;
  padding?: string;
  gap?: string;
  className?: string;
  style?: CSSProperties;
}

// Predefined layout styles
export type PlayerLayoutStyle =
  | "youtube"
  | "netflix"
  | "minimal"
  | "tv-remote"
  | "mobile"
  | "custom";

// Player controller props
export interface PlayerControllerProps {
  layout?: PlayerControllerLayout;
  layoutStyle?: PlayerLayoutStyle;
  customButtons?: PlayerButtonConfig[];
  className?: string;
  style?: CSSProperties;
  focusKey?: string;
  children?: ReactNode;

  // Callbacks
  onButtonPress?: (
    action: PlayerButtonAction,
    config: PlayerButtonConfig
  ) => void;
  onLayoutChange?: (layout: PlayerControllerLayout) => void;

  // Player context
  title?: string;
  subtitle?: string;

  // Playlist integration
  playlist?: {
    state: any; // PlaylistState
    config?: any; // PlaylistConfig
    callbacks?: any; // PlaylistCallbacks
  };

  // Settings
  showPlaylist?: boolean;
  showTrackSelector?: boolean;
  trackSelectorType?: "audio" | "video" | "text" | "playbackRate";
}

// Button size mappings
export const buttonSizeMap: Record<PlayerButtonSize, string> = {
  xs: "player-w-6 player-h-6 player-text-xs",
  sm: "player-w-8 player-h-8 player-text-sm",
  md: "player-w-10 player-h-10 player-text-base",
  lg: "player-w-12 player-h-12 player-text-lg",
  xl: "player-w-16 player-h-16 player-text-xl",
};

// Default button configurations
export const defaultButtonConfigs: Record<
  PlayerButtonAction,
  Partial<PlayerButtonConfig>
> = {
  play: { size: "lg", className: "player-rounded-full" },
  pause: { size: "lg", className: "player-rounded-full" },
  playpause: { size: "lg", className: "player-rounded-full" },
  stop: { size: "md", className: "player-rounded-full" },
  mute: { size: "md", className: "player-rounded-full" },
  unmute: { size: "md", className: "player-rounded-full" },
  mutetoggle: { size: "md", className: "player-rounded-full" },
  fullscreen: { size: "md", className: "player-rounded-full" },
  exitfullscreen: { size: "md", className: "player-rounded-full" },
  fullscreentoggle: { size: "md", className: "player-rounded-full" },
  pip: { size: "md", className: "player-rounded-full" },
  exitpip: { size: "md", className: "player-rounded-full" },
  piptoggle: { size: "md", className: "player-rounded-full" },
  seek: { size: "md" },
  seekbar: { size: "sm" },
  progressbar: { size: "sm" },
  volume: { size: "md" },
  volumebar: { size: "sm" },
  previous: { size: "md", className: "player-rounded-full" },
  next: { size: "md", className: "player-rounded-full" },
  rewind: { size: "md", className: "player-rounded-full" },
  forward: { size: "md", className: "player-rounded-full" },
  playlist: { size: "md", className: "player-rounded-full" },
  playlisttoggle: { size: "md", className: "player-rounded-full" },
  settings: { size: "md", className: "player-rounded-full" },
  quality: { size: "md", className: "player-rounded-full" },
  subtitles: { size: "md", className: "player-rounded-full" },
  audio: { size: "md", className: "player-rounded-full" },
  playbackrate: { size: "md", className: "player-rounded-full" },
  title: { size: "md" },
  time: { size: "sm" },
  duration: { size: "sm" },
  live: { size: "sm" },
  info: { size: "md", className: "player-rounded-full" },
  like: { size: "md", className: "player-rounded-full" },
  share: { size: "md", className: "player-rounded-full" },
  download: { size: "md", className: "player-rounded-full" },
  custom: { size: "md", className: "player-rounded-full" },
};
