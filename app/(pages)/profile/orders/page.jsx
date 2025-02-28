"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetOrderListQuery } from "@/services/features/orders/ordersApi";
import { env } from "@/config/env";

function OrderScreen() {
  
  const { data:{data: orderData = []} = [] } = useGetOrderListQuery();
  const orderList = orderData?.data;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  return (
    <div>
      <table className="w-full border-collapse text-left">
        <thead className="w-full">
          <tr className="border-b border-gray-200 text-base">
            <th className="py-3 mr-5 font-medium">Order Id</th>
            <th className="py-3 font-medium">Date</th>
            <th className="py-3 font-medium">Total Products</th>
            <th className="py-3 font-medium">Total Price</th>
            <th className="py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList?.map((order, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-teagreen-100 cursor-pointer"
              onClick={() => handleRowClick(order)}
            >
              <td className="py-4 font-light">{order?.orderId}</td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{new Date(order?.createdAt).toLocaleDateString()}</p>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{order?.items?.length}</p>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{order?.total}</p>
              </td>
              <td className="py-4 font-light">{order?.deliveryStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isOpen} size="5xl" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Order: {selectedOrder?.orderId}
              </ModalHeader>
              <ModalBody>
                <table className="w-full border-collapse overflow-x-scroll text-left">
                  <thead className="w-full">
                    <tr className="border-b border-gray-200 text-base">
                      <th className="py-3 font-medium">Products</th>
                      <th className="py-3 font-medium">Unit</th>
                      <th className="py-3 font-medium">Quantity</th>
                      <th className="py-3 font-medium">Subscription</th>
                      <th className="py-3 font-medium">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder?.items?.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-teagreen-100"
                      >
                        <td className="py-4">
                          <Link
                            href={item?.urlParameter}
                            className="group flex items-center gap-1 md:gap-5"
                          >
                            <img
                              src={`${env.app_url}${item.thumbnail.filepath}`}
                              alt={item?.title}
                              className="w-20 h-20 object-cover"
                            />
                            <div>
                              <h4 className="font-light group-hover:underline">{item?.title}</h4>
                            </div>
                          </Link>
                        </td>
                        <td className="py-4 font-light">
                          <p className="text-sm text-gray-500">{item?.unit}</p>
                        </td>
                        <td className="py-4 font-light">
                          <p className="text-sm text-gray-500">
                            {item?.quantity}
                          </p>
                        </td>
                        <td className="py-4 font-light">
                          <p className="text-sm text-gray-500">
                            {item?.subscription}
                          </p>
                        </td>
                        <td className="py-4 font-light">
                          <p className="text-sm text-gray-500">
                            {item?.totalPrice}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ModalBody>
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

export default OrderScreen;
