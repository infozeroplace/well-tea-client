"use client";

import { env } from "@/config/env";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

const ProductView = ({ product, isOpen, placement, onOpenChange }) => {
  console.log("product view", product);
  const [selectedImage, setSelectedImage] = useState(product?.slideImages[0]);
  return (
    <Modal
      isOpen={isOpen}
      placement={placement}
      onOpenChange={onOpenChange}
      className="!w-full md:!max-w-[90%] !my-auto"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex gap-5 border-b-2 !pb-1 !pt-3">
              <div>Preview</div>
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-3 md:col-span-2">
                  <img
                    src={`${env.image_path}/${selectedImage}`}
                    alt="product"
                    className="w-[560px] mx-auto"
                  />
                </div>
                <div className="col-span-3 md:col-span-1">
                  {/* Title */}
                  <div className="content-gap hidden md:block">
                    <h1 className="text-brand__font__size__lg2 font-brand__font__200 leading-tight">
                      {product?.title}
                    </h1>
                    <h4 className="text-teagreen-600 font-semibold capitalize">
                      {product?.productType}
                    </h4>
                    {product.teaFlavor && (
                      <p>
                        {product?.teaFlavor
                          .map(
                            (flavor) =>
                              flavor?.charAt(0).toUpperCase() + flavor?.slice(1)
                          )
                          .join(", ")}
                      </p>
                    )}
                  </div>
                  {/* Images */}
                  <div className="flex flex-wrap gap-2">
                    {product?.slideImages.map((image, index) => (
                      <img
                        key={index}
                        src={`${env.image_path}/${image}`}
                        alt="product"
                        className={`w-[50px] h-[50px] mx-2 border-2 rounded-lg hover:border-2 hover:border-teagreen-500 ${
                          image === selectedImage
                            ? "border-teagreen-500"
                            : "border-teagreen-300"
                        }`}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
  );
};

export default ProductView;
