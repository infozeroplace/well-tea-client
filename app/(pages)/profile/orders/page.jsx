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
import { useGetOrderListQuery } from "@/services/features/orders/ordersApi";

function OrderScreen() {
  // const orderList = [
  //   {
  //     orderId: "3232",
  //     date: "06-02-2025",
  //     totalProducts: 100,
  //     totalPrice: 20.99,
  //     status: "Pending",
  //     products: [
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Product 1",
  //         duration: "3 weeks",
  //         quantity: "5",
  //         totalPrice: "57.49",
  //       },
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Product 2",
  //         duration: "No Subscription",
  //         quantity: "3",
  //         totalPrice: "63.42",
  //       },
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Product 3",
  //         duration: "6 weeks",
  //         quantity: "3",
  //         totalPrice: "76.88",
  //       },
  //     ],
  //   },
  //   {
  //     orderId: "4567",
  //     date: "09-03-2025",
  //     totalProducts: 150,
  //     totalPrice: 30.99,
  //     status: "Delivered",
  //     products: [
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Sencha Tea",
  //         duration: "3 weeks",
  //         quantity: "5",
  //         totalPrice: "77.67",
  //       },
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Earl Grey Tea",
  //         duration: "6 weeks",
  //         quantity: "3",
  //         totalPrice: "46.95",
  //       },
  //     ],
  //   },
  //   {
  //     orderId: "5678",
  //     date: "12-04-2025",
  //     totalProducts: 200,
  //     totalPrice: 40.99,
  //     status: "Delivered",
  //     products: [
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Product 1",
  //         duration: "No Subscription",
  //         quantity: "5",
  //         totalPrice: "77.67",
  //       },
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Product 2",
  //         duration: "3 weeks",
  //         quantity: "3",
  //         totalPrice: "46.95",
  //       },
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Product 3",
  //         duration: "6 weeks",
  //         quantity: "3",
  //         totalPrice: "46.95",
  //       },
  //       {
  //         _id: "",
  //         image: "/products/product_01.jpg",
  //         title: "Product 4",
  //         duration: "No Subscription",
  //         quantity: "3",
  //         totalPrice: "46.95",
  //       },
  //     ],
  //   },
  // ];

  const { data:{data: orderData = []} = [] } = useGetOrderListQuery();
  const orderList = orderData?.data;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  // console.log(data);
  console.log(orderData);
  // console.log(orderList);

  return (
    <div>
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr className="border-b border-gray-200 text-center text-base">
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
              className="border-b border-gray-200 hover:bg-teagreen-100 text-center cursor-pointer"
              onClick={() => handleRowClick(order)}
            >
              <td className="py-4 font-light">{order?.orderId}</td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{order?.date}</p>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{order?.totalProducts}</p>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{order?.totalPrice}</p>
              </td>
              <td className="py-4 font-light">{order?.status}</td>
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
                <table className="w-full border-collapse">
                  <thead className="w-full">
                    <tr className="border-b border-gray-200 text-center text-base">
                      <th className="py-3 font-medium">Products</th>
                      <th className="py-3 font-medium">Subscription</th>
                      <th className="py-3 font-medium">Quantity</th>
                      <th className="py-3 font-medium">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder?.products?.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-teagreen-100 text-center"
                      >
                        <td className="py-4 flex items-center gap-1 md:gap-5">
                          <img
                            src={item.image}
                            alt={item?.title}
                            className="w-20 h-20 object-cover"
                          />
                          <div>
                            <h4 className="font-light">{item?.title}</h4>
                          </div>
                        </td>
                        <td className="py-4 font-light">
                          <p className="text-sm text-gray-500">
                            {item?.duration}
                          </p>
                        </td>
                        <td className="py-4 font-light">
                          <p className="text-sm text-gray-500">
                            {item?.quantity}
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
