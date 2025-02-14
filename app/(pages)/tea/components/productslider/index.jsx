"use client";

import { useDisclosure } from "@heroui/react";

import { env } from "@/config/env";
import { useEffect, useState } from "react";
import { RiPriceTagFill } from "react-icons/ri";
// import ReactImageMagnify from "react-image-magnify";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAddToWishlistMutation } from "@/services/features/wishlist/wishlistApi";
import { useAppSelector, useAppDispatch } from "@/services/hook";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { toast } from "react-hot-toast";
import LoadingOverlay from "@/components/shared/LoadingOverlay";

function ProductSlider({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSlider, setMainSlider] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isFirstThumb, setIsFirstThumb] = useState(true);
  const [isLastThumb, setIsLastThumb] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [placement, setPlacement] = useState("auto");
  const [selectedImage, setSelectedImage] = useState(product?.slideImages[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [addToWishlist, { data: addToWishlistData, isLoading: addToWishlistLoading }] = useAddToWishlistMutation();
  const wishlist = useAppSelector((state) => state.wishlist.wishlist);
  const wishlistItems = wishlist?.items;
  const productId = product?._id;
  
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

  useEffect(() => {
    if (mainSlider) {
      setIsFirstSlide(mainSlider.isBeginning);
      setIsLastSlide(mainSlider.isEnd);
    }
    if (thumbsSwiper) {
      setIsFirstThumb(thumbsSwiper.isBeginning);
      setIsLastThumb(thumbsSwiper.isEnd);
    }
  }, [mainSlider, thumbsSwiper]);

  const handleItemClick = (index, image) => {
    if (mainSlider) {
      mainSlider.slideTo(index);
    }
    setSelectedImage(image);
  };

  const handleAddToWishlist = async () => {
    await addToWishlist({ data: { productId } });
  };

  useEffect(() => {
    if (addToWishlistData?.message) {
      toast.success(addToWishlistData?.message);
    }
  }, [addToWishlistData]);

  return (
    <>
      {product?.isMultiDiscount && (
        <div className="mb-2 uppercase text-brand__font__size__md font-brand__font__600 text-text__gray flex items-center gap-1.5">
          <span>
            <RiPriceTagFill size={20} className="text-red-600 mb-1" />
          </span>
          <span>Save up to</span>
          <span className="text-red-600">£{product?.multiDiscountAmount}</span>
          <span>when you buy more than</span>
          <span className="text-red-600">{product?.multiDiscountAmount}</span>
          <span>items</span>
        </div>
      )}

      <div className="flex flex-col items-center">
        <Swiper
          spaceBetween={10}
          modules={[Thumbs, EffectFade, Navigation]}
          effect="fade"
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            prevEl: ".main-swiper-prev",
            nextEl: ".main-swiper-next",
          }}
          onSwiper={setMainSlider}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            setIsFirstSlide(swiper.isBeginning);
            setIsLastSlide(swiper.isEnd);
          }}
          className="w-full mb-4 relative group !overflow-visible"
        >
          <button
            onClick={handleAddToWishlist}
            className="absolute top-5 right-10 z-30 overflow-hidden bg-white shadow-md border border-gray-200/50 rounded-full p-2"
          >
            {wishlistItems?.some((item) => item?._id === productId) ? (
              <MdFavorite className="text-brand__font__size__md cursor-pointer text-gray-600 transition-all" />
            ) : (
              <MdFavoriteBorder className="text-brand__font__size__md cursor-pointer text-gray-600 transition-all" />
            )}
          </button>
          {product?.slideImages?.map((image, idx) => (
            <SwiperSlide
              key={idx}
              className="!flex justify-center items-center rounded-2xl w-full h-full min-h-[500px] min-w-[500px]"
              onClick={onOpen}
            >
              <div
                className="relative overflow-hidden cursor-zoom-in h-full w-full flex justify-center items-center"
                onMouseMove={handleMouseMove}
                onClick={toggleZoom}
                style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
              >
                <img
                  src={`${env.app_url}${image?.filepath}`}
                  alt={image?.alternateText || ""}
                  className={`w-full h-full max-h-[700px] max-w-[700px] object-contain transition-transform duration-300 ${
                    isZoomed ? "scale-[2.5]" : "scale-100"
                  }`}
                  style={{
                    transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
          <button
            className={`main-swiper-prev z-10 absolute top-1/2 left-2 transform -translate-y-1/2 bg-teagreen-300 hover:bg-teagreen-400 text-teagreen-800 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isFirstSlide ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276E;
          </button>
          <button
            className={`main-swiper-next z-10 absolute top-1/2 right-2 transform -translate-y-1/2 bg-teagreen-300 hover:bg-teagreen-400 text-teagreen-800 duration-300 py-2 px-3 text-2xl rounded-lg shadow-lg ${
              isLastSlide ? "!hidden" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            &#x276F;
          </button>
        </Swiper>

        {/* Thumbnail Slider if more than 6 thumbnails */}
        {product?.slideImages?.length > 6 ? (
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={6}
            spaceBetween={10}
            navigation={{
              prevEl: ".thumb-swiper-prev",
              nextEl: ".thumb-swiper-next",
            }}
            className="w-full flex items-center relative"
          >
            {product?.slideImages?.map((image, idx) => (
              <SwiperSlide key={idx} className="cursor-pointer">
                <div
                  onClick={() => handleItemClick(idx, image)}
                  // onClick={() => mainSlider?.slideTo(idx)}
                  className={`rounded-lg flex items-center justify-center p-1 ${
                    activeIndex === idx ? "border border-teagreen-500" : ""
                  }`}
                >
                  <img
                    src={`${env.app_url}${image?.filepath}`}
                    alt={image?.alternateText || ""}
                    className="w-[100px] h-[100px] rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex items-center gap-2">
            {product?.slideImages?.map((image, idx) => (
              <div
                key={idx}
                onClick={() => handleItemClick(idx, image)}
                className={`cursor-pointer rounded-lg flex items-center justify-center p-1 ${
                  activeIndex === idx ? "border border-teagreen-500" : ""
                }`}
              >
                <img
                  src={`${env.app_url}${image?.filepath}`}
                  alt={image?.alternateText || ""}
                  className="w-[100px] h-[100px] rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <LoadingOverlay isLoading={addToWishlistLoading} />
    </>
  );
}

export default ProductSlider;
