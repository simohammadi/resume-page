import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cardAnatomy } from '@chakra-ui/anatomy';

const cardHelpers = createMultiStyleConfigHelpers(cardAnatomy.keys);

export const Card = cardHelpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      _dark: {
        bg: 'brand.900',
        _hover: {
          bg: 'brand.800'
        }
      },
      _light: {
        bg: 'brand.400',
        backgroundSize: '120%',
        bgGradient: 'radial(at top left, brand.400, white)',
        _hover: {
          backgroundSize: '120%',
          backgroundPosition: '80% center',
          bgGradient: 'radial(at top left, brand.400, white)'
        }
      }
    }
  }
});
