export default (theme) => ({
  MuiInput: {
    styleOverrides: {
      root: {
        "label + &": {
          marginTop: 6,
        },
      },
    },
  },
});
