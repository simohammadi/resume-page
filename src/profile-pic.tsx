import { Img as ChakraImg } from '@chakra-ui/react';

export const ProfilePic = () => {
  return (
    <ChakraImg
      borderRadius="full"
      src={'./images/profile-pic.jpeg'}
      h="30vmin"
      w="30vmin"
      style={{ margin: '0 auto' }}
    />
  );
};
