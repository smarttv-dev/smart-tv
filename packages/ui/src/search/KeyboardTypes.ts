// Keyboard Types and Configurations

export type KeyboardLayout = 'qwerty' | 'abc' | 'numeric' | 'search' | 'email' | 'custom';
export type KeyboardTheme = 'default' | 'minimal' | 'modern' | 'glassmorphic' | 'neon';
export type KeySize = 'sm' | 'md' | 'lg';

export interface KeyConfig {
  value: string;
  label?: string;
  width?: number; // Column span
  action?: 'backspace' | 'space' | 'enter' | 'clear' | 'shift' | 'symbol';
  icon?: string;
  className?: string;
}

export interface KeyboardRow {
  keys: KeyConfig[];
  className?: string;
}

export interface KeyboardConfig {
  rows: KeyboardRow[];
  layout: KeyboardLayout;
}

export interface KeyboardProps {
  onInput?: (char: string) => void;
  onSubmit?: (value: string) => void;
  onBackspace?: () => void;
  onClear?: () => void;
  value?: string;
  layout?: KeyboardLayout;
  theme?: KeyboardTheme;
  size?: KeySize;
  customKeys?: KeyboardRow[];
  showPreview?: boolean;
  autoFocus?: boolean;
  className?: string;
  keyClassName?: string;
  focusedKeyClassName?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
}

export interface KeyButtonProps {
  keyConfig: KeyConfig;
  onPress: (value: string, action?: string) => void;
  theme: KeyboardTheme;
  size: KeySize;
  className?: string;
  focusedClassName?: string;
  parentFocusKey: string;
  index: number;
}
