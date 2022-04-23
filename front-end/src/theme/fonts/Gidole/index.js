import GidoleRegular from './Gidole-Regular.ttf';

const d = {
  fontFamily: 'Gidole',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  unicodeRange:
    // eslint-disable-next-line max-len
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const src = f => `
local('Gidole'),
url(${f}) format('ttf')
`;

export const gidoleRegular = {
  ...d,
  fontWeight: 400,
  src: src(GidoleRegular),
};

export default [gidoleRegular];
