import * as React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Router } from './Router';
import { theme } from './theme/theme';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router />
    </ChakraProvider>
  );
};
