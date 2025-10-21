/* eslint-disable react/no-unescaped-entities */
import { CodePreview } from "@/components";

export default function PlayerExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Examples
        </h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Real-world examples and complete implementations of the Smart TV
          Player for different use cases.
        </p>
      </div>

      {/* Basic Video Player */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Video Player
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          A simple video player with minimal controls for basic playback
          functionality.
        </p>

        <CodePreview
          code={`import React from 'react';
import { MediaProvider, VideoPlayer, PlayerController } from '@smart-tv/player';
import '@smart-tv/player/styles.css';

function BasicVideoPlayer() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <MediaProvider>
        <div className="relative bg-black rounded-lg overflow-hidden">
          <VideoPlayer
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            autoPlay={false}
            preload="metadata"
            className="w-full aspect-video"
          />
          <PlayerController
            layoutStyle="minimal"
            title="Big Buck Bunny"
            subtitle="Blender Open Movie Project"
          />
        </div>
      </MediaProvider>
    </div>
  );
}

export default BasicVideoPlayer;`}
          language="tsx"
        />
      </div>

      {/* YouTube-Style Player */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          YouTube-Style Player
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          A comprehensive player with YouTube-style controls and custom buttons.
        </p>

        <CodePreview
          code={`import React, { useState } from 'react';
import {
  MediaProvider,
  VideoPlayer,
  PlayerController,
  PlayerButtonConfig
} from '@smart-tv/player';

// Custom icons
const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);

const SaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
  </svg>
);

function YouTubeStylePlayer() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const customButtons: PlayerButtonConfig[] = [
    {
      action: 'custom',
      position: 'bottom',
      align: 'right',
      label: 'Share',
      icon: <ShareIcon />,
      onPress: () => {
        navigator.share?.({
          title: 'Amazing Video Content',
          url: window.location.href,
        }) || console.log('Share functionality');
      },
      order: 0,
      className: 'player-p-2 player-rounded-md hover:player-bg-white hover:player-bg-opacity-20',
    },
    {
      action: 'custom',
      position: 'bottom',
      align: 'right',
      label: isSaved ? 'Saved' : 'Save',
      icon: <SaveIcon />,
      onPress: () => {
        setIsSaved(!isSaved);
        console.log(isSaved ? 'Removed from saved' : 'Added to saved');
      },
      order: 1,
      className: \`player-p-2 player-rounded-md hover:player-bg-white hover:player-bg-opacity-20 \${
        isSaved ? 'player-text-blue-400' : ''
      }\`,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <MediaProvider
        defaultSettings={{
          volume: 0.7,
          autoPlay: false,
        }}
        onPlayerReady={() => console.log('YouTube-style player ready')}
      >
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          <VideoPlayer
            src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            poster="https://via.placeholder.com/1280x720/000000/FFFFFF?text=Video+Poster"
            autoPlay={false}
            preload="metadata"
            className="w-full aspect-video"
            onPlay={() => console.log('Video started playing')}
            onPause={() => console.log('Video paused')}
            onTimeUpdate={(time, duration) => {
              // Update watch progress
              const progress = (time / duration) * 100;
              if (progress > 50 && !isLiked) {
                // Auto-suggest liking after 50% watched
                console.log('Consider liking this video!');
              }
            }}
          />

          <PlayerController
            layoutStyle="youtube"
            title="Amazing Video Content"
            subtitle="Published on Dec 15, 2024 • 1.2M views"
            customButtons={customButtons}
            onButtonPress={(action, config) => {
              console.log('Button pressed:', action, config.label);
            }}
          />
        </div>

        {/* Video Description Area */}
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Video Description</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            This is an example of a YouTube-style video player with custom share and save functionality.
            The player includes all standard controls plus additional custom buttons for enhanced user interaction.
          </p>
        </div>
      </MediaProvider>
    </div>
  );
}

export default YouTubeStylePlayer;`}
          language="tsx"
        />
      </div>

      {/* Netflix-Style Series Player */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Netflix-Style Series Player
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          A series player with Netflix-style interface, episode management, and
          auto-play functionality.
        </p>

        <CodePreview
          code={`import React, { useState } from 'react';
import {
  MediaProvider,
  VideoPlayer,
  PlayerController,
  PlaylistProvider,
  PlaylistManager,
  AutoPlayCountdown,
  PlayerButtonConfig
} from '@smart-tv/player';

const seriesData = [
  {
    id: '1',
    title: 'The Pilot',
    description: 'The beginning of an epic journey as our heroes meet for the first time.',
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    poster: 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=E1',
    duration: 2640, // 44 minutes
    season: 1,
    episode: 1,
  },
  {
    id: '2',
    title: 'The Quest Begins',
    description: 'Our heroes embark on their first adventure together.',
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    poster: 'https://via.placeholder.com/300x450/2a2a2a/ffffff?text=E2',
    duration: 2580,
    season: 1,
    episode: 2,
  },
  {
    id: '3',
    title: 'Unexpected Allies',
    description: 'The team discovers they are not alone in their quest.',
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_3mb.mp4',
    poster: 'https://via.placeholder.com/300x450/3a3a3a/ffffff?text=E3',
    duration: 2700,
    season: 1,
    episode: 3,
  },
];

function NetflixStylePlayer() {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showAutoPlay, setShowAutoPlay] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(seriesData[0]);

  const customButtons: PlayerButtonConfig[] = [
    {
      action: 'custom',
      position: 'bottom',
      align: 'left',
      label: 'Episodes',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
        </svg>
      ),
      onPress: () => setShowPlaylist(!showPlaylist),
      order: 2,
      className: \`player-p-2 player-rounded-md \${
        showPlaylist ? 'player-bg-red-600' : 'player-bg-white player-bg-opacity-20'
      }\`,
    },
    {
      action: 'custom',
      position: 'bottom',
      align: 'left',
      label: 'My List',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      ),
      onPress: () => console.log('Added to My List'),
      order: 3,
      className: 'player-p-2 player-rounded-md player-bg-white player-bg-opacity-20',
    },
    {
      action: 'custom',
      position: 'bottom',
      align: 'left',
      label: 'Info',
      popup: true,
      content: (
        <div className="player-p-6 player-bg-black player-bg-opacity-90 player-text-white player-rounded-lg player-max-w-md">
          <h3 className="player-text-xl player-font-bold player-mb-3">
            {currentEpisode.title}
          </h3>
          <p className="player-text-sm player-text-gray-300 player-mb-4">
            Season {currentEpisode.season}, Episode {currentEpisode.episode}
          </p>
          <p className="player-text-sm player-leading-relaxed">
            {currentEpisode.description}
          </p>
        </div>
      ),
      order: 4,
      className: 'player-p-2 player-rounded-md player-bg-white player-bg-opacity-20',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <MediaProvider>
        <PlaylistProvider
          items={seriesData}
          autoPlayNext={true}
          autoPlayDelay={10}
          onItemChange={(item) => {
            setCurrentEpisode(item);
            console.log('Now watching:', item.title);
          }}
          onAutoPlayStart={() => setShowAutoPlay(true)}
          onAutoPlayCancel={() => setShowAutoPlay(false)}
        >
          <div className="flex gap-6">
            {/* Main Player */}
            <div className={\`flex-1 \${showPlaylist ? 'lg:w-2/3' : 'w-full'}\`}>
              <div className="relative bg-black rounded-lg overflow-hidden">
                <VideoPlayer
                  src={currentEpisode.src}
                  poster={currentEpisode.poster}
                  autoPlay={false}
                  preload="metadata"
                  className="w-full aspect-video"
                  onEnded={() => {
                    // Show auto-play countdown
                    setShowAutoPlay(true);
                  }}
                />

                <PlayerController
                  layoutStyle="netflix"
                  title={currentEpisode.title}
                  subtitle={\`S\${currentEpisode.season}:E\${currentEpisode.episode} • \${Math.floor(currentEpisode.duration / 60)}m\`}
                  customButtons={customButtons}
                />

                {/* Auto-play Countdown Overlay */}
                {showAutoPlay && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <AutoPlayCountdown
                      duration={10}
                      nextItem={seriesData[seriesData.findIndex(ep => ep.id === currentEpisode.id) + 1]}
                      onCancel={() => setShowAutoPlay(false)}
                      onComplete={() => {
                        setShowAutoPlay(false);
                        // Auto-play logic would be handled by PlaylistProvider
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Episode Info */}
              <div className="mt-6 p-4 bg-gray-900 text-white rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{currentEpisode.title}</h2>
                    <p className="text-gray-300 mb-4">
                      Season {currentEpisode.season}, Episode {currentEpisode.episode}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {currentEpisode.description}
                    </p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {Math.floor(currentEpisode.duration / 60)}m
                  </div>
                </div>
              </div>
            </div>

            {/* Episode List Sidebar */}
            {showPlaylist && (
              <div className="w-80 lg:w-96">
                <PlaylistManager
                  className="bg-gray-900 text-white rounded-lg"
                  showThumbnails={true}
                  showDuration={true}
                  itemClassName="hover:bg-gray-800 transition-colors"
                  activeClassName="bg-red-600"
                  onItemSelect={(item, index) => {
                    setCurrentEpisode(item);
                    console.log('Selected episode:', item.title);
                  }}
                />
              </div>
            )}
          </div>
        </PlaylistProvider>
      </MediaProvider>
    </div>
  );
}

export default NetflixStylePlayer;`}
          language="tsx"
        />
      </div>

      {/* Smart TV Remote Player */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Smart TV Remote Player
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          A TV-optimized player with spatial navigation and remote control
          support for Smart TV applications.
        </p>

        <CodePreview
          code={`import React, { useEffect, useState } from 'react';
import {
  MediaProvider,
  VideoPlayer,
  PlayerController,
  init // Initialize spatial navigation
} from '@smart-tv/player';

// Initialize spatial navigation once when the app starts
init();

function SmartTVPlayer() {
  const [isTV, setIsTV] = useState(false);
  const [currentChannel, setCurrentChannel] = useState(1);

  useEffect(() => {
    // Detect TV environment
    const userAgent = navigator.userAgent.toLowerCase();
    const isTVPlatform = userAgent.includes('smart-tv') ||
                        userAgent.includes('tizen') ||
                        userAgent.includes('webos') ||
                        window.innerWidth >= 1920; // Assume large screens are TVs

    setIsTV(isTVPlatform);

    // Handle remote control key events
    const handleKeyPress = (event) => {
      switch (event.keyCode) {
        case 37: // Left arrow
          event.preventDefault();
          console.log('Navigate left');
          break;
        case 39: // Right arrow
          event.preventDefault();
          console.log('Navigate right');
          break;
        case 38: // Up arrow
          event.preventDefault();
          console.log('Navigate up');
          break;
        case 40: // Down arrow
          event.preventDefault();
          console.log('Navigate down');
          break;
        case 13: // Enter/OK
          event.preventDefault();
          console.log('OK button pressed');
          break;
        case 8: // Back
          event.preventDefault();
          console.log('Back button pressed');
          break;
        case 461: // Return (Samsung)
        case 10009: // Return (LG)
          event.preventDefault();
          console.log('Return to previous screen');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const channelData = {
    1: {
      name: 'Premium Movies',
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      poster: 'https://via.placeholder.com/1920x1080/0066cc/ffffff?text=Premium+Movies',
      description: 'Latest blockbuster movies and exclusive premieres',
    },
    2: {
      name: 'Sports Central',
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1920x1080_1mb.mp4',
      poster: 'https://via.placeholder.com/1920x1080/cc6600/ffffff?text=Sports+Central',
      description: 'Live sports and highlights from around the world',
    },
    3: {
      name: 'Documentary Hub',
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      poster: 'https://via.placeholder.com/1920x1080/009900/ffffff?text=Documentary+Hub',
      description: 'Educational and nature documentaries',
    },
  };

  const currentChannelData = channelData[currentChannel];

  return (
    <div className="w-full h-screen bg-black">
      <MediaProvider
        defaultSettings={{
          volume: 0.8,
          autoPlay: isTV, // Auto-play on TV platforms
          muted: false,
        }}
      >
        <div className="relative w-full h-full">
          <VideoPlayer
            src={currentChannelData.src}
            poster={currentChannelData.poster}
            autoPlay={isTV}
            preload="auto"
            className="w-full h-full object-cover"
            focusable={true}
            onReady={() => console.log('TV Player ready')}
            onPlay={() => console.log('Channel playing:', currentChannelData.name)}
          />

          <PlayerController
            layoutStyle="tv-remote"
            title={currentChannelData.name}
            subtitle={\`Channel \${currentChannel} • Live TV\`}
            initialFocus="playpause"
            customButtons={[
              {
                action: 'custom',
                position: 'bottom',
                align: 'left',
                label: 'Channel Guide',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M6 6h2v2H6zm0 4h2v2H6zm0 4h2v2H6zm4-8h10v2H10zm0 4h10v2H10zm0 4h10v2H10z" />
                  </svg>
                ),
                onPress: () => console.log('Open channel guide'),
                order: 1,
                focusKey: 'guide',
                className: 'player-bg-blue-600 player-text-white player-px-4 player-py-2 player-rounded-lg',
              },
              {
                action: 'custom',
                position: 'bottom',
                align: 'left',
                label: 'Previous Ch',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                ),
                onPress: () => {
                  const prevChannel = currentChannel > 1 ? currentChannel - 1 : 3;
                  setCurrentChannel(prevChannel);
                  console.log('Previous channel:', prevChannel);
                },
                order: 2,
                focusKey: 'prev-channel',
                className: 'player-bg-gray-700 player-text-white player-px-3 player-py-2 player-rounded-lg',
              },
              {
                action: 'custom',
                position: 'bottom',
                align: 'left',
                label: 'Next Ch',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                ),
                onPress: () => {
                  const nextChannel = currentChannel < 3 ? currentChannel + 1 : 1;
                  setCurrentChannel(nextChannel);
                  console.log('Next channel:', nextChannel);
                },
                order: 3,
                focusKey: 'next-channel',
                className: 'player-bg-gray-700 player-text-white player-px-3 player-py-2 player-rounded-lg',
              },
            ]}
            onFocusChange={(element) => {
              console.log('Focus changed to:', element);
            }}
            onButtonPress={(action, config) => {
              console.log('TV Remote button pressed:', action, config.label);
            }}
          />

          {/* Channel Info Overlay */}
          <div className="absolute top-6 left-6 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-md">
            <h2 className="text-xl font-bold mb-1">{currentChannelData.name}</h2>
            <p className="text-sm text-gray-300 mb-2">Channel {currentChannel}</p>
            <p className="text-sm">{currentChannelData.description}</p>
          </div>

          {/* TV Platform Indicator */}
          {isTV && (
            <div className="absolute top-6 right-6 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              TV Mode
            </div>
          )}
        </div>
      </MediaProvider>
    </div>
  );
}

export default SmartTVPlayer;`}
          language="tsx"
        />
      </div>

      {/* Mobile-Optimized Player */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Mobile-Optimized Player
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          A mobile-friendly player with touch gestures and responsive design.
        </p>

        <CodePreview
          code={`import React, { useState, useEffect } from 'react';
import {
  MediaProvider,
  VideoPlayer,
  PlayerController
} from '@smart-tv/player';

function MobilePlayer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isPortraitMode = window.innerHeight > window.innerWidth;

      setIsMobile(isMobileDevice);
      setIsPortrait(isPortraitMode);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  // Auto-hide controls on mobile after interaction
  useEffect(() => {
    if (!isMobile) return;

    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showControls, isMobile]);

  const handleTap = () => {
    if (isMobile) {
      setShowControls(true);
    }
  };

  return (
    <div className={\`w-full \${isPortrait ? 'h-64' : 'h-screen'} relative\`}>
      <MediaProvider
        defaultSettings={{
          volume: 1.0,
          autoPlay: false,
          muted: false,
        }}
      >
        <div
          className="relative bg-black rounded-lg overflow-hidden h-full"
          onClick={handleTap}
          onTouchStart={handleTap}
        >
          <VideoPlayer
            src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            poster="https://via.placeholder.com/1280x720/333333/ffffff?text=Mobile+Video"
            autoPlay={false}
            preload="metadata"
            className="w-full h-full object-cover"
            onPlay={() => setShowControls(false)}
            onPause={() => setShowControls(true)}
          />

          {(showControls || !isMobile) && (
            <PlayerController
              layoutStyle="mobile"
              title="Mobile Video Content"
              subtitle="Optimized for touch devices"
              showOnHover={!isMobile}
              autoHide={isMobile}
              autoHideDelay={3000}
              customButtons={[
                ...(isPortrait ? [] : [
                  {
                    action: 'custom',
                    position: 'top',
                    align: 'left',
                    label: 'Back',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                      </svg>
                    ),
                    onPress: () => {
                      // Exit fullscreen or navigate back
                      if (document.fullscreenElement) {
                        document.exitFullscreen();
                      } else {
                        console.log('Navigate back');
                      }
                    },
                    className: 'player-bg-black player-bg-opacity-50 player-p-2 player-rounded-full',
                  }
                ]),
                {
                  action: 'custom',
                  position: 'bottom',
                  align: 'right',
                  label: 'Cast',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    </svg>
                  ),
                  onPress: () => {
                    // Implement casting functionality
                    console.log('Cast to device');
                  },
                  className: 'player-bg-black player-bg-opacity-50 player-p-2 player-rounded-full',
                },
              ]}
              onButtonPress={(action, config) => {
                console.log('Mobile button pressed:', action);
                setShowControls(true); // Show controls on interaction
              }}
            />
          )}

          {/* Mobile-specific overlays */}
          {isMobile && (
            <>
              {/* Loading indicator for mobile */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black bg-opacity-50 rounded-full p-3">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>

              {/* Gesture hints */}
              <div className="absolute bottom-4 left-4 right-4 text-center text-white text-sm opacity-75">
                <p>Tap to show controls • Double tap to play/pause</p>
              </div>
            </>
          )}
        </div>

        {/* Mobile video info */}
        {isMobile && isPortrait && (
          <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mobile Video Content</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              This video player is optimized for mobile devices with touch-friendly controls and responsive design.
            </p>
            <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
              <span>1.2M views</span>
              <span>2 days ago</span>
            </div>
          </div>
        )}
      </MediaProvider>
    </div>
  );
}

export default MobilePlayer;`}
          language="tsx"
        />
      </div>

      {/* DRM Protected Content */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          DRM Protected Content Player
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Example of playing DRM-protected content with Widevine and PlayReady
          support.
        </p>

        <CodePreview
          code={`import React, { useState } from 'react';
import {
  MediaProvider,
  VideoPlayer,
  PlayerController,
  DrmConfig
} from '@smart-tv/player';

function DRMProtectedPlayer() {
  const [drmError, setDrmError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // DRM configuration for protected content
  const drmConfig: DrmConfig = {
    servers: {
      'com.widevine.alpha': 'https://widevine-license-server.example.com/license',
      'com.microsoft.playready': 'https://playready-license-server.example.com/license',
    },
    advanced: {
      'com.widevine.alpha': {
        videoRobustness: 'SW_SECURE_CRYPTO',
        audioRobustness: 'SW_SECURE_CRYPTO',
      },
      'com.microsoft.playready': {
        videoRobustness: 'SW_SECURE_CRYPTO',
        audioRobustness: 'SW_SECURE_CRYPTO',
      }
    },
    // Clear keys for testing (development only)
    clearKeys: {
      '1234567890123456': 'abcdef1234567890abcdef1234567890',
    }
  };

  const handleDrmError = (error) => {
    console.error('DRM Error:', error);
    setDrmError(error.message);
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
    setDrmError(null);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <MediaProvider
        onError={handleDrmError}
      >
        <div className="relative bg-black rounded-lg overflow-hidden">
          {/* DRM Error Display */}
          {drmError && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-90 z-10">
              <div className="text-center text-white p-6">
                <h3 className="text-lg font-semibold mb-2">DRM Error</h3>
                <p className="text-sm mb-4">{drmError}</p>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={() => {
                    setDrmError(null);
                    window.location.reload();
                  }}
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
              <div className="text-center text-white">
                <div className="inline-block w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Loading protected content...</p>
              </div>
            </div>
          )}

          <VideoPlayer
            src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
            poster="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.jpg"
            drm={drmConfig}
            autoPlay={false}
            preload="none"
            className="w-full aspect-video"
            onLoadStart={handleLoadStart}
            onCanPlay={handleCanPlay}
            onError={handleDrmError}
            onReady={() => {
              console.log('DRM protected player ready');
              setIsLoading(false);
            }}
          />

          <PlayerController
            layoutStyle="youtube"
            title="Protected Content"
            subtitle="DRM-enabled streaming • Premium subscription required"
            customButtons={[
              {
                action: 'custom',
                position: 'bottom',
                align: 'right',
                label: 'Quality',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                ),
                onPress: () => console.log('Quality settings'),
                className: 'player-bg-green-600 player-text-white player-px-3 player-py-1 player-rounded-md',
              },
            ]}
          />
        </div>

        {/* DRM Info Panel */}
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">🔒 DRM Protected Content</h3>
          <div className="text-blue-800 dark:text-blue-300 text-sm space-y-1">
            <p>• Content is protected with industry-standard DRM</p>
            <p>• Supports Widevine, PlayReady, and FairPlay</p>
            <p>• Automatic license acquisition and renewal</p>
            <p>• Hardware-accelerated decryption when available</p>
          </div>
        </div>

        {/* Browser Compatibility */}
        <div className="mt-4 p-4 bg-gray-50 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Browser Compatibility</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Chrome 34+
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Firefox 47+
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Safari 12.1+
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Edge 79+
            </div>
          </div>
        </div>
      </MediaProvider>
    </div>
  );
}

export default DRMProtectedPlayer;`}
          language="tsx"
        />
      </div>

      {/* Integration Tips */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Integration Tips
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-900/20">
            <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-200">
              Performance Optimization
            </h3>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
              <li>• Use preload="none" for better page load times</li>
              <li>• Implement lazy loading for video lists</li>
              <li>• Optimize poster images for faster display</li>
              <li>• Use appropriate video formats for target devices</li>
            </ul>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
            <h3 className="mb-2 font-semibold text-green-900 dark:text-green-200">
              Accessibility
            </h3>
            <ul className="space-y-1 text-sm text-green-800 dark:text-green-300">
              <li>• Ensure keyboard navigation works properly</li>
              <li>• Provide meaningful alt text for poster images</li>
              <li>• Include subtitle/caption support</li>
              <li>• Test with screen readers</li>
            </ul>
          </div>

          <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-700 dark:bg-purple-900/20">
            <h3 className="mb-2 font-semibold text-purple-900 dark:text-purple-200">
              Error Handling
            </h3>
            <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-300">
              <li>• Implement comprehensive error boundaries</li>
              <li>• Provide fallback content for unsupported formats</li>
              <li>• Handle network connectivity issues gracefully</li>
              <li>• Log errors for debugging and analytics</li>
            </ul>
          </div>

          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-700 dark:bg-orange-900/20">
            <h3 className="mb-2 font-semibold text-orange-900 dark:text-orange-200">
              Analytics Integration
            </h3>
            <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-300">
              <li>• Track play/pause events</li>
              <li>• Monitor playback quality and buffering</li>
              <li>• Measure user engagement and completion rates</li>
              <li>• Implement custom event tracking</li>
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
              Learn about state management hooks for custom components
            </p>
          </a>
          <a
            href="/components/player/types"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Types
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              TypeScript definitions and interfaces
            </p>
          </a>
          <a
            href="/components/player/usage"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Configuration
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Advanced configuration options and customization
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
