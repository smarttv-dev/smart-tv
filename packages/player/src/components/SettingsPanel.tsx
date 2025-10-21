import { FocusContext, useFocusable } from "@smart-tv/ui";
import React, { memo, useCallback, useEffect, useState } from "react";
import { cn } from "../utils";
import { AudioTrack } from "./AudioTrack";
import { SpeedSelector } from "./SpeedSelector";
import { TextTrack } from "./TextTrack";
import { VideoTrack } from "./VideoTrack";

export interface SettingsPanelProps {
  isVisible: boolean;
  onClose: () => void;
  focusKey?: string;
  className?: string;
}

type SettingsSection = "main" | "quality" | "audio" | "subtitles" | "speed";

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isVisible,
  onClose,
  focusKey = "settings-panel",
  className,
}) => {
  const [activeSection, setActiveSection] = useState<SettingsSection>("main");

  const {
    ref,
    focusKey: panelFocusKey,
    focusSelf,
  } = useFocusable({
    focusKey,
    trackChildren: true,
    saveLastFocusedChild: true,
  });

  useEffect(() => {
    if (isVisible) {
      focusSelf();
      setActiveSection("main");
    }
  }, [isVisible, focusSelf]);

  const handleBackToMain = useCallback(() => {
    setActiveSection("main");
  }, []);

  const handleSectionChange = useCallback((section: SettingsSection) => {
    setActiveSection(section);
  }, []);

  if (!isVisible) return null;

  const SettingsButton = ({
    children,
    onClick,
    focusKey: buttonFocusKey,
    icon,
    showArrow = true,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    focusKey: string;
    icon?: React.ReactNode;
    showArrow?: boolean;
  }) => {
    const { ref: buttonRef, focused } = useFocusable({
      focusKey: buttonFocusKey,
      onEnterPress: onClick,
    });

    return (
      <button
        ref={buttonRef}
        onClick={onClick}
        className={cn(
          "player-w-full player-flex player-items-center player-justify-between player-p-4 player-text-left player-text-white",
          "hover:player-bg-white hover:player-bg-opacity-10",
          "focus:player-outline-none",
          focused && "player-bg-white player-bg-opacity-20 player-scale-105"
        )}
      >
        <div className="player-flex player-items-center player-gap-3">
          {icon && <div className="player-w-5 player-h-5">{icon}</div>}
          <span>{children}</span>
        </div>
        {showArrow && (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="player-w-5 player-h-5 player-text-gray-400"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        )}
      </button>
    );
  };

  const BackButton = ({ onBack }: { onBack: () => void }) => {
    const { ref: backRef, focused } = useFocusable({
      focusKey: "settings-back",
      onEnterPress: onBack,
    });

    return (
      <button
        ref={backRef}
        onClick={onBack}
        className={cn(
          "player-flex player-items-center player-gap-2 player-p-2 player-text-white player-mb-4",
          "hover:player-bg-white hover:player-bg-opacity-10 player-rounded",
          "focus:player-outline-none",
          focused && "player-bg-white player-bg-opacity-20"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="player-w-5 player-h-5"
        >
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        <span>Back</span>
      </button>
    );
  };

  const CloseButton = ({ onClose }: { onClose: () => void }) => {
    const { ref: closeRef, focused } = useFocusable({
      focusKey: "settings-close",
      onEnterPress: onClose,
    });

    return (
      <button
        ref={closeRef}
        onClick={onClose}
        className={cn(
          "player-absolute player-top-4 player-right-4 player-p-2 player-text-white player-rounded",
          "hover:player-bg-white hover:player-bg-opacity-10",
          "focus:player-outline-none",
          focused && "player-bg-white player-bg-opacity-20"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="player-w-6 player-h-6"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    );
  };

  const renderMainMenu = () => (
    <>
      <h2 className="player-text-xl player-font-bold player-text-white player-mb-6 player-pl-4">
        Settings
      </h2>

      <div className="player-space-y-1">
        <SettingsButton
          focusKey="settings-quality"
          onClick={() => handleSectionChange("quality")}
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="player-w-full player-h-full"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          }
        >
          Quality
        </SettingsButton>

        <SettingsButton
          focusKey="settings-audio"
          onClick={() => handleSectionChange("audio")}
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="player-w-full player-h-full"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          }
        >
          Audio Language
        </SettingsButton>

        <SettingsButton
          focusKey="settings-subtitles"
          onClick={() => handleSectionChange("subtitles")}
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="player-w-full player-h-full"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z" />
            </svg>
          }
        >
          Subtitles
        </SettingsButton>

        <SettingsButton
          focusKey="settings-speed"
          onClick={() => handleSectionChange("speed")}
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="player-w-full player-h-full"
            >
              <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.43z" />
              <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-5.66a2 2 0 0 0-2.83-2.83L12 11.17 7.76 6.93a2 2 0 0 0-2.83 2.83l5.66 5.65z" />
            </svg>
          }
        >
          Playback Speed
        </SettingsButton>
      </div>
    </>
  );

  const renderSubMenu = () => {
    const titles: Record<Exclude<SettingsSection, "main">, string> = {
      quality: "Video Quality",
      audio: "Audio Language",
      subtitles: "Subtitles",
      speed: "Playback Speed",
    };

    return (
      <>
        <BackButton onBack={handleBackToMain} />

        <h2 className="player-text-xl player-font-bold player-text-white player-mb-6 player-pl-4">
          {activeSection !== "main" ? titles[activeSection] : ""}
        </h2>

        <div className="player-flex-1 player-overflow-y-auto">
          {activeSection === "quality" && (
            <VideoTrack className="player-text-white player-p-0 player-bg-transparent" />
          )}
          {activeSection === "audio" && (
            <AudioTrack className="player-text-white player-p-0 player-bg-transparent" />
          )}
          {activeSection === "subtitles" && (
            <TextTrack className="player-text-white player-p-0 player-bg-transparent" />
          )}
          {activeSection === "speed" && (
            <SpeedSelector focusKey="settings-speed-selector" />
          )}
        </div>
      </>
    );
  };

  return (
    <FocusContext.Provider value={panelFocusKey}>
      <div className="player-absolute player-inset-0 player-bg-black player-bg-opacity-70 player-flex player-items-center player-justify-end player-pointer-events-auto player-z-50">
        <div
          ref={ref}
          className={cn(
            "player-bg-gray-900 player-h-full player-w-96 player-shadow-2xl player-flex player-flex-col player-relative",
            "player-transform player-transition-transform player-duration-300 player-ease-out",
            isVisible ? "player-translate-x-0" : "player-translate-x-full",
            className
          )}
        >
          <CloseButton onClose={onClose} />

          <div className="player-flex-1 player-overflow-hidden player-p-6 player-pt-16">
            {activeSection === "main" ? renderMainMenu() : renderSubMenu()}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
};

export default memo(SettingsPanel);
