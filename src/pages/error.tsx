import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { FaHeartBroken } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../Router';
import BaseLayout from '../components/layouts/base-layout';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <Flex
        justifyContent="center"
        margin="0 auto"
        alignItems={'center'}
        height="100vh">
        <VStack spacing={6}>
          <Heading
            fontSize={48}>{`Looks like something went wrong :(`}</Heading>
          <FaHeartBroken size={200} />
          <Button
            onClick={() => {
              navigate(Paths.root);
            }}>
            Go back home
          </Button>
        </VStack>
      </Flex>
    </BaseLayout>
  );
};
