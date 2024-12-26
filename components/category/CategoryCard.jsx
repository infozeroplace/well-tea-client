"use client"

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/services/features/cart/cartSlice";

const CategoryCard = ({ item, url }) => {
  const CardUrl = decodeURIComponent(url);
  const dispatch = useDispatch();

  console.log(url);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: item.id,
      name: item.title,
      price: item.price,
      weight: 5,
      quantity: 1,
      addOns: [],
    }))
  }
  
  if (!item) return null;

  return (
  );
};

export default CategoryCard;
