import { FocusContext, useFocusable } from "@smart-tv/ui";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { usePaused, useTimeProgress } from "../hooks/useOptimizedHooks";
import {
  PlayerButtonAction,
  PlayerButtonConfig,
  PlayerControllerProps,
  buttonSizeMap,
  defaultButtonConfigs,
} from "../types/PlayerControllerTypes";
import {
  getLayoutByStyle,
  mergeLayoutWithCustomButtons,
} from "../types/PlayerLayouts";
import { cn, formatTime } from "../utils";
import { Fullscreen } from "./Fullscreen";
import { PictureInPicture } from "./PictureInPicture";
import { PlayButton } from "./PlayButton";
import { Playlist } from "./Playlist";
import { PlaylistButton } from "./PlaylistButton";
import { PlaylistManager } from "./PlaylistManager";
import { SeekBar } from "./SeekBar";
import SettingsPanel from "./SettingsPanel";
import { TrackSelector } from "./TrackSelector";

const GetTime = () => {
  const { currentTime, duration } = useTimeProgress();
  return (
    <div className="player-text-white player-text-sm player-font-medium player-ml-2">
      {formatTime(currentTime)} / {formatTime(duration)}
    </div>
  );
};

// Button component
const Button = ({
  config,
  children: buttonChildren,
  handleButtonAction,
}: {
  config: PlayerButtonConfig;
  children: React.ReactNode;
  handleButtonAction: (
    action: PlayerButtonAction,
    config: PlayerButtonConfig
  ) => void;
}) => {
  const { ref: buttonRef, focused: buttonFocused } = useFocusable({
    focusKey:
      config.focusKey || `${config.action}-${config.position}-${config.align}`,
    onEnterPress: () => handleButtonAction(config.action, config),
  });

  const defaultConfig = defaultButtonConfigs[config.action] || {};
  const size = config.size || defaultConfig.size || "md";
  const sizeClass = buttonSizeMap[size];

  return (
    <button
      ref={buttonRef}
      onClick={() => handleButtonAction(config.action, config)}
      title={config.tooltip || config.label}
      disabled={config.disabled}
      style={config.style}
      className={cn(
        "player-flex player-items-center player-justify-center player-text-white player-transition-all player-duration-200",
        "hover:player-bg-white hover:player-bg-opacity-20",
        "focus:player-outline-none",
        "disabled:player-opacity-50 disabled:player-cursor-not-allowed",
        sizeClass,
        defaultConfig.className,
        config.className,
        buttonFocused && config.selectedClass,
        buttonFocused &&
          "player-bg-white player-bg-opacity-30 player-ring-2 player-ring-white player-ring-opacity-60 player-scale-110"
      )}
    >
      {buttonChildren}
    </button>
  );
};

const PlayerController: React.FC<PlayerControllerProps> = ({
  layout,
  layoutStyle = "youtube",
  customButtons = [],
  className,
  style,
  focusKey = "player-controller",
  children,
  title,
  subtitle,
  playlist,
  showPlaylist = false,
  showTrackSelector = false,
  trackSelectorType = "audio",
  onButtonPress,
  onLayoutChange,
}) => {
  // Get the layout configuration
  const currentLayout = layout || getLayoutByStyle(layoutStyle);
  const finalLayout =
    customButtons.length > 0
      ? mergeLayoutWithCustomButtons(currentLayout, customButtons)
      : currentLayout;

  // Player state
  const paused = usePaused();
  //   const { currentTime, duration } = useTimeProgress();

  // UI state
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(showPlaylist);
  const [isTrackSelectorVisible, setIsTrackSelectorVisible] =
    useState(showTrackSelector);
  const [currentTrackSelectorType, setCurrentTrackSelectorType] =
    useState(trackSelectorType);
  const [isSettingsPanelVisible, setIsSettingsPanelVisible] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Focus management
  const {
    ref,
    focused,
    hasFocusedChild,
    focusKey: controllerFocusKey,
  } = useFocusable({
    focusKey,
    trackChildren: true,
    saveLastFocusedChild: true,
  });

  // Centralized function to start/restart hide timer
  const startHideTimer = useCallback(() => {
    if (!finalLayout.autoHide) return;

    // Clear existing timer
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    // Check if we should keep controls visible (paused, modals open, or has focus)
    const shouldStayVisible =
      paused ||
      isTrackSelectorVisible ||
      isSettingsPanelVisible ||
      isPlaylistVisible;

    if (shouldStayVisible) {
      // Keep controls visible, don't start timer
      setIsVisible(true);
    } else {
      // Start new hide timer
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, finalLayout.autoHideDelay || 4000);
    }
  }, [
    finalLayout.autoHide,
    finalLayout.autoHideDelay,
    paused,
    isTrackSelectorVisible,
    isSettingsPanelVisible,
    isPlaylistVisible,
    focused,
    hasFocusedChild,
  ]);

  // Auto-hide logic - show controls on any state change, then start timer
  useEffect(() => {
    if (!finalLayout.autoHide) return;

    // Start/restart the hide timer
    startHideTimer();

    // Cleanup on unmount
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, [
    finalLayout.autoHide,
    startHideTimer,
    focused,
    hasFocusedChild,
    isTrackSelectorVisible,
    isSettingsPanelVisible,
    isPlaylistVisible,
    paused,
  ]);

  // Show on mouse/keyboard activity
  useEffect(() => {
    if (!finalLayout.showOnHover && !finalLayout.autoHide) return;

    const handleActivity = (e: Event) => {
      // Show controls on any user interaction
      setIsVisible(true);
      // Restart hide timer
      startHideTimer();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Show controls on any key press
      setIsVisible(true);
      // Restart hide timer
      startHideTimer();
    };

    // Listen for various user interactions
    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("click", handleActivity);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("wheel", handleActivity);

    return () => {
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("click", handleActivity);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("wheel", handleActivity);
    };
  }, [finalLayout.showOnHover, finalLayout.autoHide, startHideTimer]);

  // Button action handlers
  const handleButtonAction = useCallback(
    (action: PlayerButtonAction, config: PlayerButtonConfig) => {
      // Built-in action handlers
      switch (action) {
        case "playlisttoggle":
          setIsPlaylistVisible(!isPlaylistVisible);
          break;
        case "quality":
          setCurrentTrackSelectorType("video");
          setIsTrackSelectorVisible(true);
          break;
        case "subtitles":
          setCurrentTrackSelectorType("text");
          setIsTrackSelectorVisible(true);
          break;
        case "audio":
          setCurrentTrackSelectorType("audio");
          setIsTrackSelectorVisible(true);
          break;
        case "playbackrate":
          setCurrentTrackSelectorType("playbackRate");
          setIsTrackSelectorVisible(true);
          break;
        case "settings":
          setIsSettingsPanelVisible(!isSettingsPanelVisible);
          break;
        default:
          // Call custom handler if provided
          if (config.onPress) {
            config.onPress();
          }
          break;
      }

      // Call the parent handler
      onButtonPress?.(action, config);
    },
    [isPlaylistVisible, isSettingsPanelVisible, onButtonPress]
  );

  // Close handlers
  const handleCloseTrackSelector = useCallback(() => {
    setIsTrackSelectorVisible(false);
  }, []);

  const handleCloseSettingsPanel = useCallback(() => {
    setIsSettingsPanelVisible(false);
  }, []);

  // Render button content based on action type
  const renderButtonContent = (config: PlayerButtonConfig) => {
    switch (config.action) {
      case "playpause":
        const playButtonSize = ["sm", "md", "lg"].includes(config.size || "md")
          ? (config.size as "sm" | "md" | "lg") || "md"
          : "md";
        return (
          <PlayButton
            focusKey={config.focusKey || "play-button"}
            size={playButtonSize}
            className="player-w-full player-h-full"
          />
        );
        break;

      case "progressbar":
      case "seekbar":
        return (
          <SeekBar
            focusKey={config.focusKey || "seek-bar"}
            className={cn("player-w-full player-flex-1", config.className)}
          />
        );

      case "time":
        return <GetTime />;

      case "title":
        return (
          <div className="player-flex player-flex-col">
            {title && (
              <div className="player-text-white player-text-lg player-font-bold">
                {title}
              </div>
            )}
            {subtitle && (
              <div className="player-text-white player-text-sm player-opacity-80">
                {subtitle}
              </div>
            )}
          </div>
        );

      case "fullscreentoggle":
        return (
          <Fullscreen
            className="player-w-full player-h-full"
            focusKey={config.focusKey || "fullscreen-button"}
          />
        );

      case "piptoggle":
        return (
          <PictureInPicture
            className="player-w-full player-h-full"
            focusKey={config.focusKey || "pip-button"}
          />
        );

      case "playlisttoggle":
        return (
          <PlaylistButton
            focusKey={config.focusKey || "playlist-button"}
            isActive={isPlaylistVisible}
            itemCount={
              playlist?.state?.rails?.reduce(
                (total: number, rail: any) => total + rail.items.length,
                0
              ) || 0
            }
            className="player-w-full player-h-full"
          />
        );

      default:
        // Render icon if provided
        if (config.icon) {
          return typeof config.icon === "function"
            ? config.icon()
            : config.icon;
        }

        // Default icons for common actions
        return renderDefaultIcon(config.action);
    }
  };

  // Default icons for actions
  const renderDefaultIcon = (action: PlayerButtonAction) => {
    const iconClass = "player-w-5 player-h-5";

    switch (action) {
      case "previous":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        );
      case "next":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        );
      case "mutetoggle":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
        );
      case "quality":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        );
      case "subtitles":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z" />
          </svg>
        );
      case "audio":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        );
      case "settings":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
          </svg>
        );
      case "like":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case "info":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Group buttons by position and align
  const groupedButtons = finalLayout.buttons.reduce(
    (acc, button) => {
      const key = `${button.position}-${button.align}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(button);
      return acc;
    },
    {} as Record<string, PlayerButtonConfig[]>
  );

  // Sort buttons within groups by order
  Object.keys(groupedButtons).forEach((key) => {
    groupedButtons[key].sort((a, b) => (a.order || 0) - (b.order || 0));
  });

  // Render buttons for a specific position and alignment
  const renderButtons = (position: string, align: string) => {
    const buttons = groupedButtons[`${position}-${align}`] || [];

    return (
      <div
        className={cn(
          "player-flex player-items-center player-flex-1",
          finalLayout.gap
        )}
      >
        {buttons.map((config, index) => {
          if (config.visible === false) return null;

          const content = renderButtonContent(config);

          // Handle special cases like progressbar and title
          if (config.action === "progressbar" || config.action === "seekbar") {
            return (
              <div key={index} className="player-flex-1">
                {content}
              </div>
            );
          }

          if (config.action === "title" || config.action === "time") {
            return (
              <div
                key={index}
                className="player-flex player-items-center player-flex-1"
              >
                {content}
              </div>
            );
          }
          if (config.action === "playpause") {
            return (
              <div
                key={index}
                className={cn(
                  "player-flex player-items-center player-justify-center player-w-10 player-h-10",
                  config.className
                )}
              >
                {content}
              </div>
            );
          }

          // Regular button
          return (
            <Button
              key={index}
              config={config}
              handleButtonAction={handleButtonAction}
            >
              {content}
            </Button>
          );
        })}
      </div>
    );
  };

  if (!isVisible && !isTrackSelectorVisible && !isSettingsPanelVisible) {
    return null;
  }

  return (
    <FocusContext.Provider value={controllerFocusKey}>
      <div className="player-absolute player-inset-0 player-pointer-events-none">
        {/* Playlist Component */}
        {playlist && isPlaylistVisible && (
          <Playlist
            state={{ ...playlist.state, isVisible: isPlaylistVisible }}
            config={playlist.config}
            callbacks={playlist.callbacks}
            focusKey="player-playlist"
            onClose={() => setIsPlaylistVisible(false)}
          />
        )}

        {/* Playlist Manager */}
        {playlist && (
          <PlaylistManager
            state={playlist.state}
            config={playlist.config}
            callbacks={playlist.callbacks}
            onItemChange={(item) =>
              console.log("Changing to item:", item.title)
            }
            onDrmConfigChange={(drm) => console.log("DRM config changed:", drm)}
          />
        )}

        {/* Main Controls */}
        <div
          ref={ref}
          className={cn(
            "player-absolute player-inset-0 player-pointer-events-auto player-flex player-flex-col player-justify-between player-p-4",
            finalLayout.background,
            finalLayout.padding,
            "player-transition-all player-duration-300 player-ease-out",
            isVisible ? "player-opacity-100" : "player-opacity-0",
            finalLayout.className,
            className
          )}
          style={{ ...finalLayout.style, ...style }}
        >
          {/* Top Section */}
          <div className="player-flex player-justify-between player-items-start">
            <div className="player-flex player-items-center">
              {renderButtons("top", "left")}
            </div>
            <div className="player-flex player-items-center player-flex-1">
              {renderButtons("top", "center")}
            </div>
            <div className="player-flex player-items-center">
              {renderButtons("top", "right")}
            </div>
          </div>

          {/* Center Section */}
          <div className="player-flex player-flex-1 player-flex-col player-justify-center">
            <div className="player-flex player-justify-between player-items-center">
              <div className="player-flex player-items-center">
                {renderButtons("center", "left")}
              </div>
              <div className="player-flex player-items-center player-flex-1">
                {renderButtons("center", "center")}
              </div>
              <div className="player-flex player-items-center">
                {renderButtons("center", "right")}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="player-flex player-flex-col player-space-y-4">
            {/* Top of bottom section */}
            <div className="player-flex player-justify-center">
              {renderButtons("bottom", "top")}
            </div>

            {/* Main bottom controls */}
            <div className="player-flex player-justify-between player-items-center">
              <div className="player-flex player-items-center">
                {renderButtons("bottom", "left")}
              </div>
              <div className="player-flex player-items-center player-flex-1">
                {renderButtons("bottom", "center")}
              </div>
              <div className="player-flex player-items-center">
                {renderButtons("bottom", "right")}
              </div>
            </div>

            {/* Bottom of bottom section */}
            <div className="player-flex player-justify-center">
              {renderButtons("bottom", "bottom")}
            </div>
          </div>

          {/* Custom children */}
          {children}
        </div>

        {/* Track Selector Modal */}
        {isTrackSelectorVisible && (
          <div className="player-absolute player-inset-0 player-bg-black player-bg-opacity-50 player-flex player-items-center player-justify-center player-pointer-events-auto">
            <TrackSelector
              type={
                currentTrackSelectorType === "playbackRate"
                  ? "audio"
                  : currentTrackSelectorType
              }
              focusKey="player-track-selector-modal"
              onClose={handleCloseTrackSelector}
              className="player-bg-gray-900 player-rounded-lg player-p-6 player-max-w-md player-w-full player-mx-4"
            />
          </div>
        )}

        {/* Settings Panel */}
        {isSettingsPanelVisible && (
          <SettingsPanel
            isVisible={true}
            onClose={handleCloseSettingsPanel}
            focusKey="player-settings-panel"
          />
        )}
      </div>
    </FocusContext.Provider>
  );
};

export default memo(PlayerController);
