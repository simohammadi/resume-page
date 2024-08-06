import {
  Box,
  Grid,
  VStack,
  Card,
  CardBody,
  StackDivider,
  CardHeader,
  Stack,
  Heading,
  IconButton,
  Link,
  Text
} from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { profileData } from '../data/about-me-data';
import { ProfilePic } from '../profile-pic';
import { links } from '../data/links';

const AboutPage = () => {
  const onButtonClick = (url: string) => {
    window.open(url);
  };

  return (
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Card maxW="800px">
            <CardBody>
              <ProfilePic />
              <StackDivider />
              <CardHeader></CardHeader>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Sina Mohammadi
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {profileData.aboutMe}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Experience
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {profileData.experience}
                  </Text>
                </Box>
                <Box>
                  {/* Refactor links so that it opens in new window */}
                  <Stack direction="row" pt="2" spacing={2}>
                    <IconButton
                      icon={
                        <IconContext.Provider value={{ size: '20px' }}>
                          <CiLinkedin />
                        </IconContext.Provider>
                      }
                      aria-label="Linkedin"
                      as={Link}
                      onClick={() => {
                        onButtonClick(links.linkedin);
                      }}
                    />
                    <IconButton
                      icon={
                        <IconContext.Provider value={{ size: '20px' }}>
                          <FaGithub />
                        </IconContext.Provider>
                      }
                      aria-label="Github"
                      as={Link}
                      onClick={() => {
                        onButtonClick(links.github);
                      }}
                    />
                    <IconButton
                      icon={
                        <IconContext.Provider value={{ size: '20px' }}>
                          <CiMail />
                        </IconContext.Provider>
                      }
                      aria-label="Mail"
                      as={Link}
                      onClick={() => {
                        onButtonClick(links.linkedin);
                      }}
                    />
                  </Stack>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </VStack>
      </Grid>
    </Box>
  );
};

export default AboutPage;
