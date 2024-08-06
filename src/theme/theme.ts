import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme
} from '@chakra-ui/react';
import { colors } from './colors';
import { Button } from './components/button';
import { styles } from './styles';
import { Card } from './components/card';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

export const theme = extendTheme(
  { colors, components: { Button, Card }, config, styles },
  withDefaultColorScheme({ colorScheme: 'brand' })
);
