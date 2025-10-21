import { FocusContext, FocusHandler, useFocusable } from "@smart-tv/ui";
import React, { memo, useCallback } from "react";
import { useAudioTracks, usePlayerInstance } from "../hooks/useOptimizedHooks";
import { AudioTrack as AudioTrackType } from "../types";
import { cn, compareTrackProps, getDisplayLanguage } from "../utils";

interface AudioTrackProps {
  className?: string;
  itemClass?: string;
  focusClass?: string;
  selectedClass?: string;
  onTrackSelect?: (track: AudioTrackType) => void;
  onClose?: () => void;
  title?: string;
}

const AudioTrackComponent: React.FC<AudioTrackProps> = ({
  className,
  onTrackSelect,
  onClose,
  itemClass,
  selectedClass,
  focusClass,
  title,
}) => {
  const player = usePlayerInstance();
  const audioTracks = useAudioTracks();

  const { ref, focusKey } = useFocusable({
    focusKey: "audio-track-selector",
    trackChildren: true,
  });

  const handleTrackSelect = useCallback(
    (track: AudioTrackType) => {
      if (player) {
        player.selectAudioTrack(track.id);
        onTrackSelect?.(track);
        onClose?.();
      }
    },
    [player, onTrackSelect, onClose]
  );

  const onFocus = useCallback(
    ({ y }: { y: number }) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className={cn(
          "player-bg-black player-bg-opacity-80 player-text-white player-p-6 player-rounded-lg player-min-w-80",
          className
        )}
      >
        {title && (
          <div className="player-mb-4">
            <h3 className="player-text-xl player-font-semibold">{title}</h3>
          </div>
        )}

        <div className="player-space-y-2">
          {audioTracks.map((track: AudioTrackType, index: number) => (
            <AudioTrackItem
              key={track.id}
              track={track}
              focusKey={`audio-track-${index}`}
              isSelected={track.active}
              onSelect={() => handleTrackSelect(track)}
              className={itemClass}
              focusClass={focusClass}
              selectedClass={selectedClass}
              onFocus={onFocus}
            />
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  );
};

// Export memoized component to prevent unnecessary re-renders
export const AudioTrack = memo(AudioTrackComponent, compareTrackProps);

interface AudioTrackItemProps {
  className?: string;
  focusClass?: string;
  selectedClass?: string;
  track: AudioTrackType;
  focusKey: string;
  isSelected: boolean;
  onSelect: () => void;
  onFocus: FocusHandler;
}

const AudioTrackItem: React.FC<AudioTrackItemProps> = ({
  track,
  focusKey,
  isSelected,
  onSelect,
  className,
  focusClass,
  selectedClass,
  onFocus,
}) => {
  const { ref, focused } = useFocusable({
    focusKey,
    onEnterPress: onSelect,
    onFocus,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "player-flex player-items-center player-justify-between player-p-3 player-rounded player-cursor-pointer player-transition-colors",
        "player-hover:bg-white player-hover:bg-opacity-10",
        className,
        focused && (focusClass || "player-bg-blue-600"),
        isSelected && (selectedClass || "player-bg-green-600")
      )}
      onClick={onSelect}
    >
      <span className="player-text-lg">
        {getDisplayLanguage(track.language)}
      </span>
      {isSelected && (
        <svg
          className="player-w-6 player-h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};
