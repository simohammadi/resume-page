import { StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: StyleFunctionProps) => ({
    'html, body, #root': {
      minHeight: '100vh'
    },
    body: {
      bg: mode('white', 'black')(props)
    }
  })
};
