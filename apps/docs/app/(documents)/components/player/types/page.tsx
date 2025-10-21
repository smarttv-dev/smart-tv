import { CodePreview } from "@/components";

export default function PlayerTypes() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Types
        </h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Complete TypeScript type definitions and interfaces for the Smart TV
          Player package. Use these types to ensure type safety in your
          applications.
        </p>
      </div>

      {/* Core Player Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Core Player Types
        </h2>

        {/* PlayerState */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlayerState
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Complete state interface representing the current player state.
          </p>

          <CodePreview
            code={`interface PlayerState {
  // Playback state
  currentTime: number;           // Current playback time in seconds
  duration: number;              // Total duration in seconds
  volume: number;                // Volume level (0-1)
  muted: boolean;                // Whether audio is muted
  paused: boolean;               // Whether playback is paused
  ended: boolean;                // Whether playback has ended
  loading: boolean;              // Whether content is loading
  error: Error | null;           // Current error, if any

  // Advanced state
  buffered: TimeRanges | null;   // Buffered time ranges
  playbackRate: number;          // Playback speed (0.5, 1.0, 1.5, etc.)
  seeking: boolean;              // Whether user is currently seeking
  waiting: boolean;              // Whether player is waiting for data

  // Display state
  fullscreen: boolean;           // Whether player is in fullscreen
  pictureInPicture: boolean;     // Whether PiP mode is active

  // Track information
  audioTracks: AudioTrack[];     // Available audio tracks
  videoTracks: VideoTrack[];     // Available video quality tracks
  textTracks: TextTrack[];       // Available subtitle/caption tracks
}`}
            language="ts"
          />
        </div>

        {/* MediaPlayerProps */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            MediaPlayerProps
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Props interface for the VideoPlayer component.
          </p>

          <CodePreview
            code={`interface MediaPlayerProps {
  // Required
  src?: string | PlayerSource[];    // Video source URL or array of sources

  // Media properties
  poster?: string;                  // Poster image URL
  autoPlay?: boolean;               // Auto-start playback
  loop?: boolean;                   // Loop playback
  muted?: boolean;                  // Start muted
  controls?: boolean;               // Show native browser controls
  volume?: number;                  // Initial volume (0-1)
  playbackRate?: number;            // Initial playback speed
  preload?: 'none' | 'metadata' | 'auto';  // Preload strategy

  // Styling
  className?: string;               // CSS classes
  style?: React.CSSProperties;      // Inline styles

  // Cross-origin
  crossOrigin?: 'anonymous' | 'use-credentials';

  // DRM
  drm?: DrmConfig;                  // DRM configuration

  // Event handlers
  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: Error) => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onVolumeChange?: (volume: number, muted: boolean) => void;
  onFullscreenChange?: (fullscreen: boolean) => void;
  onPictureInPictureChange?: (pip: boolean) => void;
  // ... and many more event handlers
}`}
            language="ts"
          />
        </div>

        {/* MediaPlayerInstance */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            MediaPlayerInstance
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Interface for the player instance providing programmatic control
            methods.
          </p>

          <CodePreview
            code={`interface MediaPlayerInstance {
  // Playback control
  play(): Promise<void>;
  pause(): void;
  seek(time: number): void;

  // Volume control
  setVolume(volume: number): void;
  setMuted(muted: boolean): void;

  // Playback rate
  setPlaybackRate(rate: number): void;

  // Fullscreen & PiP
  enterFullscreen(): Promise<void>;
  exitFullscreen(): Promise<void>;
  enterPictureInPicture(): Promise<void>;
  exitPictureInPicture(): Promise<void>;

  // State getters
  getCurrentTime(): number;
  getDuration(): number;
  getVolume(): number;
  isMuted(): boolean;
  isPaused(): boolean;
  isEnded(): boolean;
  isFullscreen(): boolean;
  isPictureInPicture(): boolean;
  getPlaybackRate(): number;

  // Track management
  getAudioTracks(): AudioTrack[];
  getVideoTracks(): VideoTrack[];
  getTextTracks(): TextTrack[];
  selectAudioTrack(trackId: string): void;
  selectVideoTrack(trackId: string): void;
  selectTextTrack(trackId: string): void;

  // Cleanup
  destroy(): void;
}`}
            language="ts"
          />
        </div>
      </div>

      {/* Track Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Track Types
        </h2>

        {/* AudioTrack */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            AudioTrack
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Audio track information for multi-language support.
          </p>

          <CodePreview
            code={`interface AudioTrack {
  id: string;              // Unique track identifier
  language: string;        // Language code (e.g., 'en', 'es', 'fr')
  label: string;           // Human-readable label
  kind: string;            // Track kind
  roles?: string[];        // Track roles (e.g., ['main'], ['commentary'])
  active: boolean;         // Whether this track is currently selected
  bandwidth?: number;      // Bandwidth in bits per second
  codecs?: string;         // Audio codec information
}`}
            language="ts"
          />
        </div>

        {/* VideoTrack */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            VideoTrack
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Video track information for quality/resolution selection.
          </p>

          <CodePreview
            code={`interface VideoTrack {
  id: string;              // Unique track identifier
  language: string;        // Language code
  label: string;           // Quality label (e.g., '1080p', '720p')
  kind: string;            // Track kind
  bandwidth: number;       // Bandwidth in bits per second
  width: number;           // Video width in pixels
  height: number;          // Video height in pixels
  frameRate: number;       // Frame rate (e.g., 30, 60)
  codecs: string;          // Video codec information
  active: boolean;         // Whether this track is currently selected
}`}
            language="ts"
          />
        </div>

        {/* TextTrack */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            TextTrack
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Text track information for subtitles and captions.
          </p>

          <CodePreview
            code={`interface TextTrack {
  id: string;              // Unique track identifier
  language: string;        // Language code
  label: string;           // Human-readable label
  kind: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
  active: boolean;         // Whether this track is currently selected
  mode: 'disabled' | 'hidden' | 'showing';  // Track display mode
}`}
            language="ts"
          />
        </div>
      </div>

      {/* Player Controller Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Player Controller Types
        </h2>

        {/* PlayerControllerProps */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlayerControllerProps
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Props for the PlayerController component.
          </p>

          <CodePreview
            code={`interface PlayerControllerProps {
  // Layout configuration
  layoutStyle?: PlayerLayoutStyle;           // Predefined layout style
  layout?: PlayerControllerLayout;           // Custom layout configuration

  // Content information
  title?: string;                            // Video title
  subtitle?: string;                         // Video subtitle/description

  // Custom buttons
  customButtons?: PlayerButtonConfig[];      // Additional custom buttons

  // Behavior
  showOnHover?: boolean;                     // Show controls on hover
  autoHide?: boolean;                        // Auto-hide controls
  autoHideDelay?: number;                    // Delay before auto-hiding (ms)

  // Focus management
  initialFocus?: PlayerButtonAction;         // Which button to focus initially

  // Styling
  className?: string;
  style?: React.CSSProperties;

  // Event handlers
  onButtonPress?: (action: PlayerButtonAction, config: PlayerButtonConfig) => void;
  onFocusChange?: (focusedElement: string) => void;
}`}
            language="ts"
          />
        </div>

        {/* PlayerButtonConfig */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlayerButtonConfig
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Configuration for player buttons in custom layouts.
          </p>

          <CodePreview
            code={`interface PlayerButtonConfig {
  // Button identity
  action: PlayerButtonAction;                // Button action type

  // Positioning
  position: 'top' | 'center' | 'bottom';     // Vertical position
  align: 'left' | 'center' | 'right';        // Horizontal alignment
  order?: number;                            // Order within position/align group

  // Content
  label?: string;                            // Button label
  icon?: ReactNode;                          // Custom icon component

  // Behavior
  onPress?: () => void;                      // Custom action handler
  disabled?: boolean;                        // Whether button is disabled

  // Visual
  size?: 'sm' | 'md' | 'lg' | 'xl';         // Button size
  className?: string;                        // CSS classes
  selectedClass?: string;                    // Classes for selected state

  // Focus management
  focusKey?: string;                         // Unique focus identifier

  // Popup content (for info buttons)
  popup?: boolean;                           // Whether button shows popup
  content?: ReactNode;                       // Popup content

  // Specific configurations
  stepTime?: number;                         // Step time for seek buttons
  showTitle?: boolean;                       // Show title (for title action)
  showSubtitle?: boolean;                    // Show subtitle (for title action)
  progressSelectedClass?: string;            // Progress bar styling
}`}
            language="ts"
          />
        </div>

        {/* PlayerButtonAction */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlayerButtonAction
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Available button actions for player controls.
          </p>

          <CodePreview
            code={`type PlayerButtonAction =
  // Playback controls
  | 'playpause'          // Play/pause toggle
  | 'play'               // Play button
  | 'pause'              // Pause button
  | 'stop'               // Stop playback
  | 'rewind'             // Rewind by stepTime
  | 'forward'            // Fast forward by stepTime
  | 'previous'           // Previous track/chapter
  | 'next'               // Next track/chapter

  // Time controls
  | 'progressbar'        // Seek bar/progress bar
  | 'time'               // Time display

  // Audio controls
  | 'mutetoggle'         // Mute/unmute toggle
  | 'volumeup'           // Increase volume
  | 'volumedown'         // Decrease volume
  | 'volumeslider'       // Volume slider

  // Display controls
  | 'fullscreentoggle'   // Fullscreen toggle
  | 'pictureInPicture'   // Picture-in-picture toggle

  // Track selection
  | 'subtitles'          // Subtitle/caption selector
  | 'audio'              // Audio track selector
  | 'quality'            // Video quality selector
  | 'speed'              // Playback speed selector

  // Settings and info
  | 'settings'           // Settings panel
  | 'title'              // Title/info display
  | 'info'               // Information button

  // Playlist
  | 'playlist'           // Playlist toggle
  | 'shuffle'            // Shuffle toggle
  | 'repeat'             // Repeat toggle

  // Custom
  | 'custom';            // Custom button action`}
            language="ts"
          />
        </div>

        {/* PlayerLayoutStyle */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlayerLayoutStyle
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Predefined layout styles for quick setup.
          </p>

          <CodePreview
            code={`type PlayerLayoutStyle =
  | 'youtube'            // YouTube-style controls
  | 'netflix'            // Netflix-style interface
  | 'minimal'            // Minimal controls only
  | 'tv-remote'          // TV remote optimized
  | 'mobile';            // Mobile-optimized layout

// Usage example
const layoutStyle: PlayerLayoutStyle = 'youtube';`}
            language="ts"
          />
        </div>
      </div>

      {/* DRM Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          DRM Types
        </h2>

        {/* DrmConfig */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            DrmConfig
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            DRM configuration for protected content playback.
          </p>

          <CodePreview
            code={`interface DrmConfig {
  // License servers
  servers: Record<string, string>;          // DRM system to license server URL mapping

  // Advanced configuration
  advanced?: Record<string, any>;           // Advanced DRM configuration per system

  // Clear keys (for testing)
  clearKeys?: Record<string, string>;       // Key ID to key mapping for clear key DRM
}

// Example usage
const drmConfig: DrmConfig = {
  servers: {
    'com.widevine.alpha': 'https://widevine-proxy.appspot.com/proxy',
    'com.microsoft.playready': 'https://playready-license-server.com/',
    'com.apple.fps.1_0': 'https://fps-license-server.com/',
  },
  advanced: {
    'com.widevine.alpha': {
      videoRobustness: 'SW_SECURE_CRYPTO',
      audioRobustness: 'SW_SECURE_CRYPTO',
    }
  },
  clearKeys: {
    '1234567890123456': 'abcdef1234567890abcdef1234567890',
  }
};`}
            language="ts"
          />
        </div>

        {/* PlayerSource */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlayerSource
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Source configuration with optional DRM settings.
          </p>

          <CodePreview
            code={`interface PlayerSource {
  src: string;             // Video source URL
  type?: string;           // MIME type (e.g., 'application/dash+xml')
  drm?: DrmConfig;         // DRM configuration for this source
}

// Usage example
const sources: PlayerSource[] = [
  {
    src: 'https://example.com/video.mpd',
    type: 'application/dash+xml',
    drm: {
      servers: {
        'com.widevine.alpha': 'https://license-server.com/widevine'
      }
    }
  },
  {
    src: 'https://example.com/video.m3u8',
    type: 'application/x-mpegURL'
  }
];`}
            language="ts"
          />
        </div>
      </div>

      {/* Playlist Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Playlist Types
        </h2>

        {/* PlaylistItem */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlaylistItem
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Configuration for individual playlist items.
          </p>

          <CodePreview
            code={`interface PlaylistItem {
  // Basic information
  id: string;                    // Unique identifier
  title: string;                 // Item title
  description?: string;          // Item description
  thumbnail?: string;            // Thumbnail image URL
  duration?: number;             // Duration in seconds
  url: string;                   // Video URL
  type?: 'video' | 'audio';      // Media type

  // State
  isActive?: boolean;            // Whether currently playing
  progress?: number;             // Watch progress (0-100)

  // Metadata
  metadata?: Record<string, any>; // Custom metadata

  // DRM and headers
  drm?: DrmConfig;               // Item-specific DRM config
  headers?: Record<string, string>; // Custom headers

  // Subtitles
  subtitles?: Array<{
    url: string;
    language: string;
    label: string;
    isDefault?: boolean;
  }>;

  // Quality levels
  qualities?: Array<{
    url: string;
    label: string;
    width?: number;
    height?: number;
    bandwidth?: number;
  }>;
}`}
            language="ts"
          />
        </div>

        {/* PlaylistState */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlaylistState
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Current state of the playlist system.
          </p>

          <CodePreview
            code={`interface PlaylistState {
  // Current playback
  currentItemId?: string;        // Currently playing item ID

  // Playlist organization
  rails: PlaylistRail[];         // Organized playlist rails
  isVisible: boolean;            // Whether playlist UI is visible
  expandedRails: string[];       // IDs of expanded rails
  activeRail?: string;           // Currently focused rail

  // Auto-play
  autoPlayEnabled?: boolean;     // Whether auto-play is enabled
  autoPlayCountdown?: number;    // Countdown timer in seconds
  nextItemId?: string;           // Next item to play
}

interface PlaylistRail {
  id: string;                    // Unique rail identifier
  title: string;                 // Rail title
  type: 'queue' | 'related' | 'recommendations' | 'history' | 'custom';
  items: PlaylistItem[];         // Items in this rail
  isCollapsible?: boolean;       // Whether rail can be collapsed
  isCollapsed?: boolean;         // Whether rail is collapsed
  maxVisible?: number;           // Max visible items
  priority?: number;             // Display order priority
}`}
            language="ts"
          />
        </div>

        {/* PlaylistConfig */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlaylistConfig
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Configuration options for playlist behavior.
          </p>

          <CodePreview
            code={`interface PlaylistConfig {
  // Display options
  showThumbnails?: boolean;      // Show item thumbnails
  showDuration?: boolean;        // Show item duration
  showProgress?: boolean;        // Show watch progress
  maxRailHeight?: number;        // Maximum rail height in pixels
  itemsPerRow?: number;          // Items per row in grid view

  // Playback behavior
  autoPlay?: boolean;            // Auto-play next item
  autoPlayDelay?: number;        // Delay before auto-play (seconds)
  autoPlayCountdown?: boolean;   // Show countdown timer
  loop?: boolean;                // Loop playlist
  shuffle?: boolean;             // Shuffle playback order
  saveHistory?: boolean;         // Save playback history

  // DRM and quality
  globalDrm?: DrmConfig;         // Global DRM for all items
  drmFallback?: boolean;         // Try without DRM if DRM fails
  preferredQuality?: 'auto' | 'highest' | 'lowest' | string;
  adaptiveStreaming?: boolean;   // Enable adaptive streaming

  // Preloading
  preloadNext?: boolean;         // Preload next item
  preloadCount?: number;         // Number of items to preload
}`}
            language="ts"
          />
        </div>
      </div>

      {/* Event Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Event Types
        </h2>

        {/* PlayerEventType */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            PlayerEventType
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            All available player events that can be listened to.
          </p>

          <CodePreview
            code={`type PlayerEventType =
  // Lifecycle events
  | 'ready'                      // Player is ready to use
  | 'loadstart'                  // Loading has started
  | 'loadeddata'                 // First frame is loaded
  | 'loadedmetadata'             // Metadata is loaded
  | 'canplay'                    // Can start playing
  | 'canplaythrough'             // Can play through without stopping

  // Playback events
  | 'play'                       // Playback started
  | 'pause'                      // Playback paused
  | 'ended'                      // Playback ended
  | 'waiting'                    // Waiting for data
  | 'seeking'                    // User started seeking
  | 'seeked'                     // Seeking completed

  // Progress events
  | 'timeupdate'                 // Current time changed
  | 'durationchange'             // Duration changed
  | 'progress'                   // Download progress changed

  // Audio/visual events
  | 'volumechange'               // Volume or mute state changed
  | 'playbackratechange'         // Playback rate changed
  | 'fullscreenchange'           // Fullscreen state changed
  | 'pictureinpicturechange'     // PiP state changed

  // Track events
  | 'trackschange'               // Available tracks changed

  // Error events
  | 'error';                     // An error occurred

// Event object interface
interface PlayerEvent {
  type: PlayerEventType;
  target: MediaPlayerInstance;
  data?: any;                    // Event-specific data
}`}
            language="ts"
          />
        </div>
      </div>

      {/* Component Props Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Component Props Types
        </h2>

        {/* Control Component Props */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Control Component Props
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Props for individual control components.
          </p>

          <CodePreview
            code={`// Play button props
interface PlayButtonProps {
  className?: string;
  style?: React.CSSProperties;
  focusKey?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
  showIcon?: boolean;
  playIcon?: ReactNode;
  pauseIcon?: ReactNode;
  onClick?: () => void;
}

// Seek bar props
interface SeekBarProps {
  className?: string;
  style?: React.CSSProperties;
  focusKey?: string;
  showPreview?: boolean;
  showThumbnails?: boolean;
  thumbnailSrc?: string;
  stepTime?: number;
  onSeek?: (time: number) => void;
  onSeekStart?: () => void;
  onSeekEnd?: () => void;
}

// Volume control props
interface VolumeControlProps {
  className?: string;
  style?: React.CSSProperties;
  focusKey?: string;
  orientation?: 'horizontal' | 'vertical';
  showMuteButton?: boolean;
  step?: number;
  onVolumeChange?: (volume: number) => void;
  onMuteToggle?: () => void;
}

// Track selector props
interface TrackSelectorProps {
  className?: string;
  style?: React.CSSProperties;
  focusKey?: string;
  type: 'audio' | 'video' | 'text';
  title?: string;
  onTrackSelect?: (trackId: string) => void;
  onClose?: () => void;
}`}
            language="ts"
          />
        </div>
      </div>

      {/* Utility Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Utility Types
        </h2>

        {/* Helper Types */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Helper Types
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Utility types for common patterns and type manipulation.
          </p>

          <CodePreview
            code={`// Size variants used throughout the library
type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';

// Position types for layout
type PositionType = 'top' | 'center' | 'bottom';
type AlignmentType = 'left' | 'center' | 'right';

// Common callback patterns
type EventCallback<T = void> = (event: T) => void;
type StateCallback<T> = (newState: T) => void;
type AsyncCallback<T = void> = (event: T) => Promise<void>;

// Focus management
interface FocusableElement {
  focusKey?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Styling helpers
interface StylableComponent {
  className?: string;
  style?: React.CSSProperties;
}

// Generic component props
type ComponentProps<T = {}> = T & FocusableElement & StylableComponent;

// Hook return types
type PlayerHookResult<T> = {
  data: T;
  loading: boolean;
  error: Error | null;
};

// Event handler types
type MediaEventHandler = (event: PlayerEvent) => void;
type PlaybackEventHandler = () => void;
type ErrorEventHandler = (error: Error) => void;
type TimeEventHandler = (currentTime: number, duration: number) => void;
type VolumeEventHandler = (volume: number, muted: boolean) => void;`}
            language="ts"
          />
        </div>
      </div>

      {/* Type Usage Examples */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Usage Examples
        </h2>

        {/* Custom Component Example */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Custom Component with Types
          </h3>

          <CodePreview
            code={`import React from 'react';
import {
  useMediaContext,
  PlayerState,
  MediaPlayerInstance,
  ComponentProps
} from '@smart-tv/player';

// Custom props interface extending base component props
interface CustomPlayerInfoProps extends ComponentProps {
  showProgress?: boolean;
  showTracks?: boolean;
  onStateChange?: (state: PlayerState) => void;
}

// Custom component with full type safety
function CustomPlayerInfo({
  showProgress = true,
  showTracks = false,
  onStateChange,
  className,
  style,
  focusKey,
}: CustomPlayerInfoProps) {
  const {
    currentTime,
    duration,
    volume,
    muted,
    paused,
    audioTracks,
    videoTracks,
    player,
  } = useMediaContext();

  // Type-safe player instance usage
  const handleCustomAction = (instance: MediaPlayerInstance) => {
    if (instance) {
      const currentState: PlayerState = {
        currentTime: instance.getCurrentTime(),
        duration: instance.getDuration(),
        volume: instance.getVolume(),
        muted: instance.isMuted(),
        paused: instance.isPaused(),
        // ... other state properties
      };

      onStateChange?.(currentState);
    }
  };

  return (
    <div
      className={className}
      style={style}
      data-focus-key={focusKey}
    >
      <h3>Player Information</h3>

      {showProgress && (
        <div>
          Progress: {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </div>
      )}

      <div>
        Volume: {Math.round(volume * 100)}% {muted && '(Muted)'}
      </div>

      <div>
        Status: {paused ? 'Paused' : 'Playing'}
      </div>

      {showTracks && (
        <div>
          <p>Audio Tracks: {audioTracks.length}</p>
          <p>Video Tracks: {videoTracks.length}</p>
        </div>
      )}

      <button onClick={() => handleCustomAction(player)}>
        Update State
      </button>
    </div>
  );
}

export default CustomPlayerInfo;`}
            language="tsx"
          />
        </div>

        {/* Custom Hook Example */}
        <div className="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
          <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Custom Hook with Types
          </h3>

          <CodePreview
            code={`import { useState, useEffect } from 'react';
import {
  useCurrentTime,
  useDuration,
  PlayerEventType,
  MediaPlayerInstance
} from '@smart-tv/player';

// Custom hook return type
interface PlayerAnalytics {
  watchTime: number;
  completionRate: number;
  averageVolume: number;
  playbackEvents: PlayerEventType[];
  isEngaged: boolean;
}

// Custom hook with full type safety
function usePlayerAnalytics(): PlayerAnalytics {
  const currentTime = useCurrentTime();
  const duration = useDuration();

  const [watchTime, setWatchTime] = useState<number>(0);
  const [events, setEvents] = useState<PlayerEventType[]>([]);
  const [volumeHistory, setVolumeHistory] = useState<number[]>([]);

  // Track watch time
  useEffect(() => {
    const interval = setInterval(() => {
      setWatchTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate metrics
  const completionRate = duration > 0 ? (currentTime / duration) * 100 : 0;
  const averageVolume = volumeHistory.length > 0
    ? volumeHistory.reduce((a, b) => a + b, 0) / volumeHistory.length
    : 0;
  const isEngaged = completionRate > 25 && watchTime > 30;

  return {
    watchTime,
    completionRate,
    averageVolume,
    playbackEvents: events,
    isEngaged,
  };
}

// Usage in component
function AnalyticsDisplay() {
  const analytics = usePlayerAnalytics();

  return (
    <div className="analytics-display">
      <h3>Player Analytics</h3>
      <p>Watch Time: {analytics.watchTime}s</p>
      <p>Completion: {analytics.completionRate.toFixed(1)}%</p>
      <p>Avg Volume: {(analytics.averageVolume * 100).toFixed(0)}%</p>
      <p>Engaged: {analytics.isEngaged ? 'Yes' : 'No'}</p>
      <p>Events: {analytics.playbackEvents.length}</p>
    </div>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      {/* TypeScript Tips */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          TypeScript Tips
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-900/20">
            <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-200">
              ✅ Best Practices
            </h3>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
              <li>• Always import types from the main package export</li>
              <li>• Use specific prop interfaces for custom components</li>
              <li>• Extend base interfaces when creating custom types</li>
              <li>• Use union types for configuration options</li>
              <li>• Leverage type guards for runtime type checking</li>
            </ul>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
            <h3 className="mb-2 font-semibold text-green-900 dark:text-green-200">
              💡 Pro Tips
            </h3>
            <ul className="space-y-1 text-sm text-green-800 dark:text-green-300">
              <li>• Use type assertions sparingly and safely</li>
              <li>• Prefer specific hook types over general context</li>
              <li>• Create custom types for complex configurations</li>
              <li>• Use generics for reusable component patterns</li>
              <li>• Document complex types with JSDoc comments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <a
            href="/components/player/hooks"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Hooks
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn how to use hooks with these types
            </p>
          </a>
          <a
            href="/components/player/examples"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Examples
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              See types in action with real examples
            </p>
          </a>
          <a
            href="/components/player/components"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Components
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Component APIs and their type requirements
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
