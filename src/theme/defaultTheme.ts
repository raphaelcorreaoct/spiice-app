import {
  borderWidths,
  colors,
  fontSize,
  fontWeights,
  radii,
  spaces,
} from './dsTokens';

export const defaultTheme = {
  fontSizes: {
    ...fontSize,
  },
  borderWidths: {
    ...borderWidths,
  },
  fontWeights: {
    ...fontWeights,
  },
  space: {
    ...spaces,
  },
  colors: {
    ...colors,
  },
  radii: {
    ...radii,
  },
};

export const purpleTheme = {
  ...defaultTheme,
  colors: {
    ...colors,
    'color-primary': '#695EC2',
    'color-secondary': '#C95CB5',
    'color-background': '#484554',
    'on-color-background': '#ADA9BB',
  },
};

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...colors,
    'color-primary': '#44464A',
    'color-secondary': '#70878D',
    'color-background': '#2A2A2A',
    'on-color-background': '#C4C4C4',
  },
};
