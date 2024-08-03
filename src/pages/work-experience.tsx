import { workExperience } from '../data/work-experience';
import WorkExperienceCard from '../components/work-experience-card';
import { Box } from '@chakra-ui/react';

const WorkExperiencePage = () => {
  return (
    <Box>
      {workExperience.map((item) => (
        <WorkExperienceCard key={item.company.projectName} experienceData={item} />
      ))}
    </Box>
  );
};

export default WorkExperiencePage;
