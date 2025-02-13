"use client";

import { env } from "@/config/env";
import {
  removeFromCart,
  updateQuantity,
} from "@/services/features/cart/cartSlice";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiShoppingCartThin, PiTrashSimpleLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { SectionLinkButton } from "../shared";
import { useAddToCartMutation } from "@/services/features/cart/cartApi";
import { addCart, removeCart } from "@/services/features/cart/cartSlices";
import { useAppSelector, useAppDispatch } from "@/services/hook";
import Link from "next/link";
import { toast } from "react-hot-toast";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

const Cart = ({ buttonClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addToCart, { data: addToCartData, isLoading }] = useAddToCartMutation();
  const carts = useAppSelector((state) => state.carts.carts);
  const dispatch = useAppDispatch();
  const totalQuantity = carts?.totalQuantity;
  const pathname = usePathname();


  const shippingCost = totalQuantity > 0 ? 20.0 : 0;

  const handleUpdateQuantity = async (
    productId,
    actionType,
    purchaseType,
    quantity,
    unitPriceId,
    subscriptionId
  ) => {
    await addToCart({
      data: {
        productId,
        actionType,
        purchaseType,
        quantity,
        unitPriceId,
        subscriptionId,
      },
    });
    if (addToCartData?.success) {
      toast.success(addToCartData?.message);
    } else {
      toast.error(addToCartData?.message);
    }
  };


  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className={buttonClass}>
        <PiShoppingCartThin />
        {totalQuantity > 0 && (
          <span className="absolute top-2 right-2 z-10 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
            {totalQuantity}
          </span>
        )}
        <svg className="circle" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="24" />
        </svg>
      </button>

      {/* ------ Cart -------- */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[450px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b h-14">
          <h2 className="text-lg font-semibold">Your cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500">
            <RxCross1 />
          </button>
        </div>
        {/* ------ Cart Items ------ */}
        <div className="flex flex-col">
          <div className="overflow-y-auto h-[calc(100vh-15rem)]">
            {totalQuantity < 1 ? (
              <div className="flex items-center justify-center h-96">
                <h3>Your cart is empty!</h3>
              </div>
            ) : (
              carts?.items?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-3 border-b hover:bg-teagreen-100 duration-300"
                >
                  <Link
                    href={`/${item?.urlParameter}`}
                    className="flex items-center"
                  >
                    <div className="mr-3">
                      <Image
                        src={`${env.app_url}${item.thumbnail?.filepath}`}
                        alt={item?.thumbnail?.alternateText}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <h3 className="text-sm font-light">{item?.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-light border-r-1 border-gray-600 pr-2">
                          {item?.unit}
                        </p>
                        <p className="text-sm font-normal">
                          £{toNumber(item?.totalPrice).toFixed(2)}
                        </p>
                      </div>
                      {item.purchaseType === "subscribe" && (
                        <p className="text-sm font-normal">
                          Subscribtion: {item?.subscription}
                        </p>
                      )}
                    </div>
                  </Link>
                  <div className="flex items-center border text-base font-light">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.productId,
                          "minus",
                          item.purchaseType,
                          item.quantity,
                          item.unitPriceId,
                          item.subscriptionId
                        )
                      }
                      className="px-2 py-2 bg-gray-50 hover:bg-gray-100"
                    >
                      <PiTrashSimpleLight className="" />
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.productId,
                          "minus",
                          item.purchaseType,
                          1,
                          item.unitPriceId,
                          item.subscriptionId
                        )
                      }
                      className="px-2 py-1 bg-gray-50 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.productId,
                          "plus",
                          item.purchaseType,
                          1,
                          item.unitPriceId,
                          item.subscriptionId
                        )
                      }
                      className="px-2 py-1 bg-gray-50 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* --------- Cart Bottom --------- */}
          <div className="p-4 border-t text-sm mt-auto">
            <div className="flex justify-between text-sm">
              <span>Items ({totalQuantity})</span>
              <span>£{toNumber(carts?.totalPrice).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>£{toNumber(shippingCost).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold mb-5">
              <span>Total</span>
              {/* <span>£{toNumber(cart.totalPrice + shippingCost).toFixed(2)}</span> */}
            </div>
            <SectionLinkButton
              url={`/cart`}
              title="View basket and checkout"
              buttonClass="!block !w-full px-10"
              textClass="!block !w-full"
            />
          </div>
        </div>
      </div>
      {/* -------- Mask -------- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Cart;
