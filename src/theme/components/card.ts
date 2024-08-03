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
      }
    }
  }
});
