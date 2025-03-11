"use client"
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import NextImage from "@/components/shared/NextImage";

function SubscriptionScreen() {
  const subscriptionList = [
    {
      _id: "",
      image: "/products/product_01.jpg",
      title: "Product 1",
      duration: "3 weeks",
      quantity: "5",
      totalPrice: "77.67",
    },
    {
      _id: "",
      image: "/products/product_01.jpg",
      title: "Product 2",
      duration: "6 weeks",
      quantity: "3",
      totalPrice: "46.95",
    }
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <div>
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr className="border-b border-gray-200 text-center text-base">
            <th className="py-3 font-medium">Product</th>
            <th className="py-3 font-medium">Duration</th>
            <th className="py-3 font-medium">Quantity</th>
            <th className="py-3 font-medium">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {subscriptionList.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-teagreen-100 text-center cursor-pointer"
              onClick={() => handleRowClick(item)}
            >
              <td className="py-4 flex items-center gap-1 md:gap-5">
                <NextImage
                  // src={`${env.image_path}/${item?.product?.thumbnails[0]}`}
                  img="/products/product_01.jpg"
                  alt={item?.title}
                  presets={{width: 30, height: 30}}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h4 className="font-light">{item?.title}</h4>
                  {/* <p className="text-sm text-gray-500">Weight: {item?.unit}</p> */}
                  {/* {item.purchaseType === "subscribe" && (
                    <p className="text-sm text-gray-500">
                      Subscription: {item?.subObj?.weeks}
                    </p>
                  )} */}
                </div>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{item?.duration}</p>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{item?.quantity}</p>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{item?.totalPrice}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isOpen} size="5xl" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Subscription
              </ModalHeader>
              <ModalBody>{selectedItem.title}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SubscriptionScreen;