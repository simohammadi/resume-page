import { Flex, IconButton, Stack, useDisclosure } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Hamburger from 'hamburger-react';
import DrawerComponent from './drawer';
import BreadcrumbComponent from './breadcrumb';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onMenuClick = () => {
    isOpen ? onClose() : onOpen();
  };

  // Can probably refactor this into breadcrumb to get rid of the error
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [location.pathname]);

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top={0}
        left={0}
        h={14}
        width="full"
        zIndex={3}
        boxShadow={'0 0 10px 2px black'}
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bottom: 0,
          backdropFilter: 'blur(10px)',
          mask: 'linear-gradient(to bottom, black 60px, transparent)',
          transform: 'translate3d(0, 0, 0)'
        }}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth={1}
          py={2}
          px={4}
          zIndex={1}
          minWidth={'full'}>
          <IconButton
            icon={<Hamburger size={26} />}
            aria-label="menu"
            variant={'gradient'}
            size={'md'}
            color={'black'}
            onClick={onMenuClick}
          />
          <Stack direction="row" spacing={2} justifyContent={'flex-end'} justifySelf={'flex-end'}>
            <BreadcrumbComponent></BreadcrumbComponent>
            <ColorModeSwitcher />
          </Stack>
        </Flex>
      </Flex>
      <DrawerComponent isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default Header;
