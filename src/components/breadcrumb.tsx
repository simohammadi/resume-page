import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Paths } from '../Router';

const BreadcrumbComponent = () => {
  const pathMap = {
    [`/${Paths.aboutMe}`]: 'About me',
    [`/${Paths.workExperience}`]: 'Work experience',
    [`/${Paths.projects}`]: 'Projects'
  };

  const currentPath = window.location.pathname;

  if (currentPath === Paths.root) {
    return (
      <Breadcrumb alignItems={'center'} alignSelf={'center'}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }

  if (
    currentPath &&
    (currentPath === `/${Paths.aboutMe}` || currentPath === `/${Paths.workExperience}`)
  ) {
    return (
      <Breadcrumb alignItems={'center'} alignSelf={'center'}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{pathMap[currentPath]}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
  return <></>;
};

export default BreadcrumbComponent;
