/* eslint-disable react/no-unescaped-entities */
import { CodePreview } from '../../../../../components';

export default function PlayerComponents() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Components</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Complete reference for all Smart TV Player components, their props, and usage examples.
        </p>
      </div>

      {/* Core Components */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Core Components</h2>
        
        {/* MediaProvider */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">MediaProvider</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Context provider that manages player state and provides it to all child components. 
            This component must wrap all other player components.
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Props</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-3 py-2 text-left text-gray-900 dark:text-gray-100">Prop</th>
                    <th className="px-3 py-2 text-left text-gray-900 dark:text-gray-100">Type</th>
                    <th className="px-3 py-2 text-left text-gray-900 dark:text-gray-100">Default</th>
                    <th className="px-3 py-2 text-left text-gray-900 dark:text-gray-100">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">children</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-600 dark:text-gray-300">ReactNode</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">-</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Child components that will have access to player context</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">defaultSettings</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">object</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">{}</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Default player settings (volume, muted, autoPlay, etc.)</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">onPlayerReady</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">function</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">-</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Callback when player is ready</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">onError</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">function</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">-</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Global error handler</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <CodePreview
            code={`import { MediaProvider } from '@smart-tv/player';

<MediaProvider
  defaultSettings={{
    volume: 0.8,
    muted: false,
    autoPlay: false,
  }}
  onPlayerReady={(player) => console.log('Ready:', player)}
  onError={(error) => console.error('Error:', error)}
>
  {/* Your player components */}
</MediaProvider>`}
            language="tsx"
          />
        </div>

        {/* VideoPlayer */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">VideoPlayer</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Main video component that renders the video element and handles playback using Shaka Player.
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Props</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-3 py-2 text-left">Prop</th>
                    <th className="px-3 py-2 text-left">Type</th>
                    <th className="px-3 py-2 text-left">Required</th>
                    <th className="px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">src</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">string | PlayerSource[]</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Yes</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Video source URL or array of sources</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">poster</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">string</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">No</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Poster image URL</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">autoPlay</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">boolean</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">No</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Auto-start playback</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">controls</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">boolean</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">No</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Show native browser controls</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">drm</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">DrmConfig</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">No</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">DRM configuration for protected content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <CodePreview
            code={`import { VideoPlayer } from '@smart-tv/player';

<VideoPlayer
  src="https://example.com/video.m3u8"
  poster="https://example.com/poster.jpg"
  autoPlay={false}
  controls={false}
  preload="metadata"
  className="w-full h-full"
  onReady={() => console.log('Video ready')}
  onPlay={() => console.log('Playing')}
  onPause={() => console.log('Paused')}
  onTimeUpdate={(time, duration) => {
    console.log(\`Progress: \${time}/\${duration}\`);
  }}
/>`}
            language="tsx"
          />
        </div>

        {/* PlayerController */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">PlayerController</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Customizable player controls overlay with multiple layout styles and custom button support.
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Props</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-3 py-2 text-left">Prop</th>
                    <th className="px-3 py-2 text-left">Type</th>
                    <th className="px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">layoutStyle</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">"youtube" | "netflix" | "minimal" | "tv-remote" | "mobile"</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Predefined layout style</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">layout</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">PlayerControllerLayout</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Custom layout configuration</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">title</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">string</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Video title to display</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">subtitle</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">string</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Video subtitle/description</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">customButtons</td>
                    <td className="px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">PlayerButtonConfig[]</td>
                    <td className="px-3 py-2 text-gray-600 dark:text-gray-300">Additional custom buttons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <CodePreview
            code={`import { PlayerController } from '@smart-tv/player';

<PlayerController
  layoutStyle="youtube"
  title="Episode 1: The Beginning"
  subtitle="Season 1 • 42 min"
  customButtons={[
    {
      action: 'custom',
      position: 'bottom',
      align: 'right',
      label: 'Share',
      icon: <ShareIcon />,
      onPress: () => handleShare(),
    }
  ]}
  onButtonPress={(action, config) => {
    console.log('Button pressed:', action);
  }}
/>`}
            language="tsx"
          />
        </div>
      </div>

      {/* Control Components */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Control Components</h2>
        
        {/* PlayButton */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">PlayButton</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Standalone play/pause toggle button component.
          </p>
          
          <CodePreview
            code={`import { PlayButton } from '@smart-tv/player';

<PlayButton
  size="lg"
  variant="default"
  className="player-bg-white player-bg-opacity-20 player-rounded-full"
  showIcon={true}
  onClick={() => console.log('Play/pause clicked')}
/>`}
            language="tsx"
          />
        </div>

        {/* SeekBar */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">SeekBar</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Progress bar component for seeking through video content.
          </p>
          
          <CodePreview
            code={`import { SeekBar } from '@smart-tv/player';

<SeekBar
  showPreview={true}
  showThumbnails={true}
  thumbnailSrc="https://example.com/thumbnails.vtt"
  stepTime={10}
  className="player-w-full"
  onSeek={(time) => console.log('Seeking to:', time)}
  onSeekStart={() => console.log('Seek started')}
  onSeekEnd={() => console.log('Seek ended')}
/>`}
            language="tsx"
          />
        </div>

        {/* VolumeControl */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">VolumeControl</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Volume slider and mute button component.
          </p>
          
          <CodePreview
            code={`import { VolumeControl } from '@smart-tv/player';

<VolumeControl
  orientation="horizontal"
  showMuteButton={true}
  step={0.1}
  className="player-flex player-items-center player-gap-2"
  onVolumeChange={(volume) => console.log('Volume:', volume)}
  onMuteToggle={() => console.log('Mute toggled')}
/>`}
            language="tsx"
          />
        </div>

        {/* Fullscreen */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Fullscreen</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Fullscreen toggle button component.
          </p>
          
          <CodePreview
            code={`import { Fullscreen } from '@smart-tv/player';

<Fullscreen
  className="player-p-2 player-rounded-md"
  onEnterFullscreen={() => console.log('Entering fullscreen')}
  onExitFullscreen={() => console.log('Exiting fullscreen')}
/>`}
            language="tsx"
          />
        </div>

        {/* PictureInPicture */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">PictureInPicture</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Picture-in-picture toggle button component.
          </p>
          
          <CodePreview
            code={`import { PictureInPicture } from '@smart-tv/player';

<PictureInPicture
  className="player-p-2 player-rounded-md"
  onEnter={() => console.log('Entering PiP')}
  onExit={() => console.log('Exiting PiP')}
/>`}
            language="tsx"
          />
        </div>
      </div>

      {/* Track Components */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Track Components</h2>
        
        {/* TrackSelector */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">TrackSelector</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Generic track selection component for audio, video, and text tracks.
          </p>
          
          <CodePreview
            code={`import { TrackSelector } from '@smart-tv/player';

<TrackSelector
  type="audio"
  title="Audio Language"
  className="player-bg-black player-bg-opacity-80 player-rounded-lg"
  onTrackSelect={(trackId) => console.log('Selected track:', trackId)}
  onClose={() => console.log('Selector closed')}
/>`}
            language="tsx"
          />
        </div>

        {/* AudioTrack */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">AudioTrack</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Audio track selection button and menu.
          </p>
          
          <CodePreview
            code={`import { AudioTrack } from '@smart-tv/player';

<AudioTrack
  className="player-p-2 player-rounded-md"
  showLabel={true}
  onTrackChange={(track) => console.log('Audio track changed:', track)}
/>`}
            language="tsx"
          />
        </div>

        {/* TextTrack */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">TextTrack</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Subtitle/caption track selection component.
          </p>
          
          <CodePreview
            code={`import { TextTrack } from '@smart-tv/player';

<TextTrack
  className="player-p-2 player-rounded-md"
  showLabel={true}
  autoHide={true}
  onTrackChange={(track) => console.log('Subtitle track changed:', track)}
/>`}
            language="tsx"
          />
        </div>

        {/* VideoTrack */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">VideoTrack</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Video quality/resolution selection component.
          </p>
          
          <CodePreview
            code={`import { VideoTrack } from '@smart-tv/player';

<VideoTrack
  className="player-p-2 player-rounded-md"
  showQuality={true}
  showBandwidth={false}
  onTrackChange={(track) => console.log('Video quality changed:', track)}
/>`}
            language="tsx"
          />
        </div>

        {/* SpeedSelector */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">SpeedSelector</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Playback speed selection component.
          </p>
          
          <CodePreview
            code={`import { SpeedSelector } from '@smart-tv/player';

<SpeedSelector
  speeds={[0.5, 0.75, 1, 1.25, 1.5, 2]}
  defaultSpeed={1}
  className="player-p-2 player-rounded-md"
  onSpeedChange={(speed) => console.log('Speed changed:', speed)}
/>`}
            language="tsx"
          />
        </div>
      </div>

      {/* Playlist Components */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Playlist Components</h2>
        
        {/* PlaylistProvider */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">PlaylistProvider</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Context provider for playlist functionality. Must wrap playlist-related components.
          </p>
          
          <CodePreview
            code={`import { PlaylistProvider } from '@smart-tv/player';

<PlaylistProvider
  items={playlistItems}
  autoPlayNext={true}
  loop={false}
  shuffle={false}
  onItemChange={(item, index) => {
    console.log('Now playing:', item.title, 'at index:', index);
  }}
  onPlaylistEnd={() => console.log('Playlist ended')}
>
  {/* Playlist components */}
</PlaylistProvider>`}
            language="tsx"
          />
        </div>

        {/* PlaylistManager */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">PlaylistManager</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Complete playlist interface with item list and controls.
          </p>
          
          <CodePreview
            code={`import { PlaylistManager } from '@smart-tv/player';

<PlaylistManager
  className="player-w-80 player-bg-gray-900 player-text-white"
  showThumbnails={true}
  showDuration={true}
  maxHeight="player-h-96"
  onItemSelect={(item, index) => {
    console.log('Item selected:', item.title);
  }}
/>`}
            language="tsx"
          />
        </div>

        {/* Playlist */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Playlist</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Simple playlist display component.
          </p>
          
          <CodePreview
            code={`import { Playlist } from '@smart-tv/player';

<Playlist
  className="player-space-y-2"
  itemClassName="player-p-3 player-rounded-lg"
  activeClassName="player-bg-blue-600 player-text-white"
  showIndex={true}
  showDuration={true}
/>`}
            language="tsx"
          />
        </div>

        {/* PlaylistButton */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">PlaylistButton</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Button to toggle playlist visibility.
          </p>
          
          <CodePreview
            code={`import { PlaylistButton } from '@smart-tv/player';

<PlaylistButton
  className="player-p-2 player-rounded-md"
  showLabel={true}
  onToggle={(visible) => console.log('Playlist visible:', visible)}
/>`}
            language="tsx"
          />
        </div>
      </div>

      {/* Settings Components */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Settings Components</h2>
        
        {/* SettingsPanel */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">SettingsPanel</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Comprehensive settings panel with quality, audio, subtitle, and speed controls.
          </p>
          
          <CodePreview
            code={`import { SettingsPanel } from '@smart-tv/player';

<SettingsPanel
  className="player-bg-black player-bg-opacity-90 player-rounded-lg"
  sections={['quality', 'audio', 'subtitles', 'speed']}
  showTitles={true}
  onClose={() => console.log('Settings closed')}
  onSettingChange={(type, value) => {
    console.log('Setting changed:', type, value);
  }}
/>`}
            language="tsx"
          />
        </div>

        {/* AutoPlayCountdown */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">AutoPlayCountdown</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Countdown component for auto-playing next episode/video.
          </p>
          
          <CodePreview
            code={`import { AutoPlayCountdown } from '@smart-tv/player';

<AutoPlayCountdown
  duration={10}
  nextItem={{
    title: "Next Episode",
    subtitle: "Episode 2: The Journey Continues"
  }}
  className="player-bg-black player-bg-opacity-80 player-rounded-lg"
  onCancel={() => console.log('Auto-play cancelled')}
  onComplete={() => console.log('Auto-play starting')}
/>`}
            language="tsx"
          />
        </div>
      </div>

      {/* Common Props */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Common Props</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Props that are available across multiple components:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left">Prop</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-mono text-xs">className</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3">Additional CSS classes (with player- prefix)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">style</td>
                <td className="px-4 py-3 font-mono text-xs">CSSProperties</td>
                <td className="px-4 py-3">Inline styles</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">focusKey</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3">Unique identifier for focus management</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">onFocus</td>
                <td className="px-4 py-3 font-mono text-xs">function</td>
                <td className="px-4 py-3">Focus event handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">onBlur</td>
                <td className="px-4 py-3 font-mono text-xs">function</td>
                <td className="px-4 py-3">Blur event handler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="/components/player/hooks" 
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">→ Hooks</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Learn about state management hooks</p>
          </a>
          <a 
            href="/components/player/types" 
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">→ Types</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">TypeScript type definitions</p>
          </a>
          <a 
            href="/components/player/examples" 
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">→ Examples</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Complete implementation examples</p>
          </a>
        </div>
      </div>
    </div>
  );
}
