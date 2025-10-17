// Core components
export { default as PlayerController } from "./components/PlayerController";
export { VideoPlayer } from "./components/VideoPlayer";

// Control components
export { Fullscreen } from "./components/Fullscreen";
export { PictureInPicture } from "./components/PictureInPicture";
export { PlayButton } from "./components/PlayButton";
export { SeekBar } from "./components/SeekBar";
export { default as SettingsPanel } from "./components/SettingsPanel";
export { VolumeControl } from "./components/VolumeControl";

// Track components
export { AudioTrack } from "./components/AudioTrack";
export { SpeedSelector } from "./components/SpeedSelector";
export { TextTrack } from "./components/TextTrack";
export { TrackSelector } from "./components/TrackSelector";
export { VideoTrack } from "./components/VideoTrack";

// Playlist components
export { AutoPlayCountdown } from "./components/AutoPlayCountdown";
export { Playlist } from "./components/Playlist";
export { PlaylistButton } from "./components/PlaylistButton";
export { PlaylistItem } from "./components/PlaylistItem";
export { PlaylistManager } from "./components/PlaylistManager";
export { PlaylistRail } from "./components/PlaylistRail";

// Hooks and context
export {
    MediaProvider,
    useMediaContext,
    usePlayer,
    usePlayerActions,
    usePlayerDisplay,
    usePlayerPlayback,
    usePlayerState,
    usePlayerTime,
    usePlayerVolume,
    useTracks
} from "./hooks/MediaContext";

// Playlist hooks and context
export {
    PlaylistProvider,
    usePlaylist,
    usePlaylistActions,
    usePlaylistHelpers,
    usePlaylistState
} from "./hooks/PlaylistContext";

// Optimized hooks to prevent unnecessary re-renders
export {
    useAudioTracks,
    useBuffered,
    useCurrentTime,
    useDuration,
    useFullscreen,
    useLoading,
    useMuted,
    usePaused,
    usePictureInPicture,
    usePlaybackState,
    usePlayerActionsOnly,
    usePlayerControls,
    usePlayerInstance,
    useTextTracks,
    useTimeProgress,
    useVideoTracks,
    useVolume,
    useVolumeState
} from "./hooks/useOptimizedHooks";

// Types
export type {
    AudioTrack as AudioTrackType,
    DrmConfig,
    MediaPlayerInstance,
    MediaPlayerProps,
    PlayButtonProps,
    PlayerControlsProps,
    PlayerEvent,
    PlayerEventType,
    PlayerSource,
    PlayerState,
    PlaylistCallbacks,
    PlaylistConfig,
    PlaylistItem as PlaylistItemType,
    PlaylistRail as PlaylistRailType,
    PlaylistState,
    SeekBarProps,
    TextTrack as TextTrackType,
    TrackSelectorProps,
    VideoTrack as VideoTrackType,
    VolumeControlProps
} from "./types";

// Player Controller types
export {
    buttonSizeMap,
    defaultButtonConfigs
} from "./types/PlayerControllerTypes";
export type {
    PlayerButtonAction,
    PlayerButtonConfig,
    PlayerControllerLayout,
    PlayerControllerProps,
    PlayerLayoutStyle
} from "./types/PlayerControllerTypes";

// Predefined layouts
export {
    getLayoutByStyle,
    mergeLayoutWithCustomButtons,
    minimalLayout,
    mobileLayout,
    netflixLayout,
    predefinedLayouts,
    tvRemoteLayout,
    youtubeLayout
} from "./types/PlayerLayouts";

// Utilities
export {
    clamp,
    cn,
    debounce,
    formatTime,
    getDisplayLanguage,
    throttle
} from "./utils";

