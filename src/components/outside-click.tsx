import { Flex } from '@chakra-ui/react';
import React, { useRef, useEffect, ReactElement } from 'react';

interface OutsideClickHandlerProps {
  children: ReactElement;
  onOutsideClick: () => void;
  buttonRef: React.RefObject<HTMLDivElement>;
}

const OutsideClickHandler: React.FC<OutsideClickHandlerProps> = ({
  children,
  onOutsideClick,
  buttonRef
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      return;
    }

    if (ref.current && !ref.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, buttonRef]);

  return <Flex ref={ref}>{children}</Flex>;
};

export default OutsideClickHandler;
