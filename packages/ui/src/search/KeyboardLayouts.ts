import { KeyboardConfig, KeyboardLayout } from './KeyboardTypes';

// QWERTY Layout (Standard)
export const QWERTY_LAYOUT: KeyboardConfig = {
  layout: 'qwerty',
  rows: [
    {
      keys: [
        { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, 
        { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }, 
        { value: '9' }, { value: '0' }
      ]
    },
    {
      keys: [
        { value: 'Q' }, { value: 'W' }, { value: 'E' }, { value: 'R' }, 
        { value: 'T' }, { value: 'Y' }, { value: 'U' }, { value: 'I' }, 
        { value: 'O' }, { value: 'P' }
      ]
    },
    {
      keys: [
        { value: 'A' }, { value: 'S' }, { value: 'D' }, { value: 'F' }, 
        { value: 'G' }, { value: 'H' }, { value: 'J' }, { value: 'K' }, 
        { value: 'L' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: 'Z' }, { value: 'X' }, { value: 'C' }, { value: 'V' }, 
        { value: 'B' }, { value: 'N' }, { value: 'M' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: '@', label: '@' },
        { value: '.com', label: '.com', width: 2 },
        { value: ' ', label: 'Space', action: 'space', width: 4 },
        { value: '←', label: '←', action: 'backspace', width: 2 },
        { value: 'Enter', label: 'Enter', action: 'enter', width: 2 }
      ]
    }
  ]
};

// ABC Layout (Alphabetical)
export const ABC_LAYOUT: KeyboardConfig = {
  layout: 'abc',
  rows: [
    {
      keys: [
        { value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, 
        { value: 'E' }, { value: 'F' }, { value: 'G' }
      ]
    },
    {
      keys: [
        { value: 'H' }, { value: 'I' }, { value: 'J' }, { value: 'K' }, 
        { value: 'L' }, { value: 'M' }, { value: 'N' }
      ]
    },
    {
      keys: [
        { value: 'O' }, { value: 'P' }, { value: 'Q' }, { value: 'R' }, 
        { value: 'S' }, { value: 'T' }, { value: 'U' }
      ]
    },
    {
      keys: [
        { value: 'V' }, { value: 'W' }, { value: 'X' }, { value: 'Y' }, 
        { value: 'Z' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: '0' }, { value: '1' }, { value: '2' }, { value: '3' }, 
        { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, 
        { value: '8' }, { value: '9' }
      ]
    },
    {
      keys: [
        { value: '@', label: '@' },
        { value: ' ', label: 'Space', action: 'space', width: 6 },
        { value: '←', label: '←', action: 'backspace', width: 2 },
        { value: '✓', label: '✓', action: 'enter', width: 2 }
      ]
    }
  ]
};

// Numeric Layout (Numbers & Symbols)
export const NUMERIC_LAYOUT: KeyboardConfig = {
  layout: 'numeric',
  rows: [
    {
      keys: [
        { value: '1' }, { value: '2' }, { value: '3' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: '4' }, { value: '5' }, { value: '6' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: '7' }, { value: '8' }, { value: '9' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: '←', label: '←', action: 'backspace' },
        { value: '0' },
        { value: 'Enter', label: 'Enter', action: 'enter' }
      ],
      className: 'ui-justify-center'
    }
  ]
};

// Search Layout (Optimized for search)
export const SEARCH_LAYOUT: KeyboardConfig = {
  layout: 'search',
  rows: [
    {
      keys: [
        { value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, 
        { value: 'E' }, { value: 'F' }, { value: 'G' }, { value: 'H' }, 
        { value: 'I' }
      ]
    },
    {
      keys: [
        { value: 'J' }, { value: 'K' }, { value: 'L' }, { value: 'M' }, 
        { value: 'N' }, { value: 'O' }, { value: 'P' }, { value: 'Q' }, 
        { value: 'R' }
      ]
    },
    {
      keys: [
        { value: 'S' }, { value: 'T' }, { value: 'U' }, { value: 'V' }, 
        { value: 'W' }, { value: 'X' }, { value: 'Y' }, { value: 'Z' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: '0' }, { value: '1' }, { value: '2' }, { value: '3' }, 
        { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, 
        { value: '8' }, { value: '9' }
      ]
    },
    {
      keys: [
        { value: 'Clear', action: 'clear', width: 2 },
        { value: ' ', label: 'Space', action: 'space', width: 5 },
        { value: '←', label: '←', action: 'backspace', width: 2 },
        { value: '🔍', label: 'Search', action: 'enter', width: 2 }
      ]
    }
  ]
};

// Email Layout (Optimized for email input)
export const EMAIL_LAYOUT: KeyboardConfig = {
  layout: 'email',
  rows: [
    {
      keys: [
        { value: 'Q' }, { value: 'W' }, { value: 'E' }, { value: 'R' }, 
        { value: 'T' }, { value: 'Y' }, { value: 'U' }, { value: 'I' }, 
        { value: 'O' }, { value: 'P' }
      ]
    },
    {
      keys: [
        { value: 'A' }, { value: 'S' }, { value: 'D' }, { value: 'F' }, 
        { value: 'G' }, { value: 'H' }, { value: 'J' }, { value: 'K' }, 
        { value: 'L' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: 'Z' }, { value: 'X' }, { value: 'C' }, { value: 'V' }, 
        { value: 'B' }, { value: 'N' }, { value: 'M' }
      ],
      className: 'ui-justify-center'
    },
    {
      keys: [
        { value: '0' }, { value: '1' }, { value: '2' }, { value: '3' }, 
        { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, 
        { value: '8' }, { value: '9' }
      ]
    },
    {
      keys: [
        { value: '@' },
        { value: '.' },
        { value: '_' },
        { value: '-' },
        { value: ' ', label: 'Space', action: 'space', width: 3 },
        { value: '←', label: '←', action: 'backspace', width: 2 },
        { value: 'Enter', label: 'Enter', action: 'enter', width: 2 }
      ]
    }
  ]
};

// Get layout by type
export const getKeyboardLayout = (layout: KeyboardLayout): KeyboardConfig => {
  switch (layout) {
    case 'qwerty':
      return QWERTY_LAYOUT;
    case 'abc':
      return ABC_LAYOUT;
    case 'numeric':
      return NUMERIC_LAYOUT;
    case 'search':
      return SEARCH_LAYOUT;
    case 'email':
      return EMAIL_LAYOUT;
    default:
      return QWERTY_LAYOUT;
  }
};
