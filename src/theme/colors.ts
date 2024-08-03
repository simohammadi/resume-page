import { baseTheme } from '@chakra-ui/react';

export const colors = {
  gradient: {
    start: '#94921e',
    end: '#8a2782'
  },
  brand: {
    50: '#94921e',
    100: '#93902e',
    200: '#918e3b',
    300: '#8f8c46',
    400: '#8e8a51',
    500: '#8b885b',
    600: '#898664',
    700: '#86846e',
    800: '#838277',
    900: '#808080'
  },
  gray: {
    ...baseTheme.colors.gray,
    950: '#808080'
  },
  complementary: {
    lightGreen: '#5b941e',
    darkGreen: '#20941e'
  },
  gradientHeading: {}
};
