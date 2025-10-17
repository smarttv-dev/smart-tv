import { CodePreview } from '../../../../../components';

export default function PlayerHooks() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Hooks</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          React hooks for accessing and managing player state. These hooks provide fine-grained access 
          to player functionality and help prevent unnecessary re-renders in your components.
        </p>
      </div>

      {/* General Media Hooks */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">General Media Hooks</h2>
        
        {/* useMediaContext */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">useMediaContext</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Main hook that provides access to the complete media context. Use this when you need access 
            to multiple player properties or when building custom components.
          </p>
          
          <CodePreview
            code={`import React from 'react';
import { useMediaContext } from '@smart-tv/player';

function CustomPlayerInfo() {
  const {
    // Player state
    currentTime,
    duration,
    volume,
    muted,
    paused,
    loading,
    error,
    
    // Player actions
    play,
    pause,
    seek,
    setVolume,
    setMuted,
    
    // Player instance
    player,
    
    // Tracks
    audioTracks,
    videoTracks,
    textTracks,
  } = useMediaContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="player-info">
      <h3>Player Information</h3>
      <p>Time: {Math.floor(currentTime)}s / {Math.floor(duration)}s</p>
      <p>Volume: {Math.round(volume * 100)}% {muted && '(Muted)'}</p>
      <p>Status: {paused ? 'Paused' : 'Playing'}</p>
      <p>Audio Tracks: {audioTracks.length}</p>
      <p>Video Tracks: {videoTracks.length}</p>
      <p>Subtitles: {textTracks.length}</p>
      
      <div className="controls">
        <button onClick={() => paused ? play() : pause()}>
          {paused ? 'Play' : 'Pause'}
        </button>
        <button onClick={() => setMuted(!muted)}>
          {muted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    </div>
  );
}`}
            language="tsx"
          />
        </div>

        {/* usePlayer */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">usePlayer</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Provides access to the underlying Shaka Player instance for advanced operations.
          </p>
          
          <CodePreview
            code={`import React, { useEffect } from 'react';
import { usePlayer } from '@smart-tv/player';

function AdvancedPlayerControls() {
  const player = usePlayer();

  useEffect(() => {
    if (!player) return;

    // Access Shaka Player APIs directly
    const config = player.getConfiguration();
    console.log('Player configuration:', config);

    // Set up custom event listeners
    const onBuffering = (event) => {
      console.log('Buffering event:', event);
    };

    player.addEventListener('buffering', onBuffering);
    
    return () => {
      player.removeEventListener('buffering', onBuffering);
    };
  }, [player]);

  const handleAdvancedSeek = (seconds) => {
    if (player) {
      const currentTime = player.getPlayheadTimeAsDate();
      const newTime = new Date(currentTime.getTime() + seconds * 1000);
      player.seekToLiveEdge();
    }
  };

  return (
    <div>
      <button onClick={() => handleAdvancedSeek(30)}>
        Skip 30s
      </button>
      <button onClick={() => player?.configure({
        streaming: { bufferingGoal: 60 }
      })}>
        Increase Buffer
      </button>
    </div>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      {/* Optimized State Hooks */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Optimized State Hooks</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          These hooks provide access to specific player state properties and help prevent unnecessary 
          re-renders by only updating when their specific values change.
        </p>

        {/* Playback State Hooks */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Playback State Hooks</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">usePaused</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Returns whether the player is currently paused.</p>
              <CodePreview
                code={`import { usePaused } from '@smart-tv/player';

function PlayPauseButton() {
  const paused = usePaused();
  
  return (
    <button className="play-pause-btn">
      {paused ? '▶️' : '⏸️'}
    </button>
  );
}`}
                language="tsx"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">useCurrentTime & useDuration</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Access current playback time and total duration.</p>
              <CodePreview
                code={`import { useCurrentTime, useDuration } from '@smart-tv/player';

function TimeDisplay() {
  const currentTime = useCurrentTime();
  const duration = useDuration();
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
  };
  
  return (
    <div className="time-display">
      {formatTime(currentTime)} / {formatTime(duration)}
    </div>
  );
}`}
                language="tsx"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">useTimeProgress</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Returns playback progress as a percentage (0-100).</p>
              <CodePreview
                code={`import { useTimeProgress } from '@smart-tv/player';

function ProgressIndicator() {
  const progress = useTimeProgress();
  
  return (
    <div className="progress-container">
      <div 
        className="progress-bar"
        style={{ width: \`\${progress}%\` }}
      />
      <span className="progress-text">{Math.round(progress)}%</span>
    </div>
  );
}`}
                language="tsx"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">useLoading</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Returns whether the player is currently loading content.</p>
              <CodePreview
                code={`import { useLoading } from '@smart-tv/player';

function LoadingSpinner() {
  const loading = useLoading();
  
  if (!loading) return null;
  
  return (
    <div className="loading-overlay">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
}`}
                language="tsx"
              />
            </div>
          </div>
        </div>

        {/* Volume Hooks */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Volume Hooks</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">useVolume & useMuted</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Access volume level and mute state.</p>
              <CodePreview
                code={`import { useVolume, useMuted } from '@smart-tv/player';

function VolumeIndicator() {
  const volume = useVolume();
  const muted = useMuted();
  
  const getVolumeIcon = () => {
    if (muted || volume === 0) return '🔇';
    if (volume < 0.3) return '🔈';
    if (volume < 0.7) return '🔉';
    return '🔊';
  };
  
  return (
    <div className="volume-indicator">
      <span className="volume-icon">{getVolumeIcon()}</span>
      <span className="volume-level">
        {muted ? 'Muted' : \`\${Math.round(volume * 100)}%\`}
      </span>
    </div>
  );
}`}
                language="tsx"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">useVolumeState</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Returns both volume and muted state in a single object.</p>
              <CodePreview
                code={`import { useVolumeState } from '@smart-tv/player';

function VolumeControls() {
  const { volume, muted } = useVolumeState();
  
  return (
    <div className="volume-controls">
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={muted ? 0 : volume}
        onChange={(e) => {
          // Volume change logic handled by player context
        }}
      />
      <span>{muted ? 'Muted' : \`\${Math.round(volume * 100)}%\`}</span>
    </div>
  );
}`}
                language="tsx"
              />
            </div>
          </div>
        </div>

        {/* Fullscreen & PiP Hooks */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Fullscreen & Picture-in-Picture Hooks</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">useFullscreen</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Returns current fullscreen state.</p>
              <CodePreview
                code={`import { useFullscreen } from '@smart-tv/player';

function FullscreenButton() {
  const fullscreen = useFullscreen();
  
  return (
    <button className="fullscreen-btn">
      {fullscreen ? '⛶' : '⛶'} {fullscreen ? 'Exit' : 'Enter'} Fullscreen
    </button>
  );
}`}
                language="tsx"
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">usePictureInPicture</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Returns current picture-in-picture state.</p>
              <CodePreview
                code={`import { usePictureInPicture } from '@smart-tv/player';

function PiPButton() {
  const pictureInPicture = usePictureInPicture();
  
  return (
    <button className="pip-btn">
      {pictureInPicture ? '📱➡️📺' : '📺➡️📱'} 
      {pictureInPicture ? 'Exit' : 'Enter'} PiP
    </button>
  );
}`}
                language="tsx"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Track Hooks */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Track Hooks</h2>
        
        {/* Audio Tracks */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">useAudioTracks</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Returns available audio tracks and currently selected track.
          </p>
          
          <CodePreview
            code={`import { useAudioTracks } from '@smart-tv/player';

function AudioTrackSelector() {
  const audioTracks = useAudioTracks();
  
  if (audioTracks.length <= 1) return null;
  
  return (
    <div className="audio-track-selector">
      <label>Audio Language:</label>
      <select 
        value={audioTracks.find(track => track.active)?.id || ''}
        onChange={(e) => {
          // Track selection logic handled by player context
          console.log('Selected audio track:', e.target.value);
        }}
      >
        {audioTracks.map(track => (
          <option key={track.id} value={track.id}>
            {track.label || track.language}
          </option>
        ))}
      </select>
    </div>
  );
}`}
            language="tsx"
          />
        </div>

        {/* Video Tracks */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">useVideoTracks</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Returns available video quality tracks and currently selected track.
          </p>
          
          <CodePreview
            code={`import { useVideoTracks } from '@smart-tv/player';

function QualitySelector() {
  const videoTracks = useVideoTracks();
  
  const formatQuality = (track) => {
    const quality = \`\${track.height}p\`;
    const bandwidth = track.bandwidth ? 
      \` (\${Math.round(track.bandwidth / 1000)}kbps)\` : '';
    return quality + bandwidth;
  };
  
  return (
    <div className="quality-selector">
      <label>Video Quality:</label>
      <select 
        value={videoTracks.find(track => track.active)?.id || 'auto'}
        onChange={(e) => {
          console.log('Selected quality:', e.target.value);
        }}
      >
        <option value="auto">Auto</option>
        {videoTracks.map(track => (
          <option key={track.id} value={track.id}>
            {formatQuality(track)}
          </option>
        ))}
      </select>
    </div>
  );
}`}
            language="tsx"
          />
        </div>

        {/* Text Tracks */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">useTextTracks</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Returns available subtitle/caption tracks and currently selected track.
          </p>
          
          <CodePreview
            code={`import { useTextTracks } from '@smart-tv/player';

function SubtitleSelector() {
  const textTracks = useTextTracks();
  
  return (
    <div className="subtitle-selector">
      <label>Subtitles:</label>
      <select 
        value={textTracks.find(track => track.active)?.id || 'off'}
        onChange={(e) => {
          console.log('Selected subtitle:', e.target.value);
        }}
      >
        <option value="off">Off</option>
        {textTracks.map(track => (
          <option key={track.id} value={track.id}>
            {track.label || track.language} ({track.kind})
          </option>
        ))}
      </select>
    </div>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      {/* Action Hooks */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Action Hooks</h2>
        
        {/* usePlayerActions */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">usePlayerActions</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Provides action functions for controlling playback without causing re-renders.
          </p>
          
          <CodePreview
            code={`import { usePlayerActions } from '@smart-tv/player';

function PlayerControlButtons() {
  const {
    play,
    pause,
    seek,
    setVolume,
    setMuted,
    enterFullscreen,
    exitFullscreen,
    selectAudioTrack,
    selectVideoTrack,
    selectTextTrack,
  } = usePlayerActions();
  
  const handleSkip = (seconds) => {
    // Seek relative to current time
    seek({ relative: seconds });
  };
  
  const handleQualityChange = (trackId) => {
    selectVideoTrack(trackId);
  };
  
  return (
    <div className="player-controls">
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={() => handleSkip(-10)}>-10s</button>
      <button onClick={() => handleSkip(10)}>+10s</button>
      <button onClick={() => setVolume(0.5)}>50% Volume</button>
      <button onClick={() => setMuted(true)}>Mute</button>
      <button onClick={enterFullscreen}>Fullscreen</button>
    </div>
  );
}`}
            language="tsx"
          />
        </div>

        {/* usePlayerActionsOnly */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">usePlayerActionsOnly</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Similar to usePlayerActions but guaranteed to never cause re-renders. 
            Use this in components that only need to trigger actions.
          </p>
          
          <CodePreview
            code={`import { usePlayerActionsOnly } from '@smart-tv/player';

function QuickActionButtons() {
  const actions = usePlayerActionsOnly();
  
  // This component will never re-render due to player state changes
  return (
    <div className="quick-actions">
      <button onClick={() => actions.seek({ relative: -10 })}>
        ⏪ 10s
      </button>
      <button onClick={actions.togglePlayPause}>
        ⏯️
      </button>
      <button onClick={() => actions.seek({ relative: 10 })}>
        10s ⏩
      </button>
      <button onClick={actions.toggleMute}>
        🔇
      </button>
      <button onClick={actions.toggleFullscreen}>
        ⛶
      </button>
    </div>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      {/* Playlist Hooks */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Playlist Hooks</h2>
        
        {/* usePlaylist */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">usePlaylist</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Main playlist hook providing access to playlist state and actions.
          </p>
          
          <CodePreview
            code={`import { usePlaylist } from '@smart-tv/player';

function PlaylistControls() {
  const {
    // State
    items,
    currentIndex,
    currentItem,
    hasNext,
    hasPrevious,
    isShuffled,
    isLooped,
    
    // Actions
    playItem,
    playNext,
    playPrevious,
    shuffle,
    toggleLoop,
    addItem,
    removeItem,
  } = usePlaylist();
  
  return (
    <div className="playlist-controls">
      <div className="current-item">
        <h3>{currentItem?.title}</h3>
        <p>Item {currentIndex + 1} of {items.length}</p>
      </div>
      
      <div className="playlist-actions">
        <button 
          onClick={playPrevious} 
          disabled={!hasPrevious}
        >
          ⏮️ Previous
        </button>
        <button 
          onClick={playNext} 
          disabled={!hasNext}
        >
          ⏭️ Next
        </button>
        <button 
          onClick={shuffle}
          className={isShuffled ? 'active' : ''}
        >
          🔀 Shuffle
        </button>
        <button 
          onClick={toggleLoop}
          className={isLooped ? 'active' : ''}
        >
          🔁 Loop
        </button>
      </div>
    </div>
  );
}`}
            language="tsx"
          />
        </div>

        {/* usePlaylistState & usePlaylistActions */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">usePlaylistState & usePlaylistActions</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Separated hooks for playlist state and actions to optimize performance.
          </p>
          
          <CodePreview
            code={`import { usePlaylistState, usePlaylistActions } from '@smart-tv/player';

// Component that only displays playlist state (won't re-render on action calls)
function PlaylistDisplay() {
  const { items, currentIndex, currentItem } = usePlaylistState();
  
  return (
    <div className="playlist-display">
      <h2>Now Playing</h2>
      <div className="current-track">
        <img src={currentItem?.poster} alt={currentItem?.title} />
        <div>
          <h3>{currentItem?.title}</h3>
          <p>{currentItem?.description}</p>
        </div>
      </div>
      <p>Track {currentIndex + 1} of {items.length}</p>
    </div>
  );
}

// Component that only handles actions (minimal re-renders)
function PlaylistActionButtons() {
  const { playNext, playPrevious, shuffle, toggleLoop } = usePlaylistActions();
  
  return (
    <div className="playlist-actions">
      <button onClick={playPrevious}>⏮️</button>
      <button onClick={playNext}>⏭️</button>
      <button onClick={shuffle}>🔀</button>
      <button onClick={toggleLoop}>🔁</button>
    </div>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      {/* Custom Hook Examples */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Custom Hook Examples</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Examples of building custom hooks using the base player hooks.
        </p>

        {/* usePlayerProgress */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Custom Progress Hook</h3>
          
          <CodePreview
            code={`import { useCurrentTime, useDuration } from '@smart-tv/player';

// Custom hook for formatted progress information
function usePlayerProgress() {
  const currentTime = useCurrentTime();
  const duration = useDuration();
  
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hrs > 0) {
      return \`\${hrs}:\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
    }
    return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
  };
  
  return {
    currentTime,
    duration,
    progress: duration > 0 ? (currentTime / duration) * 100 : 0,
    remainingTime: duration - currentTime,
    formattedCurrentTime: formatTime(currentTime),
    formattedDuration: formatTime(duration),
    formattedRemainingTime: formatTime(duration - currentTime),
  };
}

// Usage
function ProgressDisplay() {
  const {
    progress,
    formattedCurrentTime,
    formattedDuration,
    formattedRemainingTime
  } = usePlayerProgress();
  
  return (
    <div className="progress-display">
      <div className="time-info">
        <span>{formattedCurrentTime}</span>
        <span>-{formattedRemainingTime}</span>
        <span>{formattedDuration}</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: \`\${progress}%\` }}
        />
      </div>
    </div>
  );
}`}
            language="tsx"
          />
        </div>

        {/* useKeyboardControls */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Custom Keyboard Controls Hook</h3>
          
          <CodePreview
            code={`import { useEffect } from 'react';
import { usePlayerActions, usePaused, useVolume } from '@smart-tv/player';

function useKeyboardControls(enabled = true) {
  const actions = usePlayerActions();
  const paused = usePaused();
  const volume = useVolume();
  
  useEffect(() => {
    if (!enabled) return;
    
    const handleKeyPress = (event) => {
      // Prevent default browser behavior
      switch (event.code) {
        case 'Space':
          event.preventDefault();
          paused ? actions.play() : actions.pause();
          break;
          
        case 'ArrowLeft':
          event.preventDefault();
          actions.seek({ relative: -10 });
          break;
          
        case 'ArrowRight':
          event.preventDefault();
          actions.seek({ relative: 10 });
          break;
          
        case 'ArrowUp':
          event.preventDefault();
          actions.setVolume(Math.min(1, volume + 0.1));
          break;
          
        case 'ArrowDown':
          event.preventDefault();
          actions.setVolume(Math.max(0, volume - 0.1));
          break;
          
        case 'KeyM':
          event.preventDefault();
          actions.toggleMute();
          break;
          
        case 'KeyF':
          event.preventDefault();
          actions.toggleFullscreen();
          break;
          
        case 'Escape':
          event.preventDefault();
          actions.exitFullscreen();
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [enabled, actions, paused, volume]);
}

// Usage
function PlayerWithKeyboardControls() {
  useKeyboardControls(true);
  
  return (
    <div className="player-with-keyboard">
      <p>Keyboard shortcuts enabled:</p>
      <ul>
        <li>Space: Play/Pause</li>
        <li>←/→: Seek ±10s</li>
        <li>↑/↓: Volume ±10%</li>
        <li>M: Toggle Mute</li>
        <li>F: Toggle Fullscreen</li>
      </ul>
    </div>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      {/* Hook Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">✅ Do</h3>
            <ul className="text-green-800 dark:text-green-300 text-sm space-y-1">
              <li>• Use specific hooks (usePaused) instead of general ones (useMediaContext)</li>
              <li>• Use usePlayerActionsOnly for action-only components</li>
              <li>• Create custom hooks for complex logic</li>
              <li>• Separate state and actions when possible</li>
              <li>• Use React.memo for components that render frequently</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
            <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">❌ Avoid</h3>
            <ul className="text-red-800 dark:text-red-300 text-sm space-y-1">
              <li>• Using useMediaContext when you only need one property</li>
              <li>• Calling hooks conditionally</li>
              <li>• Creating effects that depend on rapidly changing values</li>
              <li>• Accessing player instance directly unless necessary</li>
              <li>• Overusing useCallback/useMemo with hook values</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="/components/player/types" 
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">→ Types</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">TypeScript definitions for all hooks and their return types</p>
          </a>
          <a 
            href="/components/player/examples" 
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">→ Examples</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">See hooks in action with complete examples</p>
          </a>
          <a 
            href="/components/player/components" 
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">→ Components</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Learn how components use these hooks internally</p>
          </a>
        </div>
      </div>
    </div>
  );
}
