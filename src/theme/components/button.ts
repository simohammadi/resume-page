import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  defaultProps: {
    variant: 'gradient'
  },
  baseStyle: {
    borderRadius: 'full'
  },
  variants: {
    gradient: {
      background: 'none',
      _hover: {
        background: 'none',
        backgroundSize: '200%',
        backgroundPosition: '60% center',
        bgGradient: 'linear(to-r, gradient.start, gradient.end)'
      },
      backgroundSize: '200%',
      transition: 'all .3s ease-in-out',
      border: 'none',
      color: 'white',
      bgGradient: 'linear(to-r, gradient.start, gradient.end)'
    },
    outline: {
      variant: 'outline',
      _hover: {
        background: 'none',
        backgroundSize: '200%',
        backgroundPosition: '20% center',
        bgGradient: 'linear(to-r, gradient.start, complementary.darkGreen)'
      },
      _light: {
        color: 'black'
      },
      _dark: {
        color: 'white'
      }
    }
  }
});
