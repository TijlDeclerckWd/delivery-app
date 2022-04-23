import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import button from './button';
import textfield from './textfield';
import tooltip from './tooltip';
import link from './link';
import togglebutton from './togglebutton';
import slider from './slider';
import progress from './progress';
import formcontrollabel from './formControlLabel';

const overrides = theme =>
  createTheme(theme, {
    components: {
      ...button(theme),
      // ...tooltip(theme),
      ...textfield(theme),
      ...link(theme),
      ...togglebutton(theme),
      ...slider(theme),
      ...progress(theme),
      ...formcontrollabel(theme),
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });

export default overrides;
