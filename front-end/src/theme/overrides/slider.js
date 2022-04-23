export default (theme) => ({
  MuiSlider: {
    styleOverrides: {
      root: {
        color: theme.palette.primary.light,
        height: 8,
        padding: "10px 0",
        width: '95%',
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        "&:focus, &:hover, &$active": {
          boxShadow: "inherit",
        },
      },
      active: {},
      valueLabel: {
        // left: 'calc(-50% + 4px)',
      },
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
        backgroundColor: "#EAF5F1", // theme.palette.background.default,
      },
      mark: {
        display: "none",
      },
      "markLabel:first": {
        color: theme.palette.text.secondary,
        fontSize: "0.8em",
        transform: "none",
      },
    },
  },
});
