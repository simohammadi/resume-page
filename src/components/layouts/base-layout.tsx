import { Box, Flex } from '@chakra-ui/react';
import Header from '../header';
import { ReactElement } from 'react';

export const BaseLayout = ({ children }: { children: ReactElement }) => (
  <Flex minH="100vh" flexDirection="column">
    <Header />
    <Flex p={{ base: 2, sm: 4 }} flexDirection="column" flexGrow={1} mt={16}>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundBlendMode="saturation"
        bgGradient="radial-gradient(at top left, brand.50 50%, transparent 20%), radial-gradient(at bottom, brand.800 50%, transparent 20%), radial-gradient(at bottom left, brand.100 100%, transparent 50%)"
        zIndex={0}
        opacity={0.2}>
        <Box
          position="absolute"
          top={0}
          left={0}
          inset={0}
          bgGradient="linear-gradient(0deg, gray.950 60%, rgba(0, 0, 0, 0) 100%)"
          zIndex={1}
        />
      </Box>
      <Box zIndex={2} as="main">
        {children}
      </Box>
    </Flex>
  </Flex>
);

export default BaseLayout;
