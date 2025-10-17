export default {
  plugins: {
    'postcss-preset-env': {
      stage: 1,
      browsers: [
        'chrome >= 30',
        'firefox >= 20',
        'safari >= 6',
        'ie >= 9'
      ],
      features: {
        'custom-properties': {
          preserve: true
        }
      }
    },
    'postcss-flexbugs-fixes': {},
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        'chrome >= 30',
        'firefox >= 20',
        'safari >= 6',
        'ie >= 9'
      ],
      flexbox: 'no-2009'
    },
  },
}
