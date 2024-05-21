import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const Modal = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    setBackdrop("blur");
    onOpen();
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-black gap-1">
                Alta de Producto
              </ModalHeader>
              <ModalBody>
                <CreateProducto
                  setRowData={setRowData}
                  categorias={categorias}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
