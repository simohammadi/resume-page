import { Img as ChakraImg } from '@chakra-ui/react';

export const ProfilePic = () => {
  return (
    <ChakraImg
      borderRadius={'full'}
      src={'./images/profile-pic.jpeg'}
      h="50vmin"
      objectFit="cover"
      margin="0 auto"
      objectPosition="top center"
    />
  );
};
