# @smart-tv/player

A comprehensive, production-ready video player built specifically for Smart TV applications. Powered by Shaka Player with built-in navigation, this player delivers a professional streaming experience optimized for remote control navigation.

## Features

- 🎥 **Shaka Player Integration** - Industry-leading adaptive streaming engine
- 🎯 **Navigation** - Built-in remote control and keyboard navigation
- 📱 **Responsive Design** - Adapts to TV, tablet, and mobile screens
- 🔐 **DRM Support** - Widevine, PlayReady, FairPlay for protected content
- 🌐 **Multi-format Support** - DASH, HLS, and progressive download
- 🎭 **Multiple Layouts** - Netflix, YouTube, TV Remote, Mobile, and custom layouts
- 📺 **Picture-in-Picture** - Modern multi-tasking viewing experience
- 🎨 **Fully Customizable** - Component-based architecture with Tailwind CSS
- 🔊 **Audio/Video Tracks** - Multiple audio languages and quality levels
- 📝 **Subtitles/Captions** - Full subtitle and closed caption support
- ⚡ **Optimized Performance** - Selective re-rendering and efficient state management
- 📋 **Playlist Support** - Queue, autoplay, and playlist management
- 🔄 **Playback Controls** - Speed control, seek, volume, and fullscreen
- 🎬 **Auto-play Countdown** - Netflix-style next episode countdown

## Installation

Install the package and its peer dependencies:

```bash
# npm
npm install @smart-tv/player

# pnpm
pnpm add @smart-tv/player

# yarn
yarn add @smart-tv/player
```

### Import Styles

Import the CSS file in your app:

```tsx
import '@smart-tv/player/styles.css'
```

## Quick Start

### Basic Player

```tsx
import { VideoPlayer, PlayerController, MediaProvider } from '@smart-tv/player'
import '@smart-tv/player/styles.css'

function App() {
  return (
    <MediaProvider>
      <div className="relative w-full h-screen bg-black">
        <VideoPlayer
          src="https://example.com/video.m3u8"
          poster="https://example.com/poster.jpg"
          autoPlay={false}
        />
        <PlayerController layout="netflix" />
      </div>
    </MediaProvider>
  )
}
```

### With Smart TV Navigation

```tsx
import { AppProvider } from '@smart-tv/ui'
import { VideoPlayer, PlayerController, MediaProvider } from '@smart-tv/player'
import '@smart-tv/ui/styles.css'
import '@smart-tv/player/styles.css'

function App() {
  return (
    <AppProvider init={{ debug: false, visualDebug: false }}>
      <MediaProvider>
        <div className="relative w-full h-screen bg-black">
          <VideoPlayer
            src="https://example.com/video.m3u8"
            onReady={() => console.log('Player ready')}
            onError={(error) => console.error('Error:', error)}
          />
          <PlayerController 
            layout="tv-remote"
            autoHide={true}
            autoHideDelay={3000}
          />
        </div>
      </MediaProvider>
    </AppProvider>
  )
}
```

## Core Concepts

### MediaProvider

The `MediaProvider` is the main context provider that manages player state. It must wrap all player components.

```tsx
import { MediaProvider } from '@smart-tv/player'

<MediaProvider>
  {/* Player components */}
</MediaProvider>
```

### VideoPlayer

The core video player component powered by Shaka Player:

```tsx
import { VideoPlayer } from '@smart-tv/player'

<VideoPlayer
  src="https://example.com/video.m3u8"
  poster="https://example.com/poster.jpg"
  autoPlay={false}
  loop={false}
  muted={false}
  volume={1.0}
  playbackRate={1.0}
  onReady={() => console.log('Ready')}
  onPlay={() => console.log('Playing')}
  onPause={() => console.log('Paused')}
  onError={(error) => console.error(error)}
/>
```

### PlayerController

A pre-configured control layout with multiple built-in styles:

```tsx
import { PlayerController } from '@smart-tv/player'

<PlayerController
  layout="netflix"        // 'netflix' | 'youtube' | 'tv-remote' | 'mobile' | 'minimal'
  autoHide={true}
  autoHideDelay={3000}
  showPlaylist={false}
/>
```

## Available Layouts

### Netflix Layout
```tsx
<PlayerController layout="netflix" />
```
- Full-featured controls
- Large play button
- Progress bar with thumbnails
- Track selection panel

### YouTube Layout
```tsx
<PlayerController layout="youtube" />
```
- Bottom control bar
- Integrated settings menu
- Theater and fullscreen modes

### TV Remote Layout
```tsx
<PlayerController layout="tv-remote" />
```
- Optimized for remote control navigation
- Large, focusable buttons
- Simplified interface

### Mobile Layout
```tsx
<PlayerController layout="mobile" />
```
- Touch-optimized controls
- Minimal UI
- Gesture support

### Minimal Layout
```tsx
<PlayerController layout="minimal" />
```
- Basic play/pause and seek
- Clean, minimal interface

## Components

### Control Components

#### PlayButton

```tsx
import { PlayButton } from '@smart-tv/player'

<PlayButton
  size="lg"                    // 'sm' | 'md' | 'lg'
  variant="default"            // 'default' | 'ghost' | 'outline'
  focusKey="play-btn"
  showIcon={true}
/>
```

#### SeekBar

```tsx
import { SeekBar } from '@smart-tv/player'

<SeekBar
  showPreview={true}
  showThumbnails={false}
  stepTime={10}                // Seek step in seconds
  focusKey="seek-bar"
/>
```

#### VolumeControl

```tsx
import { VolumeControl } from '@smart-tv/player'

<VolumeControl
  orientation="horizontal"     // 'horizontal' | 'vertical'
  showMuteButton={true}
  step={0.1}
  focusKey="volume"
/>
```

#### Fullscreen

```tsx
import { Fullscreen } from '@smart-tv/player'

<Fullscreen focusKey="fullscreen-btn" />
```

#### PictureInPicture

```tsx
import { PictureInPicture } from '@smart-tv/player'

<PictureInPicture focusKey="pip-btn" />
```

### Track Components

#### TrackSelector

Select audio, video quality, or subtitles:

```tsx
import { TrackSelector } from '@smart-tv/player'

<TrackSelector
  type="audio"                 // 'audio' | 'video' | 'text'
  title="Select Audio Track"
  onClose={() => setShowTracks(false)}
/>
```

#### AudioTrack

```tsx
import { AudioTrack } from '@smart-tv/player'

<AudioTrack focusKey="audio-tracks" />
```

#### VideoTrack (Quality Selector)

```tsx
import { VideoTrack } from '@smart-tv/player'

<VideoTrack focusKey="video-quality" />
```

#### TextTrack (Subtitles)

```tsx
import { TextTrack } from '@smart-tv/player'

<TextTrack focusKey="subtitles" />
```

#### SpeedSelector

```tsx
import { SpeedSelector } from '@smart-tv/player'

<SpeedSelector focusKey="speed" />
```

#### SettingsPanel

Complete settings overlay with all track options:

```tsx
import { SettingsPanel } from '@smart-tv/player'

<SettingsPanel
  isOpen={showSettings}
  onClose={() => setShowSettings(false)}
  focusKey="settings"
/>
```

### Playlist Components

#### PlaylistProvider

Context provider for playlist management:

```tsx
import { PlaylistProvider } from '@smart-tv/player'

<PlaylistProvider
  initialItems={playlistItems}
  config={{
    autoPlay: true,
    autoPlayDelay: 5,
    showThumbnails: true,
    loop: false,
  }}
  callbacks={{
    onItemPlay: (item) => console.log('Playing:', item.title),
    onItemEnd: (item) => console.log('Ended:', item.title),
  }}
>
  {/* Player components */}
</PlaylistProvider>
```

#### Playlist

Full playlist UI component:

```tsx
import { Playlist } from '@smart-tv/player'

<Playlist
  isOpen={showPlaylist}
  onClose={() => setShowPlaylist(false)}
  focusKey="playlist"
/>
```

#### PlaylistRail

Horizontal scrolling playlist rail:

```tsx
import { PlaylistRail } from '@smart-tv/player'

<PlaylistRail
  rail={{
    id: 'queue',
    title: 'Up Next',
    type: 'queue',
    items: queueItems,
  }}
  focusKey="playlist-rail"
/>
```

#### AutoPlayCountdown

Netflix-style countdown for next episode:

```tsx
import { AutoPlayCountdown } from '@smart-tv/player'

<AutoPlayCountdown
  nextItem={nextEpisode}
  countdown={5}
  onCancel={() => console.log('Cancelled')}
  onPlayNext={() => console.log('Playing next')}
/>
```

#### PlaylistButton

Button to toggle playlist visibility:

```tsx
import { PlaylistButton } from '@smart-tv/player'

<PlaylistButton
  onClick={() => setShowPlaylist(!showPlaylist)}
  focusKey="playlist-btn"
/>
```

## Hooks

### useMediaContext

Access the complete media context:

```tsx
import { useMediaContext } from '@smart-tv/player'

function CustomControl() {
  const { state, player, actions } = useMediaContext()
  
  return (
    <button onClick={actions.togglePlay}>
      {state.paused ? 'Play' : 'Pause'}
    </button>
  )
}
```

### Optimized Hooks

Use these hooks to prevent unnecessary re-renders:

#### usePlayerState

```tsx
import { usePlayerState } from '@smart-tv/player'

const { currentTime, duration, paused, volume } = usePlayerState()
```

#### usePaused

```tsx
import { usePaused } from '@smart-tv/player'

const paused = usePaused()
```

#### useCurrentTime

```tsx
import { useCurrentTime } from '@smart-tv/player'

const currentTime = useCurrentTime()
```

#### useDuration

```tsx
import { useDuration } from '@smart-tv/player'

const duration = useDuration()
```

#### useVolume

```tsx
import { useVolume } from '@smart-tv/player'

const { volume, muted } = useVolume()
```

#### usePlayerActions

```tsx
import { usePlayerActions } from '@smart-tv/player'

const { play, pause, seek, setVolume } = usePlayerActions()
```

#### useAudioTracks

```tsx
import { useAudioTracks } from '@smart-tv/player'

const audioTracks = useAudioTracks()
```

#### useVideoTracks

```tsx
import { useVideoTracks } from '@smart-tv/player'

const videoTracks = useVideoTracks()
```

#### useTextTracks

```tsx
import { useTextTracks } from '@smart-tv/player'

const textTracks = useTextTracks()
```

#### useFullscreen

```tsx
import { useFullscreen } from '@smart-tv/player'

const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen()
```

#### usePictureInPicture

```tsx
import { usePictureInPicture } from '@smart-tv/player'

const { isPip, enterPip, exitPip } = usePictureInPicture()
```

### Playlist Hooks

#### usePlaylist

```tsx
import { usePlaylist } from '@smart-tv/player'

const { state, actions, helpers } = usePlaylist()
```

#### usePlaylistState

```tsx
import { usePlaylistState } from '@smart-tv/player'

const { currentItemId, rails, isVisible } = usePlaylistState()
```

#### usePlaylistActions

```tsx
import { usePlaylistActions } from '@smart-tv/player'

const { playItem, playNext, playPrevious, togglePlaylist } = usePlaylistActions()
```

## Advanced Usage

### DRM Protected Content

```tsx
import { VideoPlayer, MediaProvider } from '@smart-tv/player'

const drmConfig = {
  src: 'https://example.com/protected-video.mpd',
  drm: {
    servers: {
      'com.widevine.alpha': 'https://license.example.com/widevine',
      'com.microsoft.playready': 'https://license.example.com/playready',
    },
    advanced: {
      'com.widevine.alpha': {
        videoRobustness: 'SW_SECURE_CRYPTO',
        audioRobustness: 'SW_SECURE_CRYPTO',
      },
    },
  },
}

function ProtectedVideo() {
  return (
    <MediaProvider>
      <VideoPlayer
        src={[drmConfig]}
        onError={(error) => console.error('DRM Error:', error)}
      />
    </MediaProvider>
  )
}
```

### Custom Controls Layout

```tsx
import {
  MediaProvider,
  VideoPlayer,
  PlayButton,
  SeekBar,
  VolumeControl,
  Fullscreen,
  SettingsPanel,
} from '@smart-tv/player'
import { useState } from 'react'

function CustomPlayer() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <MediaProvider>
      <div className="relative w-full h-screen bg-black">
        <VideoPlayer src="https://example.com/video.m3u8" />
        
        {/* Custom control layout */}
        <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent">
          <div className="w-full space-y-4">
            <SeekBar className="w-full" showPreview />
            
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <PlayButton size="lg" />
                <VolumeControl orientation="horizontal" />
              </div>
              
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-white/20 rounded hover:bg-white/30"
                  onClick={() => setShowSettings(true)}
                >
                  Settings
                </button>
                <Fullscreen />
              </div>
            </div>
          </div>
        </div>

        <SettingsPanel
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
        />
      </div>
    </MediaProvider>
  )
}
```

### Playlist with Auto-play

```tsx
import {
  MediaProvider,
  PlaylistProvider,
  VideoPlayer,
  PlayerController,
  Playlist,
  AutoPlayCountdown,
} from '@smart-tv/player'

const episodes = [
  {
    id: '1',
    title: 'Episode 1',
    url: 'https://example.com/ep1.m3u8',
    thumbnail: 'https://example.com/ep1.jpg',
    duration: 2400,
  },
  {
    id: '2',
    title: 'Episode 2',
    url: 'https://example.com/ep2.m3u8',
    thumbnail: 'https://example.com/ep2.jpg',
    duration: 2520,
  },
]

function SeriesPlayer() {
  return (
    <MediaProvider>
      <PlaylistProvider
        initialItems={episodes}
        config={{
          autoPlay: true,
          autoPlayDelay: 5,
          autoPlayCountdown: true,
        }}
        callbacks={{
          onItemEnd: (item) => console.log('Finished:', item.title),
          onAutoPlayStart: (nextItem, countdown) =>
            console.log(`Playing ${nextItem.title} in ${countdown}s`),
        }}
      >
        <div className="relative w-full h-screen bg-black">
          <VideoPlayer />
          <PlayerController layout="netflix" showPlaylist />
          <AutoPlayCountdown />
        </div>
      </PlaylistProvider>
    </MediaProvider>
  )
}
```

### Multiple Audio/Subtitle Tracks

```tsx
import { VideoPlayer, MediaProvider, useMediaContext } from '@smart-tv/player'
import { useEffect } from 'react'

function MultiTrackPlayer() {
  const { player, actions } = useMediaContext()

  useEffect(() => {
    if (player) {
      // Get available tracks
      const audioTracks = player.getAudioTracks()
      const textTracks = player.getTextTracks()

      console.log('Audio tracks:', audioTracks)
      console.log('Subtitle tracks:', textTracks)

      // Select specific track
      // actions.selectAudioTrack('eng-audio-track-id')
      // actions.selectTextTrack('eng-subtitle-track-id')
    }
  }, [player, actions])

  return (
    <MediaProvider>
      <VideoPlayer src="https://example.com/multi-track-video.m3u8" />
    </MediaProvider>
  )
}
```

### Custom Player Layouts

You can create completely custom player layouts by defining a `PlayerControllerLayout` configuration. This gives you full control over button placement, styling, and behavior.

#### Creating a Custom Layout

```tsx
import {
  MediaProvider,
  VideoPlayer,
  PlayerController,
  PlayerControllerLayout,
  PlayerButtonConfig,
  PlayerButtonAction,
} from '@smart-tv/player'

function CustomLayoutPlayer() {
  // Define your custom button configurations
  const customButtons: PlayerButtonConfig[] = [
    // Title and subtitle at top
    {
      action: 'title',
      align: 'top',
      position: 'bottom',
      showTitle: true,
      showSubtitle: true,
    },
    // Play/pause button
    {
      action: 'playpause',
      align: 'left',
      position: 'bottom',
      size: 'lg',
      className: 'player-rounded-full player-fill-white',
      selectedClass: 'player-bg-primary player-bg-opacity-100',
      order: 1,
    },
    // Settings button
    {
      action: 'settings',
      align: 'left',
      position: 'bottom',
      className: 'player-rounded-full player-fill-white p-2',
      selectedClass: 'player-bg-primary player-bg-opacity-100',
      order: 2,
    },
    // Custom button with popup
    {
      action: 'custom',
      align: 'left',
      position: 'bottom',
      label: 'Info',
      icon: <InfoIcon />,
      className: 'player-rounded-full player-fill-white p-2',
      selectedClass: 'player-bg-primary player-bg-opacity-100',
      popup: true,
      content: (
        <div className="player-text-white player-p-4">
          <h2 className="player-text-xl player-font-bold">Video Information</h2>
          <p className="player-mt-2">Custom content here...</p>
        </div>
      ),
      order: 3,
    },
    // Progress bar at bottom
    {
      action: 'progressbar',
      align: 'bottom',
      position: 'bottom',
    },
  ]

  // Create the layout configuration
  const customLayout: PlayerControllerLayout = {
    name: 'My Custom Layout',
    description: 'Custom player layout with specific buttons',
    showOnHover: false,
    autoHide: true,
    autoHideDelay: 5000,
    background: 'bg-black bg-opacity-60',
    padding: 'player-p-8',
    gap: 'gap-4',
    buttons: customButtons,
  }

  return (
    <MediaProvider>
      <div className="relative w-full h-screen bg-black">
        <VideoPlayer src="https://example.com/video.m3u8" />
        <PlayerController
          layout={customLayout}
          title="My Video Title"
          subtitle="Season 1 - Episode 1"
          onButtonPress={(action, config) => {
            console.log('Button pressed:', action, config)
          }}
        />
      </div>
    </MediaProvider>
  )
}
```

#### Button Configuration Options

Each button in the layout can be configured with these properties:

```tsx
interface PlayerButtonConfig {
  action: PlayerButtonAction           // Button action type (required)
  position: 'top' | 'center' | 'bottom' // Vertical position (required)
  align: 'left' | 'center' | 'right'    // Horizontal alignment (required)
  
  // Appearance
  label?: string                        // Button label
  icon?: ReactNode                      // Custom icon
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' // Button size
  className?: string                    // CSS classes for default state
  selectedClass?: string                // CSS classes when focused/selected
  style?: CSSProperties                 // Inline styles
  
  // Behavior
  visible?: boolean                     // Show/hide button
  disabled?: boolean                    // Enable/disable button
  order?: number                        // Display order (lower = first)
  focusKey?: string                     // Custom focus key for navigation
  
  // Callbacks
  onPress?: (event?) => void           // Click/press handler
  onRelease?: () => void               // Release handler
  onFocus?: () => void                 // Focus handler
  onBlur?: () => void                  // Blur handler
  
  // Popup/Overlay
  popup?: boolean                       // Show as popup overlay
  content?: ReactNode                   // Popup content
  tooltip?: string                      // Tooltip text
}
```

#### Available Button Actions

```tsx
type PlayerButtonAction =
  // Playback
  | 'play' | 'pause' | 'playpause' | 'stop'
  
  // Volume
  | 'mute' | 'unmute' | 'mutetoggle' | 'volume' | 'volumebar'
  
  // Fullscreen & PiP
  | 'fullscreen' | 'exitfullscreen' | 'fullscreentoggle'
  | 'pip' | 'exitpip' | 'piptoggle'
  
  // Seeking
  | 'seek' | 'seekbar' | 'progressbar' | 'rewind' | 'forward'
  
  // Navigation
  | 'previous' | 'next'
  
  // Tracks & Settings
  | 'playlist' | 'playlisttoggle' | 'settings'
  | 'quality' | 'subtitles' | 'audio' | 'playbackrate'
  
  // Information
  | 'title' | 'time' | 'duration' | 'live' | 'info'
  
  // Custom
  | 'like' | 'share' | 'download' | 'custom'
```

#### Advanced Custom Layout Example

Here's a more complex example with conditional buttons and dynamic content:

```tsx
import { useMemo, useState } from 'react'
import {
  PlayerController,
  PlayerControllerLayout,
  PlayerButtonConfig,
} from '@smart-tv/player'

function AdvancedCustomPlayer() {
  const [isLive, setIsLive] = useState(false)
  const [isSeries, setIsSeries] = useState(true)
  const [inWatchlist, setInWatchlist] = useState(false)

  const customLayout: PlayerControllerLayout = useMemo(() => ({
    name: 'Smart TV Layout',
    description: 'Optimized for TV remote navigation',
    showOnHover: false,
    autoHide: true,
    autoHideDelay: 6000,
    background: 'bg-gradient-to-t from-black via-black/80 to-transparent',
    padding: 'player-p-6',
    gap: 'gap-3',
    buttons: [
      // Title info at top
      {
        action: 'title',
        align: 'top',
        position: 'bottom',
        showTitle: true,
        showSubtitle: true,
      },
      // Main play button
      {
        action: 'playpause',
        align: 'left',
        position: 'bottom',
        size: 'xl',
        className: 'player-rounded-full player-bg-white player-text-black',
        selectedClass: 'player-ring-4 player-ring-blue-500',
        order: 1,
      },
      // Playlist button (only for series)
      ...(isSeries ? [{
        action: 'custom' as const,
        align: 'left' as const,
        position: 'bottom' as const,
        label: 'Episodes',
        icon: <PlaylistIcon />,
        onPress: () => console.log('Show playlist'),
        className: 'player-rounded-full player-bg-white/20 player-text-white',
        selectedClass: 'player-bg-blue-500 player-ring-2 player-ring-white',
        order: 2,
      }] : []),
      // Settings
      {
        action: 'settings',
        align: 'left',
        position: 'bottom',
        className: 'player-rounded-full player-bg-white/20 player-text-white',
        selectedClass: 'player-bg-blue-500',
        order: 3,
      },
      // Watchlist button
      {
        action: 'custom',
        align: 'left',
        position: 'bottom',
        label: inWatchlist ? 'In List' : 'Add to List',
        icon: inWatchlist ? <CheckIcon /> : <PlusIcon />,
        onPress: () => setInWatchlist(!inWatchlist),
        className: 'player-rounded-full player-bg-white/20 player-text-white',
        selectedClass: 'player-bg-green-500',
        order: 4,
      },
      // Info button with popup
      {
        action: 'custom',
        align: 'left',
        position: 'bottom',
        label: 'Details',
        icon: <InfoIcon />,
        popup: true,
        content: (
          <div className="player-max-w-2xl player-p-6 player-bg-gray-900 player-rounded-lg">
            <h2 className="player-text-2xl player-font-bold player-text-white">
              Video Details
            </h2>
            <p className="player-mt-4 player-text-gray-300">
              Full video description and metadata...
            </p>
          </div>
        ),
        className: 'player-rounded-full player-bg-white/20 player-text-white',
        selectedClass: 'player-bg-blue-500',
        order: 5,
      },
      // Progress bar (hide for live content)
      ...(!isLive ? [{
        action: 'progressbar' as const,
        align: 'bottom' as const,
        position: 'bottom' as const,
        progressClassName: 'player-h-1 player-bg-red-600',
        timerStyle: 'leftRight' as const,
      }] : []),
      // Fullscreen button (right side)
      {
        action: 'fullscreentoggle',
        align: 'right',
        position: 'bottom',
        className: 'player-rounded-full player-bg-white/20 player-text-white',
        selectedClass: 'player-bg-blue-500',
        order: 10,
      },
    ],
  }), [isSeries, isLive, inWatchlist])

  return (
    <PlayerController
      layout={customLayout}
      title="The Great Adventure"
      subtitle="Season 2 - Episode 5: The Journey Begins"
      onButtonPress={(action, config) => {
        console.log('Button action:', action)
        // Handle button presses
      }}
    />
  )
}
```

#### Position & Alignment Guide

Buttons are positioned using a combination of `position` (vertical) and `align` (horizontal):

```
Top Section:
┌─────────────────────────────────────────┐
│  left    center    right                │  position: 'top'
├─────────────────────────────────────────┤

Center Section:
│  left    center    right                │  position: 'center'

Bottom Section:
├─────────────────────────────────────────┤
│  left    center    right                │  position: 'bottom'
└─────────────────────────────────────────┘
```

Special alignments for progress/title:
- `align: 'top'` - Above main content (for titles)
- `align: 'bottom'` - Below main content (for progress bars)

#### Using Pre-defined Layouts as Base

You can also extend pre-defined layouts:

```tsx
import { netflixLayout, PlayerControllerLayout } from '@smart-tv/player'

const myLayout: PlayerControllerLayout = {
  ...netflixLayout,
  buttons: [
    ...netflixLayout.buttons,
    {
      action: 'custom',
      align: 'left',
      position: 'bottom',
      label: 'My Custom Button',
      icon: <CustomIcon />,
      onPress: () => console.log('Custom action'),
    },
  ],
}
```

#### TypeScript Support

Full type safety for custom layouts:

```tsx
import {
  PlayerControllerLayout,
  PlayerButtonConfig,
  PlayerButtonAction,
  PlayerButtonPosition,
  PlayerButtonAlign,
} from '@smart-tv/player'

const buttons: PlayerButtonConfig[] = [
  {
    action: 'playpause' as PlayerButtonAction,
    position: 'bottom' as PlayerButtonPosition,
    align: 'left' as PlayerButtonAlign,
    size: 'lg',
  },
]

const layout: PlayerControllerLayout = {
  name: 'My Layout',
  buttons,
  autoHide: true,
  autoHideDelay: 5000,
}
```

## Complete Example

Here's a comprehensive example showing multiple features:

```tsx
import { AppProvider } from '@smart-tv/ui'
import {
  MediaProvider,
  PlaylistProvider,
  VideoPlayer,
  PlayerController,
  Playlist,
  AutoPlayCountdown,
  usePlaylistActions,
} from '@smart-tv/player'
import '@smart-tv/ui/styles.css'
import '@smart-tv/player/styles.css'

const episodes = [
  {
    id: '1',
    title: 'S01E01 - Pilot',
    description: 'The beginning of an epic journey',
    url: 'https://example.com/s01e01.m3u8',
    thumbnail: 'https://example.com/s01e01.jpg',
    duration: 2400,
    subtitles: [
      {
        url: 'https://example.com/s01e01-en.vtt',
        language: 'en',
        label: 'English',
        isDefault: true,
      },
    ],
  },
  // More episodes...
]

function TVApp() {
  return (
    <AppProvider init={{ debug: false, visualDebug: false }}>
      <MediaProvider>
        <PlaylistProvider
          initialItems={episodes}
          config={{
            autoPlay: true,
            autoPlayDelay: 5,
            autoPlayCountdown: true,
            showThumbnails: true,
            loop: false,
          }}
          callbacks={{
            onItemPlay: (item) => console.log('Now playing:', item.title),
            onItemEnd: (item) => console.log('Finished:', item.title),
            onAutoPlayStart: (next, countdown) =>
              console.log(`Next in ${countdown}s: ${next.title}`),
          }}
        >
          <div className="relative w-full h-screen bg-black">
            <VideoPlayer
              autoPlay
              onReady={() => console.log('Player ready')}
              onError={(error) => console.error('Error:', error)}
            />
            
            <PlayerController
              layout="netflix"
              autoHide
              autoHideDelay={3000}
              showPlaylist
            />
            
            <AutoPlayCountdown />
          </div>
        </PlaylistProvider>
      </MediaProvider>
    </AppProvider>
  )
}

export default TVApp
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import {
  PlayerState,
  PlayerSource,
  DrmConfig,
  AudioTrack,
  VideoTrack,
  TextTrack,
  PlaylistItem,
  PlaylistConfig,
  MediaPlayerInstance,
} from '@smart-tv/player'

// Type-safe player configuration
const source: PlayerSource = {
  src: 'https://example.com/video.m3u8',
  type: 'application/x-mpegURL',
  drm: {
    servers: {
      'com.widevine.alpha': 'https://license.example.com',
    },
  },
}

// Type-safe playlist
const playlist: PlaylistItem[] = [
  {
    id: '1',
    title: 'Episode 1',
    url: 'https://example.com/ep1.m3u8',
    thumbnail: 'https://example.com/thumb.jpg',
    duration: 2400,
  },
]
```

## Utilities

### formatTime

Format seconds to HH:MM:SS or MM:SS:

```tsx
import { formatTime } from '@smart-tv/player'

formatTime(3665) // "01:01:05"
formatTime(125)  // "02:05"
```

### cn (className utility)

Merge Tailwind classes:

```tsx
import { cn } from '@smart-tv/player'

<div className={cn('base-class', focused && 'focused-class')} />
```

### debounce / throttle

Performance utilities:

```tsx
import { debounce, throttle } from '@smart-tv/player'

const debouncedFn = debounce(() => console.log('Debounced'), 300)
const throttledFn = throttle(() => console.log('Throttled'), 300)
```

## Documentation

For comprehensive documentation, interactive examples, and best practices, visit:

**📚 [https://smart-tv-docs.vercel.app/components/player](https://smart-tv-docs.vercel.app/components/player)**

**📦 [NPM Package](https://www.npmjs.com/package/@smart-tv/player)**

## Styling

The package uses Tailwind CSS. Ensure Tailwind is configured:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-tv/player/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-tv/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your custom theme
    },
  },
  plugins: [],
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Smart TV browsers (Tizen 4.0+, webOS 4.0+, Android TV 9+)
- Requires ES2018+ support

## Performance Tips

1. **Use optimized hooks** - Import specific hooks like `usePaused()` instead of `usePlayerState()` to prevent unnecessary re-renders
2. **Lazy load components** - Load heavy components like `SettingsPanel` only when needed
3. **Optimize playlists** - Use virtualization for large playlists
4. **Preload thumbnails** - Preload thumbnail images for better UX
5. **Enable adaptive streaming** - Let Shaka Player handle quality based on bandwidth

## Troubleshooting

### Player not loading

- Ensure `MediaProvider` wraps all player components
- Check that Shaka Player is installed: `npm list shaka-player`
- Verify video source URL is accessible
- Check browser console for errors

### Navigation not working

- Ensure `AppProvider` from `@smart-tv/ui` wraps your app
- Check that `focusKey` props are unique
- Enable debug mode: `<AppProvider init={{ debug: true }}>`

### DRM not working

- Verify DRM license server URLs are correct
- Check browser DRM support: Chrome (Widevine), Safari (FairPlay)
- Review DRM configuration in browser console

## Development

### Building the package

```bash
# Install dependencies
pnpm install

# Build
pnpm --filter=@smart-tv/player build

# Development mode
pnpm --filter=@smart-tv/player dev
```

## Contributing

Contributions are welcome! Please follow the monorepo conventions and add tests for new features.

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for more details.

## Related Packages

- **[@smart-tv/ui](../ui)** - React component library with  navigation
- **[@smart-tv/query](../query)** - Data fetching and caching for Smart TV apps
- **[create-smart-tv](../create-smart-tv)** - CLI to scaffold Smart TV projects
- **[Shaka Player](https://github.com/shaka-project/shaka-player)** - The underlying video player engine

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Support

- 📖 [Documentation](https://smart-tv-docs.vercel.app)
- 🐛 [Report Issues](https://github.com/smarttv-dev/smart-tv/issues)
- 💬 [Discussions](https://github.com/smarttv-dev/smart-tv/discussions)
- 📦 [NPM](https://www.npmjs.com/package/@smart-tv/player)

## Acknowledgments

- Built with [Shaka Player](https://github.com/shaka-project/shaka-player) by Google
- Inspired by Netflix, YouTube, and modern streaming platforms
- Designed for the Smart TV development community

---

Made with ❤️ for Smart TV developers
