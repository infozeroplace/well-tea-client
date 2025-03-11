"use client";
import axios from "@/api/axios";
import { CommonBanner, SectionButton, SectionLinkButton } from "@/components";
import EmptyBasket from "@/components/EmptyBasket";
import LoadingOverlay from "@/components/shared/LoadingOverlay";
import { env } from "@/config/env";
import { useAddToCartMutation } from "@/services/features/cart/cartApi";
import { useAppDispatch, useAppSelector } from "@/services/hook";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { RelatedProducts } from "../tea/components";
import NextImage from "@/components/shared/NextImage";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

const CartPage = () => {
  const [addToCart, { data: addToCartData, isLoading: addToCartLoading }] =
    useAddToCartMutation();
  const carts = useAppSelector((state) => state.carts.carts);
  const dispatch = useAppDispatch();
  // const router = useRouter();
  const ids = carts?.items?.map((item) => item?.productId);
  const [relatedProductsData, setRelatedProductsData] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const getCartItemKey = (item) => {
    return `${item.productId}-${item.unitPriceId}-${item.purchaseType}`;
  };

  // Fetching you may also like products
  const fetchRelatedProduct = async () => {
    const data = await axios.post("/public/product/get-related-products", {
      ids: ids,
    });
    setRelatedProductsData(data.data.data);
  };

  const handleUpdateQuantity = async (
    productId,
    actionType,
    purchaseType,
    quantity,
    unitPriceId,
    subscriptionId
  ) => {
    const storedIntent = localStorage.getItem("paymentIntent");
    const parsedIntent = storedIntent ? JSON.parse(storedIntent) : null;

    let paymentIntentId = "";
    let shippingMethodId = "";
    let coupon = "";

    if (
      parsedIntent &&
      parsedIntent.shippingMethodId &&
      parsedIntent.id &&
      parsedIntent.clientSecret &&
      parsedIntent.expiry > Date.now()
    ) {
      paymentIntentId = parsedIntent.id;
      shippingMethodId = parsedIntent.shippingMethodId;
      coupon = parsedIntent.coupon;
    }

    await addToCart({
      data: {
        paymentIntentId,
        shippingMethodId,
        coupon,
        productId,
        actionType,
        purchaseType,
        quantity,
        unitPriceId,
        subscriptionId,
      },
    });
  };

  // const handleNavigate = () => router.push("/checkout");

  useEffect(() => {
    if (carts?.items?.length) {
      const updatedQuantities = carts?.items?.reduce((acc, item) => {
        const key = getCartItemKey(item);
        acc[key] = item?.quantity || 1;
        return acc;
      }, {});
      setSelectedQuantities(updatedQuantities);
    }
  }, [carts?.items]);

  useEffect(() => {
    if (carts?.items?.length > 0) fetchRelatedProduct();
  }, []);

  useEffect(() => {
    if (addToCartData?.message) {
      toast.success(addToCartData?.message);
    }
  }, [addToCartData]);

  return (
    <>
      <div>
        <CommonBanner bannerTitle="Cart" />
        {carts?.items?.length < 1 ? (
          <EmptyBasket />
        ) : (
          <div className="py-10 lg:py-20">
            <div className="container flex flex-col lg:flex-row gap-10 px-5 sm:px-10 md:px-14 lg:px-10">
              {/* Cart Section */}
              <div className="w-full lg:w-4/6 h-fit">
                <div className="">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-left text-brand__font__size__sm uppercase">
                        <th className="py-3 font-medium pl-2 sm:pl-5">
                          Product
                        </th>
                        <th className="py-3 font-medium text-center">
                          Quantity
                        </th>
                        <th className="py-3 font-medium text-right pr-2 sm:pr-5">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts?.items?.map((item, index) => {
                        // const [selectedQuantity, setSelectedQuantity] = useState(item?.quantity);
                        const itemKey = getCartItemKey(item);
                        return (
                          <tr
                            key={index}
                            className="border-b border-gray-200 hover:bg-teagreen-100"
                          >
                            <td className="py-4 flex items-center gap-1 md:gap-5 pl-2 sm:pl-5">
                              <Link
                                href={`/${item?.urlParameter}`}
                                className="flex items-center gap-3 group"
                              >
                                <NextImage
                                  img={`${env.app_url}${item.thumbnail?.filepath}`}
                                  alt={item?.thumbnail?.alternateText}
                                  presets={{ width: 80, height: 80 }}
                                />
                                <div className="space-y-1">
                                  <h4 className="font-light group-hover:underline duration-300">
                                    {item?.title}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {item?.unit}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    £{item?.totalPrice}
                                  </p>
                                  {item.purchaseType === "subscribe" && (
                                    <p className="text-sm text-gray-500">
                                      Every {item?.subscription}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            </td>
                            <td className="text-center font-light">
                              <div className="flex items-center justify-center gap-2.5 bg-gray-100 border rounded">
                                <button
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item?.productId,
                                      "minus",
                                      item?.purchaseType,
                                      1,
                                      item?.unitPriceId,
                                      item?.subscriptionId
                                    )
                                  }
                                  className="text-brand__font__size__lg"
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  value={selectedQuantities[itemKey] ?? ""}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d+$/.test(value) || value === "") {
                                      setSelectedQuantities((prev) => ({
                                        ...prev,
                                        [itemKey]:
                                          value === "" ? 1 : Number(value),
                                      }));
                                    }
                                  }}
                                  className="w-10 text-center bg-transparent border-none outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                  onBlur={() => {
                                    handleUpdateQuantity(
                                      item?.productId,
                                      "absolute",
                                      item?.purchaseType,
                                      selectedQuantities[itemKey] ?? 1,
                                      item?.unitPriceId,
                                      item?.subscriptionId
                                    );
                                  }}
                                />

                                <button
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item?.productId,
                                      "plus",
                                      item?.purchaseType,
                                      1,
                                      item?.unitPriceId,
                                      item?.subscriptionId
                                    )
                                  }
                                  className="text-brand__font__size__lg"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="py-4 text-right font-light pr-2 sm:pr-5">
                              £{(item?.totalPrice).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary Section */}
              <div className="lg:w-2/6 lg:sticky lg:top-0 flex flex-col gap-6">
                {/* <div className="bg-white p-6 border rounded">
                <h3 className="text-lg font-light mb-4">Coupon Code</h3>
                <p className="text-sm mb-4">
                  Enter a coupon code to get a discount.
                </p>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full border px-4 py-2 mb-4 text-gray-700 focus:outline-none"
                />
                <button className="bg-teagreen-600 text-white rounded-lg px-4 py-2 w-full">
                  Apply
                </button>
              </div> */}

                <div className="bg-white p-6 border-l">
                  <h3 className="text-lg font-normal mb-4">Basket totals</h3>
                  <div className="flex justify-between font-light mb-2">
                    <span>Items</span>
                    <span>{carts?.totalQuantity || 0}</span>
                  </div>
                  <div className="flex justify-between font-light mb-2">
                    <span>Subtotal</span>
                    <span>£{toNumber(carts?.totalPrice).toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-md mt-2">
                    <span>Total</span>
                    <span>£{toNumber(carts?.totalPrice).toFixed(2)}</span>
                  </div>
                  <div className="w-full mt-10">
                    <SectionLinkButton
                      title="PROCEED TO CHECKOUT"
                      url="/checkout"
                      buttonClass="!w-full"
                      textClass="text-brand__font__size__sm"
                      // onClick={handleNavigate}
                    />
                  </div>
                </div>

                {/* <div className="bg-white rounded-lg shadow-md grid grid-cols-2 gap-2 overflow-hidden">
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
              </div> */}
              </div>
            </div>
          </div>
        )}

        {relatedProductsData?.length > 0 && carts?.items?.length > 0 && (
          <div className="px-10 py-5">
            {/* <YouMayAlsoLike relatedProductsData={relatedProductsData} /> */}
            <RelatedProducts
              relatedProductsData={relatedProductsData}
              title="You may also like"
            />
          </div>
        )}
      </div>
      <LoadingOverlay isLoading={addToCartLoading} />
    </>
  );
};

export default CartPage;
