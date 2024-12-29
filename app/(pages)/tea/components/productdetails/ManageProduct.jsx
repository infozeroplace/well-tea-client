"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/services/features/cart/cartSlice";

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function ManageProduct({ product }) {
    const addOns = [
      {
        id: "1",
        designation: "best sellar",
        discount: "40",
        image: "/products/product_05.jpg",
        hoverImage: "/products/product_02.jpg",
        type: "Green Teas",
        title: "Rose Melange",
        rating: "4.5",
        price: "52.4",
        discountPrice: "41",
        weight: ["5", "10", "20", "30"],
      },
      {
        id: "2",
        designation: "best sellar",
        discount: "40",
        image: "/products/product_05.jpg",
        hoverImage: "/products/product_04.jpg",
        type: "Ginger Teas",
        title: "Tera Ooolong",
        rating: "4.8",
        price: "40.7",
        discountPrice: "32",
        weight: ["5", "10", "20", "30"],
      },
      {
        id: "3",
        designation: "best sellar",
        discount: "40",
        image: "/products/product_05.jpg",
        hoverImage: "/products/product_02.jpg",
        type: "Organic Teas",
        title: "White Melange",
        rating: "4.9",
        price: "34.37",
        discountPrice: "26",
        weight: ["5", "10", "20", "30"],
      },
    ];

    const [quantity, setQuantity] = useState(1);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [selectedWeight, setSelectedWeight] = useState(product.weight[0]);
    const [totalPrice, setTotalPrice] = useState(toNumber(product.price));
    const dispatch = useDispatch();

    const handleQuantityChange = (type) => {
      setQuantity((prevQuantity) =>
        type === "increment" ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
      );
    };

    const handleWeightSelect = (weight) => {
      setSelectedWeight(weight);
    };

    const handleAddOnSelect = (addOn) => {
      setSelectedAddOns((prevAddOns) => {
        if (prevAddOns.some((a) => a.id === addOn.id)) {
          return prevAddOns.filter((a) => a.id !== addOn.id);
        } else {
          return [...prevAddOns, addOn];
        }
      });
    };

    useEffect(() => {
      const addOnPrice = selectedAddOns.reduce(
        (sum, addOn) => sum + toNumber(addOn.price),
        0
      );
      const pricePerWeight = toNumber(product.price / product.weight[0]);
      const basePrice = toNumber(product.price);
      const calculatedTotal =
        pricePerWeight * quantity * selectedWeight + addOnPrice;

      setTotalPrice(calculatedTotal);
    }, [quantity, selectedAddOns, selectedWeight, product.price]);

    const handleAddToCart = () => {
      const itemsToAdd = [
        {
          product,
          weight: selectedWeight,
          quantity,
          addOns: [],
        },
        ...selectedAddOns.map((addOn) => ({
          product: addOn,
          weight: addOn.weight ? addOn.weight[0] : null,
          quantity: 1,
          addOns: [],
        })),
      ];

      itemsToAdd.forEach((item) => dispatch(addToCart(item)));
    };

  return (
    <div>
      <div className="my-5">
        <h3 className="mb-4 font-normal">Product Weight</h3>
        <div className="flex gap-4">
          {product.weight.map((item, index) => (
            <button
              key={index}
              onClick={() => handleWeightSelect(item)}
              className={`py-2 px-10 rounded-full ${
                selectedWeight === item
                  ? "bg-teagreen-600 text-white"
                  : "text-teagreen-800 bg-teagreen-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Helpful Add-Ons</h3>
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4"
          >
            <div className="flex items-center">
              <img
                src={product.image}
                alt={addOn.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="text-teagreen-800 font-normal">{addOn.title}</p>
                <p>£{toNumber(addOn.price).toFixed(2)}</p>
              </div>
            </div>
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={selectedAddOns.some((a) => a.id === addOn.id)}
              onChange={() => handleAddOnSelect(addOn)}
            />
          </div>
        ))}
      </div>

      <div className="flex mb-6">
        <div className="flex items-center bg-teagreen-600 text-white py-1">
          <button
            className="w-10 h-10 text-xl flex items-center justify-center"
            onClick={() => handleQuantityChange("decrement")}
          >
            -
          </button>
          <span className="px-4 text-lg">{quantity}</span>
          <button
            className="w-10 h-10 text-xl flex items-center justify-center"
            onClick={() => handleQuantityChange("increment")}
          >
            +
          </button>
        </div>
        <button
          className="bg-teagreen-700 text-white py-2 px-6 text-lg"
          onClick={handleAddToCart}
        >
          Add to Cart - £{toNumber(totalPrice).toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default ManageProduct;