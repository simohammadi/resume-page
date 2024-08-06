import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  VStack
} from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { links } from '../data/links';

const GradientText = ({ children }: { children: string }) => {
  const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
  return (
    <Heading
      sx={{}}
      fontSize={64}
      css={css`
        background: linear-gradient(
          45deg,
          #161509 0%,
          #161509 50%,
          black 80%,
          black 100%
        );
        -webkit-background-clip: text;
        color: transparent;
        text-shadow: 120 0 10px rgba(0, 255, 128, 0.7),
          0 0 10px rgba(0, 0, 0, 0.8);
        animation-iteration-count: 'infinite';
        animation: ${pulse} 4s infinite;
        opacity: 1;
      `}>
      {children}
    </Heading>
  );
};

const GradientContainer = ({ children }: { children: ReactElement }) => (
  <Box
    css={css`
      background: black;
      -webkit-background-clip: text;
      color: transparent;
    `}>
    {children}
  </Box>
);

const HomePage = () => {
  const navigate = useNavigate();

  const onAboutMeClick = () => {
    navigate('/about-me');
  };

  const onGetInTouchClick = () => {
    window.open(links.linkedin);
  };

  return (
    <>
      <Flex
        alignContent={'center'}
        margin={0}
        alignItems={'center'}
        pt={{ base: '0px', sm: '0px', md: '15px', lg: '10vw' }}
        paddingLeft={{ base: '0px', sm: '0px', md: '15px', lg: '12vw' }}>
        <Card borderRadius={50} p={10}>
          <CardBody>
            <GradientContainer>
              <VStack alignItems={'flex-start'}>
                <Heading size={'lg'}>My name is Sina Mohammadi</Heading>
                <GradientText>{`I'm a software engineer`}</GradientText>
                <Heading>{`Welcome to my page`}</Heading>
                <HStack paddingTop={6}>
                  <Button color={'black'} onClick={onGetInTouchClick}>
                    Get in touch
                  </Button>
                  <Button variant={'outline'} onClick={onAboutMeClick}>
                    About me
                  </Button>
                </HStack>
              </VStack>
            </GradientContainer>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default HomePage;
