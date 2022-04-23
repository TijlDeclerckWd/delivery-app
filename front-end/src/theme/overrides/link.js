export default (theme) => ({
  MuiLink: {
    styleOverrides: {
      root: {
        fontFamily: theme.typography.fontFamily,
        borderBottom: "solid 2px",
        paddingBottom: "0.2em",
        color: theme.palette.text.secondary,
        borderColor: theme.palette.text.secondary,
        fontSize: "0.95em",
        cursor: "pointer",
        "&.MuiLink-underlineHover": {
          textDecoration: "none",
        },
        "&.MuiLink-underlineHover:hover": {
          textDecoration: "none",
          color: theme.palette.text.primary,
          borderColor: theme.palette.text.primary,
        },
      },
    },
  },
});
