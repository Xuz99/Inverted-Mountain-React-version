module.exports = {
  purge: [],
  theme: {
    extend: {},
    screens: {
      "xsm": "320px",
      "sm": "640px",
      // => @media (min-width: 640px) { ... }
      "md": "768px",
      // => @media (min-width: 768px) { ... }
      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }
      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }
      "xxl": "1600px",
    },
    letterSpacing: {
      "mad-wide": "0.6em",
      "track-05": "0.5em",
      "track-04": "0.4em",
      "tiny-wide": "0.3em",
      "track-02": "0.2em",
      "track-01": "0.1em",
    },
  },
  variants: {},
  plugins: [],
};
