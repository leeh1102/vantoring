import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useState } from 'react';
import Write from '../components/Write';

const WriteButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        bgColor="#013066"
        color="white"
        borderRadius="50px"
        _hover={{ bgColor: "#011c44" }}
        _active={{ bgColor: "#011c44" }}
        _focus={{ boxShadow: "none" }}
        onClick={handleOpen}
      >
        Write
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Write />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WriteButton;
