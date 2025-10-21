import { cn } from "@/utils";
import { FocusContext, useFocusable } from "@smart-tv/ui";
import { useCallback, useEffect, useState } from "react";
import {
  usePlayerControls,
  usePlayerInstance,
} from "../hooks/useOptimizedHooks";

interface SpeedSelectorProps {
  focusKey: string;
  className?: string;
  itemClass?: string;
  focusClass?: string;
  selectedClass?: string;
  onSpeedSelect?: (speed: number) => void;
}

// Speed selector component
export const SpeedSelector = ({
  focusKey,
  className,
  itemClass,
  focusClass,
  selectedClass,
  onSpeedSelect,
}: SpeedSelectorProps) => {
  const [currentSpeed, setCurrentSpeed] = useState<number>(1);
  const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  const player = usePlayerInstance();
  const { actions } = usePlayerControls();

  // Initialize from player if available
  useEffect(() => {
    try {
      const rate = player?.getPlaybackRate?.();
      if (typeof rate === "number") setCurrentSpeed(rate);
    } catch (e) {
      // ignore
    }
  }, [player]);

  const { ref, focusKey: speedFocusKey } = useFocusable({
    focusKey,
    trackChildren: true,
    saveLastFocusedChild: true,
  });

  const selectSpeed = useCallback(
    (speed: number) => {
      setCurrentSpeed(speed);

      // set on native player instance if available
      try {
        // If the player exposes a setPlaybackRate method, call it
        // Call setPlaybackRate if available on the player instance
        if (typeof player?.setPlaybackRate === "function") {
          player.setPlaybackRate(speed);
        } else {
          // Try optional chaining for unknown implementations
          try {
            // @ts-ignore - some player implementations might expose a different API
            player?.setPlaybackRate?.(speed);
          } catch (err) {
            // ignore
          }
        }
      } catch (e) {
        // ignore if method isn't present
      }

      // update media context actions if available so UI state stays in sync
      try {
        actions?.setPlaybackRate?.(speed);
      } catch (e) {
        // ignore
      }

      // Fire callback
      onSpeedSelect?.(speed);
    },
    [player, actions, onSpeedSelect]
  );

  // Single focusable Speed item component (mirrors AudioTrackItem)
  const SpeedItem: React.FC<{
    speed: number;
    focusKey: string;
    isSelected: boolean;
    onSelect: () => void;
    label?: string;
    className?: string;
    focusClass?: string;
    selectedClass?: string;
  }> = ({
    speed,
    focusKey,
    isSelected,
    onSelect,
    label,
    className,
    focusClass,
    selectedClass,
  }) => {
    const onFocus = useCallback(
      ({ y }: { y: number }) => {
        ref.current.scrollTo({
          top: y,
          behavior: "smooth",
        });
      },
      [ref]
    );
    const { ref: itemRef, focused } = useFocusable({
      focusKey,
      onEnterPress: onSelect,
      onFocus,
    });

    const display = label ?? (speed === 1 ? "Normal" : `${speed}x`);

    return (
      <div
        ref={itemRef}
        onClick={onSelect}
        className={cn(
          "player-flex player-items-center player-justify-between player-p-3 player-rounded player-cursor-pointer player-transition-colors",
          "player-hover:bg-white player-hover:bg-opacity-10",
          className,
          focused && (focusClass || "player-bg-blue-600"),
          isSelected && (selectedClass || "player-bg-green-600")
        )}
      >
        <span className="player-text-lg">{display}</span>
        {isSelected && (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="player-w-5 player-h-5 player-text-blue-400"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )}
      </div>
    );
  };

  return (
    <FocusContext.Provider value={speedFocusKey}>
      <div
        ref={ref}
        className={cn(
          "player-space-y-2 player-overflow-auto player-h-full",
          className
        )}
      >
        {speeds.map((speed) => (
          <SpeedItem
            key={speed}
            speed={speed}
            focusKey={`speed-${speed}`}
            isSelected={currentSpeed === speed}
            onSelect={() => selectSpeed(speed)}
            className={itemClass}
            focusClass={focusClass}
            selectedClass={selectedClass}
          />
        ))}
      </div>
    </FocusContext.Provider>
  );
};
