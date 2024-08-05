import { Button, Flex, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import OutsideClickHandler from './outside-click';

interface DrawerProps {
  isOpen: boolean;
  onDrawerClose: () => void;
  buttonRef: React.RefObject<HTMLDivElement>;
}

const DrawerComponent = ({ isOpen, onDrawerClose, buttonRef }: DrawerProps) => {
  const navigate = useNavigate();

  const onAboutMeClick = () => {
    navigate('/about-me');
    onDrawerClose();
  };

  const onHomeClick = () => {
    navigate('/');
    onDrawerClose();
  };

  const onWorkExperienceClick = () => {
    navigate('/work-experience');
    onDrawerClose();
  };

  return (
    <>
      {isOpen && (
        <OutsideClickHandler onOutsideClick={onDrawerClose} buttonRef={buttonRef}>
          <Flex
            position="fixed"
            top={'56px'}
            left={0}
            height={'full'}
            w={200}
            zIndex={4}
            boxShadow={'1px 10px 10px 2px black'}
            _before={{
              content: '""',
              position: 'absolute',
              inset: 0,
              bottom: 0,
              backdropFilter: 'blur(10px)',
              // mask: 'linear-gradient(to bottom, black 60px, transparent)',
              transform: 'translate3d(0, 0, 0)'
            }}>
            <Flex
              justifyContent="space-between"
              alignItems="flex-start"
              borderBottomWidth={1}
              py={2}
              px={0}
              zIndex={1}
              minWidth={'full'}>
              <Stack
                direction="column"
                spacing={4}
                justifyContent={'flex-end'}
                justifySelf={'flex-end'}
                alignItems={'flex-start'}
                paddingLeft={5}
                paddingTop={5}>
                <Button size={'sm'} variant="gradient" color={'black'} onClick={onHomeClick}>
                  Home
                </Button>
                <Button size={'sm'} variant="gradient" color={'black'} onClick={onAboutMeClick}>
                  About me
                </Button>
                <Button
                  size={'sm'}
                  variant="gradient"
                  color={'black'}
                  onClick={onWorkExperienceClick}>
                  Work experience
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </OutsideClickHandler>
      )}
    </>
  );
};

export default DrawerComponent;
