import { FC, ReactNode, useEffect, useRef } from 'react';

type ModalProps = {
  show: boolean;
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnClickOutside?: boolean;
};

const Modal: FC<ModalProps> = ({ show, children, closeOnClickOutside }) => {
  const ref = useRef(null);

  function handleClickOutside(e: MouseEvent) {}

  useEffect(() => {
    if (closeOnClickOutside) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeOnClickOutside]);

  return show && <div ref={ref}>{children}</div>;
};

export default Modal;
