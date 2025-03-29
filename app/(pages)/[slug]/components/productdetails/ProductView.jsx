"use client";

import NextImage from "@/components/shared/NextImage";
import { env } from "@/config/env";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import { useState } from "react";

const ProductView = ({
  product,
  isOpen,
  placement,
  onOpenChange,
  selectedImage,
  setSelectedImage,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (isZoomed) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setCursorPosition({ x, y });
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Modal
      isOpen={isOpen}
      placement={placement}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setIsZoomed(false);
        }
        onOpenChange(isOpen);
      }}
      className="max-w-[1280px] mx-auto !my-auto h-[650px]"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="">
              <div>Preview</div>
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-between gap-2">
                <div className="w-full">
                  <div
                    className="relative overflow-hidden cursor-zoom-in"
                    onMouseMove={handleMouseMove}
                    onClick={toggleZoom}
                    style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
                  >
                    <NextImage
                      img={`${env.app_url}${selectedImage.filepath}`}
                      alt={selectedImage.alternateText || ""}
                      presets={{width: 500, height: 500}}
                      className={`max-w-[500px] w-full mx-auto transition-transform duration-300 ${
                        isZoomed ? "scale-[2.5]" : "scale-100"
                      }`}
                      style={{
                        transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="w-full">
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
                      <NextImage
                        key={index}
                        img={`${env.app_url}${selectedImage.filepath}`}
                        aimglt={selectedImage.alternateText || ""}
                        className={`w-[50px] h-[50px] mx-2 border rounded-lg hover:border hover:border-teagreen-600 cursor-pointer ${
                          image === selectedImage
                            ? "border-teagreen-500"
                            : "border-teagreen-300"
                        }`}
                        presets={{width: 50, height: 50}}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProductView;
