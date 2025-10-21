import { CodePreview } from "@/components";

export default function PlayerUsage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Usage & Configuration
        </h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Learn how to use and configure the Smart TV Player components for your
          specific needs.
        </p>
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The simplest way to get started with the Smart TV Player:
        </p>

        <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
          <h3 className="mb-3 text-lg font-semibold">Minimal Setup</h3>
          <CodePreview
            code={`import React from 'react';
import { VideoPlayer, MediaProvider } from '@smart-tv/player';
import '@smart-tv/player/styles.css';

function BasicPlayer() {
  return (
    <MediaProvider>
      <VideoPlayer
        src="https://example.com/video.m3u8"
        autoPlay={false}
      />
    </MediaProvider>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      {/* MediaProvider Configuration */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          MediaProvider Configuration
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The MediaProvider component manages the player state and provides
          context to all child components. It should wrap all player-related
          components.
        </p>

        <CodePreview
          code={`import React from 'react';
import { MediaProvider, VideoPlayer, PlayerController } from '@smart-tv/player';

function ConfiguredPlayer() {
  return (
    <MediaProvider
      // Optional: Configure default player settings
      defaultSettings={{
        volume: 0.8,
        muted: false,
        autoPlay: false,
        loop: false,
      }}
      // Optional: Handle global player events
      onPlayerReady={(player) => {
        console.log('Player ready:', player);
      }}
      onError={(error) => {
        console.error('Player error:', error);
      }}
    >
      <div className="relative">
        <VideoPlayer
          src="https://example.com/video.m3u8"
          poster="https://example.com/poster.jpg"
        />
        <PlayerController layoutStyle="youtube" />
      </div>
    </MediaProvider>
  );
}`}
          language="tsx"
        />
      </div>

      {/* VideoPlayer Configuration */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          VideoPlayer Configuration
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The VideoPlayer component supports various configuration options:
        </p>

        <CodePreview
          code={`import React from 'react';
import { VideoPlayer, MediaProvider } from '@smart-tv/player';

function AdvancedVideoPlayer() {
  return (
    <MediaProvider>
      <VideoPlayer
        // Required: Video source
        src="https://example.com/video.m3u8"

        // Optional: Poster image
        poster="https://example.com/poster.jpg"

        // Playback options
        autoPlay={false}
        muted={false}
        loop={false}
        preload="metadata" // 'none' | 'metadata' | 'auto'

        // Player configuration
        className="w-full h-full"
        controls={false} // Hide native controls

        // DRM Configuration (for protected content)
        drm={{
          servers: {
            'com.widevine.alpha': 'https://widevine-license-server.com/',
            'com.microsoft.playready': 'https://playready-license-server.com/',
          },
          advanced: {
            'com.widevine.alpha': {
              videoRobustness: 'SW_SECURE_CRYPTO',
              audioRobustness: 'SW_SECURE_CRYPTO',
            }
          }
        }}

        // Event handlers
        onReady={(player) => console.log('Player ready')}
        onPlay={() => console.log('Started playing')}
        onPause={() => console.log('Paused')}
        onEnded={() => console.log('Playback ended')}
        onError={(error) => console.error('Error:', error)}
        onTimeUpdate={(currentTime, duration) => {
          console.log(\`Time: \${currentTime}s / \${duration}s\`);
        }}
        onVolumeChange={(volume, muted) => {
          console.log(\`Volume: \${volume}, Muted: \${muted}\`);
        }}
        onFullscreenChange={(isFullscreen) => {
          console.log(\`Fullscreen: \${isFullscreen}\`);
        }}
      />
    </MediaProvider>
  );
}`}
          language="tsx"
        />
      </div>

      {/* PlayerController Configuration */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          PlayerController Configuration
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The PlayerController provides customizable video controls with
          multiple layout styles:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Predefined Layout Styles
            </h3>
            <CodePreview
              code={`import React from 'react';
import { PlayerController } from '@smart-tv/player';

// YouTube-style layout
<PlayerController
  layoutStyle="youtube"
  title="Video Title"
  subtitle="Episode 1"
/>

// Netflix-style layout
<PlayerController
  layoutStyle="netflix"
  title="Series Name"
  subtitle="Season 1, Episode 1"
/>

// Minimal layout
<PlayerController layoutStyle="minimal" />

// TV Remote layout (optimized for TV apps)
<PlayerController
  layoutStyle="tv-remote"
  title="TV Show"
  subtitle="Premium Channel"
/>

// Mobile-optimized layout
<PlayerController layoutStyle="mobile" />`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Custom Layout Configuration
            </h3>
            <CodePreview
              code={`import React from 'react';
import { PlayerController, PlayerControllerLayout } from '@smart-tv/player';

const customLayout: PlayerControllerLayout = {
  name: 'Custom Layout',
  description: 'My custom player layout',
  showOnHover: true,
  autoHide: true,
  autoHideDelay: 5000,
  background: 'player-bg-black player-bg-opacity-80',
  padding: 'player-p-6',
  gap: 'player-gap-4',
  buttons: [
    {
      action: 'playpause',
      position: 'center',
      align: 'center',
      size: 'xl',
      className: 'player-bg-white player-bg-opacity-20 player-rounded-full',
    },
    {
      action: 'progressbar',
      position: 'bottom',
      align: 'top',
      className: 'player-mb-4',
    },
    // Add more buttons as needed...
  ],
};

function CustomPlayerController() {
  return (
    <PlayerController
      layout={customLayout}
      title="Custom Video"
      onButtonPress={(action, config) => {
        console.log('Button pressed:', action, config);
      }}
    />
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Custom Buttons */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Custom Buttons
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Add custom buttons to any layout style:
        </p>

        <CodePreview
          code={`import React from 'react';
import { PlayerController, PlayerButtonConfig } from '@smart-tv/player';

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);

const customButtons: PlayerButtonConfig[] = [
  {
    action: 'custom',
    position: 'bottom',
    align: 'right',
    label: 'Share',
    icon: <ShareIcon />,
    onPress: () => {
      // Handle share functionality
      navigator.share({
        title: 'Check out this video',
        url: window.location.href,
      });
    },
    order: 0,
    className: 'player-bg-white player-bg-opacity-20 player-rounded-full',
  },
  {
    action: 'custom',
    position: 'bottom',
    align: 'left',
    label: 'Info',
    popup: true,
    content: (
      <div className="player-text-white player-p-4">
        <h3 className="player-font-bold player-mb-2">Video Information</h3>
        <p>Additional details about this video...</p>
      </div>
    ),
    order: 10,
  },
];

function PlayerWithCustomButtons() {
  return (
    <PlayerController
      layoutStyle="youtube"
      customButtons={customButtons}
      title="Video with Custom Actions"
    />
  );
}`}
          language="tsx"
        />
      </div>

      {/* Playlist Configuration */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Playlist Configuration
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Configure playlist functionality for series and multiple videos:
        </p>

        <CodePreview
          code={`import React from 'react';
import {
  MediaProvider,
  VideoPlayer,
  PlayerController,
  PlaylistProvider,
  PlaylistManager
} from '@smart-tv/player';

const playlistItems = [
  {
    id: '1',
    title: 'Episode 1: Pilot',
    description: 'The first episode of the series',
    src: 'https://example.com/episode1.m3u8',
    poster: 'https://example.com/episode1-poster.jpg',
    duration: 2400, // seconds
  },
  {
    id: '2',
    title: 'Episode 2: The Journey Begins',
    description: 'Our heroes start their adventure',
    src: 'https://example.com/episode2.m3u8',
    poster: 'https://example.com/episode2-poster.jpg',
    duration: 2700,
  },
  // More episodes...
];

function PlayerWithPlaylist() {
  return (
    <MediaProvider>
      <PlaylistProvider
        items={playlistItems}
        autoPlayNext={true}
        loop={false}
        onItemChange={(item) => {
          console.log('Now playing:', item.title);
        }}
      >
        <div className="flex">
          <div className="flex-1">
            <VideoPlayer />
            <PlayerController
              layoutStyle="netflix"
              customButtons={[
                {
                  action: 'custom',
                  position: 'bottom',
                  align: 'left',
                  label: 'Episodes',
                  icon: <PlaylistIcon />,
                  onPress: () => {
                    // Toggle playlist visibility
                  },
                },
              ]}
            />
          </div>

          <div className="w-80">
            <PlaylistManager />
          </div>
        </div>
      </PlaylistProvider>
    </MediaProvider>
  );
}`}
          language="tsx"
        />
      </div>

      {/* Responsive Design */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Responsive Design
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The player automatically adapts to different screen sizes. You can
          also create responsive configurations:
        </p>

        <CodePreview
          code={`import React, { useState, useEffect } from 'react';
import { PlayerController } from '@smart-tv/player';

function ResponsivePlayer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <PlayerController
      layoutStyle={isMobile ? 'mobile' : 'youtube'}
      title="Responsive Video"
      customButtons={isMobile ? [] : [
        // Desktop-only buttons
        {
          action: 'custom',
          position: 'bottom',
          align: 'right',
          label: 'Share',
          onPress: () => console.log('Share'),
        },
      ]}
    />
  );
}`}
          language="tsx"
        />
      </div>

      {/* Focus Management */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Focus Management (TV Apps)
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          For TV applications, the player includes built-in spatial navigation
          support:
        </p>

        <CodePreview
          code={`import React from 'react';
import {
  MediaProvider,
  VideoPlayer,
  PlayerController,
  init // Initialize focus management
} from '@smart-tv/player';

// Call this once in your app initialization
init();

function TVPlayer() {
  return (
    <MediaProvider>
      <VideoPlayer
        src="https://example.com/video.m3u8"
        // TV-specific configurations
        autoPlay={true} // TVs often auto-play content
        focusable={true} // Enable focus management
      />
      <PlayerController
        layoutStyle="tv-remote"
        title="TV Show"
        subtitle="Season 1, Episode 1"
        // Focus configuration
        initialFocus="playpause" // Which button to focus first
        onFocusChange={(focusedElement) => {
          console.log('Focus changed to:', focusedElement);
        }}
      />
    </MediaProvider>
  );
}`}
          language="tsx"
        />
      </div>

      {/* Error Handling */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Error Handling
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Implement robust error handling for a better user experience:
        </p>

        <CodePreview
          code={`import React, { useState } from 'react';
import { MediaProvider, VideoPlayer, PlayerController } from '@smart-tv/player';

function PlayerWithErrorHandling() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (error) => {
    console.error('Player error:', error);
    setError(error);
    setIsLoading(false);
  };

  const handleReady = () => {
    setError(null);
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Playback Error
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <MediaProvider onError={handleError}>
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="text-white">Loading...</div>
          </div>
        )}

        <VideoPlayer
          src="https://example.com/video.m3u8"
          onReady={handleReady}
          onError={handleError}
        />

        <PlayerController layoutStyle="youtube" />
      </div>
    </MediaProvider>
  );
}`}
          language="tsx"
        />
      </div>

      {/* Performance Optimization */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Performance Optimization
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Tips for optimizing player performance:
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-900/20">
            <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-200">
              Lazy Loading
            </h3>
            <p className="mb-2 text-sm text-blue-700 dark:text-blue-300">
              Use preload settings to control when video data is loaded:
            </p>
            <code className="rounded bg-blue-100 px-2 py-1 text-xs dark:bg-blue-800">
              {'<VideoPlayer preload="none" />'}
            </code>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
            <h3 className="mb-2 font-semibold text-green-800 dark:text-green-200">
              Memory Management
            </h3>
            <p className="text-sm text-green-700 dark:text-green-300">
              The player automatically cleans up resources when unmounted. Avoid
              creating multiple player instances unnecessarily.
            </p>
          </div>

          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-700 dark:bg-yellow-900/20">
            <h3 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
              Optimized Hooks
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Use specific hooks instead of the general useMediaContext to
              prevent unnecessary re-renders.
            </p>
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
            href="/components/player/components"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Components
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Explore all available components and their props
            </p>
          </a>
          <a
            href="/components/player/hooks"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Hooks
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn about state management hooks
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
              See complete implementation examples
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
