const theme = {
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    '0 16px 40px -12.125px rgba(0,0,0,0.3)',
  ],
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      //   disableRipple: true, // No more ripple, on the whole application 💣!
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiCard: {
      elevation: 1,
    },
    MuiTooltip: {
      elevation: 1,
    },
    MuiSlider: {
      valueLabelDisplay: 'off',
    },
  },
};

export default theme;
