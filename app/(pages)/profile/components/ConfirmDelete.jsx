import React, { useEffect } from 'react'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@heroui/react";
import { useDeleteAddressMutation } from '@/services/features/address/addressApi';
import { toast } from 'react-hot-toast';
import LoadingOverlay from '@/components/shared/LoadingOverlay';

function ConfirmDelete({ addressId, isOpen, onOpenChange }) {
    // const [deleteAddressId, setDeleteAddressId] = useState()
    const [deleteAddress, { isLoading: deleteLoading, data: deleteAddressData }] = useDeleteAddressMutation();
    const handleDeleteAddress = async () => {
      await deleteAddress(addressId);
    };
    useEffect(() => {
      if (deleteAddressData?.message) {
        toast.success(deleteAddressData?.message);
      }
    }, [deleteAddressData]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="!w-full md:!max-w-[700px] lg:!max-w-[850px] !mt-20"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b-2">
                Delete Address
              </ModalHeader>
              <ModalBody className="mt-6">
                Are your want to delete this address?
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  className="bg-teagreen-200 hover:bg-teagreen-400 text-teagreen-700"
                  onPress={() => {
                    handleDeleteAddress();
                    onClose();
                  }}
                >
                  Confirm Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <LoadingOverlay isLoading={deleteLoading} />
    </>
  );
}

export default ConfirmDelete