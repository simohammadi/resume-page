import { Img as ChakraImg } from '@chakra-ui/react';

export const ProfilePic = () => {
  return (
    <ChakraImg
      borderRadius={50}
      src={'./images/profile-pic.jpeg'}
      h="38vmin"
      w="50vmin"
      objectFit="cover"
      margin="0 auto"
      objectPosition="top center"
    />
  );
};
