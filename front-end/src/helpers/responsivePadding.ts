import { Theme } from "@mui/material";

const p = (
  amount: number,
  theme: Theme,
  vertical: boolean = false,
  verticalAmount: number = 4,
) => ({
  paddingLeft: theme.spacing(amount),
  paddingRight: theme.spacing(amount),
  ...(vertical
    ? {
        paddingTop: theme.spacing(verticalAmount ? verticalAmount : amount),
        paddingBottom: theme.spacing(verticalAmount ? verticalAmount : amount),
      }
    : {}),
});

export default (theme: any, vertical = true) => ({
  ...p(4, theme, vertical),
  [theme.breakpoints.down("xs")]: {
    ...p(2, theme, vertical),
  },
  [theme.breakpoints.up("md")]: {
    ...p(4, theme, vertical),
  },
});
