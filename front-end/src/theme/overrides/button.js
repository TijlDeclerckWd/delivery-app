export default (theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
      },
      contained: {
        "&.Mui-disabled": {
          background: "none",
          color: theme.palette.text.secondary,
          border: `solid 1px ${theme.palette.divider}`,
        },
      },
    },
  },
});
