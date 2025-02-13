"use client";
import axios from "@/api/axios";
import { CommonBanner, SectionButton } from "@/components";
import { env } from "@/config/env";
import {
  removeFromCart,
  updateQuantity,
} from "@/services/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RelatedProducts } from "../tea/components";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

const CartPage = () => {
  const cartItems = useSelector((state) => state?.cart?.items);
  const totalQuantity = useSelector((state) => state?.cart?.totalQuantity);
  const totalCost = useSelector((state) => state?.cart?.totalCost);
  const dispatch = useDispatch();
  const ids = cartItems.map((item) => item?.product?._id);
  const [relatedProductsData, setRelatedProductsData] = useState([]);

  const shippingCost = totalQuantity > 0 ? 20.0 : 0;

  // Fetching you may also like products
  const fetchRelatedProduct = async () => {
    const data = await axios.post("/public/product/get-related-products", {
      ids: ids,
    });
    setRelatedProductsData(data.data.data);
  };

  useEffect(() => {
    if (cartItems?.length > 0) fetchRelatedProduct();
  }, []);

  const handleIncreaseQuantity = (
    productId,
    unit,
    currentQuantity,
    purchaseType
  ) => {
    dispatch(
      updateQuantity({
        productId,
        unit,
        quantity: currentQuantity + 1,
        purchaseType,
      })
    );
  };

  const handleDecreaseQuantity = (
    productId,
    unit,
    currentQuantity,
    purchaseType
  ) => {
    if (currentQuantity > 1) {
      dispatch(
        updateQuantity({
          productId,
          unit,
          quantity: currentQuantity - 1,
          purchaseType,
        })
      );
    } else {
      dispatch(removeFromCart({ productId, unit, purchaseType }));
    }
  };

  const handleRemoveItem = (productId, unit, purchaseType) => {
    dispatch(removeFromCart({ productId, unit, purchaseType }));
  };

  return (
    <div>
      <CommonBanner bannerTitle="Cart" />
      {cartItems?.length < 1 ? (
        <div className="flex items-center justify-center h-60 text-brand__font__size__lg2">
          <h3>Your cart is empty!</h3>
        </div>
      ) : (
        <div className="bg-gray-50 py-10 lg:py-20">
          <div className="container sm:px-10 lg:px-20 flex flex-col lg:flex-row  gap-10">
            {/* Cart Section */}
            <div className="w-full lg:w-4/6 h-fit">
              <div className="">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-left text-brand__font__size__sm uppercase">
                      <th className="py-3 font-medium pl-2 sm:pl-5">Product</th>
                      <th className="py-3 font-medium text-center">Quantity</th>
                      <th className="py-3 font-medium text-right pr-2 sm:pr-5">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-teagreen-100"
                      >
                        <td className="py-4 flex items-center gap-1 md:gap-5 pl-2 sm:pl-5">
                          <img
                            src={`${env.app_url}${item.product?.thumbnails[0]?.filepath}`}
                            alt={item.product?.thumbnails[0]?.alternateText}
                            className="w-20 h-20 object-cover"
                          />
                          <div>
                            <h4 className="font-light">
                              {item?.product.title}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {item?.unitObj?.unit}
                            </p>
                            <p className="text-sm text-gray-500">
                              £{item?.productPrice}
                            </p>
                            {item.purchaseType === "subscribe" && (
                              <p className="text-sm text-gray-500">
                                Every {item?.subObj?.weeks}
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="text-center font-light">
                          <div className="flex items-center justify-center gap-2.5 bg-gray-100 border rounded">
                            <button
                              onClick={() =>
                                handleDecreaseQuantity(
                                  item?.product?._id,
                                  item?.unitObj?.unit,
                                  item?.quantity,
                                  item?.purchaseType
                                )
                              }
                              className="text-brand__font__size__lg"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                handleIncreaseQuantity(
                                  item?.product?._id,
                                  item?.unitObj?.unit,
                                  item?.quantity,
                                  item?.purchaseType
                                )
                              }
                              className="text-brand__font__size__lg"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-right font-light pr-2 sm:pr-5">
                          £{(item?.productPrice * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary Section */}
            <div className="lg:w-2/6 lg:sticky lg:top-0 lg:h-screen flex flex-col gap-6">
              <div className="bg-white p-6 border rounded">
                <h3 className="text-lg font-light mb-4">Coupon Code</h3>
                <p className="text-sm mb-4">
                  Enter a coupon code to get a discount.
                </p>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  //   value={coupon}
                  className="w-full border px-4 py-2 mb-4 text-gray-700 focus:outline-none"
                />
                <button className="bg-teagreen-600 text-white rounded-lg px-4 py-2 w-full">
                  Apply
                </button>
              </div>

              <div className="bg-white p-6 border rounded">
                <h3 className="text-lg font-normal mb-4">Cart Total</h3>
                <div className="flex justify-between font-light mb-2">
                  <span>Total Items</span>
                  <span>{totalQuantity}</span>
                </div>
                <div className="flex justify-between font-light mb-2">
                  <span>Sub Total</span>
                  <span>£{toNumber(totalCost).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-light mb-2">
                  <span>Shipping Cost</span>
                  <span>£{toNumber(shippingCost).toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between text-md mt-2">
                  <span>Total</span>
                  <span>£{toNumber(totalCost + shippingCost).toFixed(2)}</span>
                </div>
                <div className="w-full mt-10">
                  <SectionButton title="Checkout" buttonClass="!w-full" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md grid grid-cols-2 gap-2 overflow-hidden">
                <button className="bg-gray-600 text-white py-3">
                  Link Pay
                </button>
                <button className="bg-gray-600 text-white py-3">
                  Google Pay
                </button>
                <button className="bg-gray-600 text-white py-3">Paypal</button>
                <button className="bg-gray-600 text-white py-3">
                  Pay later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {relatedProductsData.length > 0 && cartItems?.length > 0 && (
        <div className="px-10 py-5">
          {/* <YouMayAlsoLike relatedProductsData={relatedProductsData} /> */}
          <RelatedProducts
            relatedProductsData={relatedProductsData}
            title="You may also like"
          />
        </div>
      )}
    </div>
  );
};

export default CartPage;
