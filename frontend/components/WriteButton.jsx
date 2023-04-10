import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Write from "../components/Write";
import useMobile from "@/hooks/useMobile";
import { AddIcon } from "@chakra-ui/icons";

const WriteButton = () => {
  const isMobile = useMobile();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isMobile ? (
        <IconButton variant="primary" icon={<AddIcon />} onClick={onOpen} />
      ) : (
        <Button
          borderRadius="50px"
          variant="primary"
          size="lg"
          onClick={onOpen}
        >
          Write
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
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
