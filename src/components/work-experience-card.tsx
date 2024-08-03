import {
  Box,
  Grid,
  VStack,
  Card,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Divider,
  CardBody,
  Stack,
  Badge,
  Image,
  Text
} from '@chakra-ui/react';
import { ExperienceData } from '../data/work-experience';

interface WorkExperienceCardProps {
  experienceData: ExperienceData;
}

const WorkExperienceCard = ({ experienceData }: WorkExperienceCardProps) => {
  const onLogoClick = () => {
    window.open(experienceData.company.domain);
  };

  return (
    <Box fontSize="xl">
      <Grid p={6}>
        <VStack spacing={8}>
          <Card maxW="800px" minW="300px">
            <CardHeader>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size={'md'}>{experienceData.company.projectName}</Heading>
                <IconButton
                  icon={
                    <Image
                      src={experienceData.company.logo.src}
                      h={`${experienceData.company.logo.dim}px`}
                      paddingRight={
                        experienceData.company.logo.padding ??
                        `${experienceData.company.logo.padding}px`
                      }
                    />
                  }
                  aria-label="klarna"
                  variant={'ghost'}
                  onClick={onLogoClick}></IconButton>
              </Flex>
            </CardHeader>
            <Flex paddingLeft={'20px'} paddingRight={'20px'}>
              <Divider color={''} />
            </Flex>
            <CardBody>
              <Stack spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    The teams mission
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {experienceData.teamDescription}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    contributions
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {experienceData.contributionDescription}
                  </Text>
                </Box>
                <Divider />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Frameworks
                  </Heading>
                  <Stack direction="row" pt="2" spacing={2}>
                    {experienceData.badges.frameworks.map((badge) => (
                      <Badge variant="subtle" colorScheme="black" key={badge}>
                        {badge}
                      </Badge>
                    ))}
                  </Stack>
                </Box>
                <Divider />
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Tech
                  </Heading>
                  <Stack direction="row" pt="2" spacing={2}>
                    {experienceData.badges.technologies.map((badge) => (
                      <Badge variant="subtle" colorScheme="black" key={badge}>
                        {badge}
                      </Badge>
                    ))}
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

export default WorkExperienceCard;
