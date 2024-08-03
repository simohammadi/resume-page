import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { tagAnatomy } from '@chakra-ui/anatomy';

const cardHelpers = createMultiStyleConfigHelpers(tagAnatomy.keys);

export const Badge = cardHelpers.defineMultiStyleConfig({
  // baseStyle: {
  //   container: {
  //     _dark: {
  //       color: 'black',
  //       backgroundColor: 'brand.50'
  //     }
  //   }
  // }
});
