import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Paths } from '../Router';
import { useLocation } from 'react-router-dom';

const BreadcrumbComponent = () => {
  const location = useLocation();

  const pathMap = {
    [`/${Paths.aboutMe}`]: 'About me',
    [`/${Paths.workExperience}`]: 'Work experience',
    [`/${Paths.projects}`]: 'Projects'
  };

  const { pathname } = location;

  if (pathname === Paths.root) {
    return (
      <Breadcrumb alignItems={'center'} alignSelf={'center'}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }

  if (pathname && (pathname === `/${Paths.aboutMe}` || pathname === `/${Paths.workExperience}`)) {
    return (
      <Breadcrumb alignItems={'center'} alignSelf={'center'}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{pathMap[pathname]}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
  return <></>;
};

export default BreadcrumbComponent;
