/**
 * Keyboard Configuration Utilities
 * Helper functions to create custom keyboard configurations
 */

import { KeyConfig, KeyboardConfig, KeyboardRow } from "./KeyboardTypes";

/**
 * Create a custom key configuration
 */
export const createKey = (
  value: string,
  options?: Partial<Omit<KeyConfig, "value">>
): KeyConfig => ({
  value,
  ...options,
});

/**
 * Create a keyboard row
 */
export const createRow = (
  keys: KeyConfig[],
  className?: string
): KeyboardRow => ({
  keys,
  className,
});

/**
 * Create a complete custom keyboard configuration
 */
export const createKeyboard = (rows: KeyboardRow[]): KeyboardConfig => ({
  layout: "custom",
  rows,
});

/**
 * Pre-built key configurations for common use cases
 */
export const CommonKeys = {
  // Action keys
  backspace: createKey("←", { label: "←", action: "backspace", width: 2 }),
  space: createKey(" ", { label: "Space", action: "space", width: 4 }),
  enter: createKey("✓", { label: "✓", action: "enter", width: 2 }),
  clear: createKey("Clear", { action: "clear", width: 2 }),

  // Special characters
  at: createKey("@"),
  dot: createKey("."),
  dotCom: createKey(".com", { width: 2 }),
  underscore: createKey("_"),
  hyphen: createKey("-"),
  slash: createKey("/"),

  // Numbers
  numbers: (width = 1) => [
    createKey("0", { width }),
    createKey("1", { width }),
    createKey("2", { width }),
    createKey("3", { width }),
    createKey("4", { width }),
    createKey("5", { width }),
    createKey("6", { width }),
    createKey("7", { width }),
    createKey("8", { width }),
    createKey("9", { width }),
  ],

  // Alphabet
  alphabet: (width = 1) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return letters.map((letter) => createKey(letter, { width }));
  },
};

/**
 * Create a numeric keypad (calculator style)
 */
export const createNumericKeypad = (): KeyboardRow[] => [
  createRow([createKey("7"), createKey("8"), createKey("9")]),
  createRow([createKey("4"), createKey("5"), createKey("6")]),
  createRow([createKey("1"), createKey("2"), createKey("3")]),
  createRow([CommonKeys.backspace, createKey("0"), CommonKeys.enter]),
];

/**
 * Create a simple Yes/No keyboard
 */
export const createYesNoKeyboard = (): KeyboardRow[] => [
  createRow([
    createKey("YES", { width: 6, className: "bg-green-600" }),
    createKey("NO", { width: 6, className: "bg-red-600" }),
  ]),
];

/**
 * Create a phone number keyboard
 */
export const createPhoneKeyboard = (): KeyboardRow[] => [
  createRow([createKey("1"), createKey("2"), createKey("3")]),
  createRow([createKey("4"), createKey("5"), createKey("6")]),
  createRow([createKey("7"), createKey("8"), createKey("9")]),
  createRow([createKey("+"), createKey("0"), CommonKeys.backspace]),
  createRow([CommonKeys.clear, CommonKeys.enter]),
];

/**
 * Create a URL keyboard
 */
export const createUrlKeyboard = (): KeyboardRow[] => [
  createRow([...CommonKeys.alphabet().slice(0, 10)]),
  createRow([...CommonKeys.alphabet().slice(10, 19)]),
  createRow([...CommonKeys.alphabet().slice(19, 26)]),
  createRow([...CommonKeys.numbers().slice(0, 10)]),
  createRow([
    createKey("http://"),
    createKey("https://"),
    createKey(".com"),
    createKey(".net"),
    createKey(".org"),
  ]),
  createRow([
    createKey("/"),
    createKey("."),
    createKey("-"),
    createKey("_"),
    CommonKeys.space,
    CommonKeys.backspace,
    CommonKeys.enter,
  ]),
];

/**
 * Create a remote control-style keyboard (minimal)
 */
export const createRemoteKeyboard = (): KeyboardRow[] => [
  createRow([...CommonKeys.alphabet().slice(0, 9)]),
  createRow([...CommonKeys.alphabet().slice(9, 18)]),
  createRow([...CommonKeys.alphabet().slice(18, 26)]),
  createRow([...CommonKeys.numbers()]),
  createRow([
    createKey("123", { action: "symbol", width: 2 }),
    CommonKeys.space,
    CommonKeys.backspace,
    CommonKeys.enter,
  ]),
];

/**
 * Create a time input keyboard (HH:MM)
 */
export const createTimeKeyboard = (): KeyboardRow[] => [
  createRow([createKey("0"), createKey("1"), createKey("2")]),
  createRow([createKey("3"), createKey("4"), createKey("5")]),
  createRow([createKey("6"), createKey("7"), createKey("8")]),
  createRow([createKey("9"), createKey(":"), CommonKeys.backspace]),
  createRow([CommonKeys.clear, CommonKeys.enter]),
];

/**
 * Create a date input keyboard (DD/MM/YYYY)
 */
export const createDateKeyboard = (): KeyboardRow[] => [
  createRow([createKey("1"), createKey("2"), createKey("3")]),
  createRow([createKey("4"), createKey("5"), createKey("6")]),
  createRow([createKey("7"), createKey("8"), createKey("9")]),
  createRow([createKey("0"), createKey("/"), CommonKeys.backspace]),
  createRow([CommonKeys.clear, CommonKeys.enter]),
];

/**
 * Utility: Split array into chunks (for creating rows)
 */
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

/**
 * Create a custom keyboard from a simple string layout
 * Example: createFromString('ABC\nDEF\nGHI') creates 3 rows
 */
export const createFromString = (layout: string): KeyboardRow[] => {
  const lines = layout.trim().split("\n");
  return lines.map((line) => {
    const chars = line.split("");
    const keys = chars.map((char) => createKey(char));
    return createRow(keys);
  });
};

/**
 * Add action keys to existing rows
 */
export const addActionRow = (
  rows: KeyboardRow[],
  actions: KeyConfig[]
): KeyboardRow[] => {
  return [...rows, createRow(actions)];
};

/**
 * Example: Create a gaming keyboard (WASD + common keys)
 */
export const createGamingKeyboard = (): KeyboardRow[] => [
  createRow([createKey("W", { width: 2 })]),
  createRow([createKey("A"), createKey("S"), createKey("D")]),
  createRow([createKey("↑", { label: "UP", width: 2 })]),
  createRow([
    createKey("←", { label: "LEFT" }),
    createKey("↓", { label: "DOWN" }),
    createKey("→", { label: "RIGHT" }),
  ]),
  createRow([
    createKey("SPACE", { action: "space", width: 2 }),
    createKey("ENTER", { action: "enter", width: 2 }),
  ]),
];

/**
 * Validation helpers
 */
export const validateKeyboard = (config: KeyboardConfig): boolean => {
  // Check if rows exist
  if (!config.rows || config.rows.length === 0) {
    console.error("Keyboard must have at least one row");
    return false;
  }

  // Check each row has keys
  for (const row of config.rows) {
    if (!row.keys || row.keys.length === 0) {
      console.error("Each row must have at least one key");
      return false;
    }

    // Check each key has a value
    for (const key of row.keys) {
      if (!key.value) {
        console.error("Each key must have a value");
        return false;
      }
    }
  }

  return true;
};

/**
 * Export all utilities
 */
export const KeyboardUtils = {
  createKey,
  createRow,
  createKeyboard,
  CommonKeys,
  createNumericKeypad,
  createYesNoKeyboard,
  createPhoneKeyboard,
  createUrlKeyboard,
  createRemoteKeyboard,
  createTimeKeyboard,
  createDateKeyboard,
  createGamingKeyboard,
  chunkArray,
  createFromString,
  addActionRow,
  validateKeyboard,
};

export default KeyboardUtils;
