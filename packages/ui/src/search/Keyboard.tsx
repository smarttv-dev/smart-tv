import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FocusContext, useFocusable } from '../hooks';
import { getKeyboardLayout } from './KeyboardLayouts';
import { getKeyboardThemeClasses, getKeySizeClasses } from './KeyboardThemes';
import {
  KeyboardProps,
  KeyButtonProps,
} from './KeyboardTypes';

// Individual Key Button Component
const KeyButton: React.FC<KeyButtonProps> = ({
  keyConfig,
  onPress,
  theme,
  size,
  className = '',
  focusedClassName = '',
  parentFocusKey,
  index,
}) => {
  const { ref, focused } = useFocusable({
    focusKey: `${parentFocusKey}-key-${index}`,
    onEnterPress: () => {
      onPress(keyConfig.value, keyConfig.action);
    },
  });

  const themeClasses = getKeyboardThemeClasses(theme);
  const sizeClasses = getKeySizeClasses(size);

  const keyWidth = keyConfig.width || 1;
  const gridColSpan = `ui-col-span-${keyWidth}`;

  const keyClasses = `
    ${themeClasses.key}
    ${focused ? focusedClassName || themeClasses.keyFocused : ''}
    ${sizeClasses.text}
    ${sizeClasses.padding}
    ${className}
    ${gridColSpan}
    ui-cursor-pointer ui-select-none
  `;

  const displayLabel = keyConfig.label || keyConfig.value;

  return (
    <button
      ref={ref}
      className={keyClasses.trim()}
      type="button"
    >
      {displayLabel}
    </button>
  );
};

// Main Keyboard Component
export const Keyboard: React.FC<KeyboardProps> = ({
  onInput,
  onSubmit,
  onBackspace,
  onClear,
  value = '',
  layout = 'qwerty',
  theme = 'modern',
  size = 'md',
  customKeys,
  showPreview = true,
  autoFocus = true,
  className = '',
  keyClassName = '',
  focusedKeyClassName = '',
  placeholder = 'Type here...',
  maxLength,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [shift, setShift] = useState(false);

  const keyboardFocusKey = 'tv-keyboard-main';

  const { ref, focusKey, focusSelf } = useFocusable({
    focusKey: keyboardFocusKey,
    trackChildren: true,
    isFocusBoundary: true,
  });

  // Sync external value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Auto focus on mount
  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => {
        focusSelf();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [autoFocus, focusSelf]);

  // Get keyboard layout
  const keyboardConfig = useMemo(() => {
    if (customKeys) {
      return { layout: 'custom', rows: customKeys };
    }
    return getKeyboardLayout(layout);
  }, [layout, customKeys]);

  // Handle key press
  const handleKeyPress = useCallback(
    (value: string, action?: string) => {
      if (disabled) return;

      switch (action) {
        case 'backspace': {
          const newValue = inputValue.slice(0, -1);
          setInputValue(newValue);
          onBackspace?.();
          onInput?.(newValue);
          break;
        }

        case 'space': {
          const withSpace = inputValue + ' ';
          setInputValue(withSpace);
          onInput?.(withSpace);
          break;
        }

        case 'enter':
          onSubmit?.(inputValue);
          break;

        case 'clear':
          setInputValue('');
          onClear?.();
          onInput?.('');
          break;

        case 'shift':
          setShift(!shift);
          break;

        default: {
          if (maxLength && inputValue.length >= maxLength) return;
          
          const charToAdd = shift ? value.toUpperCase() : value.toLowerCase();
          const updatedValue = inputValue + charToAdd;
          setInputValue(updatedValue);
          onInput?.(updatedValue);
          
          // Auto-reset shift after one character
          if (shift) {
            setShift(false);
          }
        }
      }
    },
    [inputValue, disabled, maxLength, shift, onInput, onSubmit, onBackspace, onClear]
  );

  const themeClasses = getKeyboardThemeClasses(theme);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className={`ui-tv-keyboard ${themeClasses.container} ${className}`.trim()}
      >
        {/* Input Preview */}
        {showPreview && (
          <div className={themeClasses.preview}>
            <span className={inputValue ? '' : 'ui-opacity-50'}>
              {inputValue || placeholder}
            </span>
            <span className="ui-ml-auto ui-text-sm ui-opacity-60">
              {maxLength ? `${inputValue.length}/${maxLength}` : ''}
            </span>
          </div>
        )}

        {/* Keyboard Rows */}
        <div className="ui-keyboard-rows ui-space-y-2">
          {keyboardConfig.rows.map((row, rowIndex) => {
            const totalWidth = row.keys.reduce((sum, key) => sum + (key.width || 1), 0);
            const gridCols = `ui-grid-cols-${totalWidth}`;
            
            return (
              <div
                key={`row-${rowIndex}`}
                className={`ui-grid ${gridCols} ${themeClasses.rowGap} ${row.className || ''}`.trim()}
              >
                {row.keys.map((keyConfig, keyIndex) => (
                  <KeyButton
                    key={`${rowIndex}-${keyIndex}`}
                    keyConfig={keyConfig}
                    onPress={handleKeyPress}
                    theme={theme}
                    size={size}
                    className={keyClassName}
                    focusedClassName={focusedKeyClassName}
                    parentFocusKey={focusKey}
                    index={rowIndex * 100 + keyIndex}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* Helper Text */}
        <div className="ui-mt-4 ui-text-center ui-text-sm ui-opacity-60 ui-text-white">
          Use arrow keys to navigate • Enter to select
        </div>
      </div>
    </FocusContext.Provider>
  );
};

// Export with default props for convenience
export default Keyboard;