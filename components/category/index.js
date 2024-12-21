"use client"

import { useSelector, useDispatch } from "react-redux";
import CategorySlider from "./CategorySlider";
import CategoryButton from "./CategoryButton";
import { setCategory } from "@/services/features/category/categorySlice";
import { productList } from "@/data/products";

function Category() {
  // const productList = [
  //   {
  //     id: "1",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/newproduct_one.jpg",
  //     type: "Green Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "2",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/newproduct_two.jpg",
  //     type: "Ginger Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "3",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/newproduct_one.jpg",
  //     type: "Organic Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "4",
  //     designation: "best sellar",
  //     discount: "",
  //     image: "/images/product_two.jpg",
  //     type: "Yellow Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "5",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/newproduct_two.jpg",
  //     type: "Organic Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "6",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Black Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "7",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Organic Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "8",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Green Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "9",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Organic Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "10",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Herbal Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "11",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Herbal Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "12",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Herbal Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "13",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Green Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "14",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Herbal Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "15",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Organic Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "16",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Green Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "17",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Herbal Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "18",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Herbal Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "19",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Herbal Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "20",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Herbal Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "21",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Ginger Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "22",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Black Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  //   {
  //     id: "23",
  //     designation: "best sellar",
  //     discount: "40",
  //     image: "/images/product_two.jpg",
  //     type: "Yellow Teas",
  //     title: "White Tera Rose Melange",
  //     rating: "4",
  //     price: "50",
  //     discountPrice: "20",
  //   },
  // ];
  
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  
  const categoryList = [...new Set(productList.map((product) => product.type))];
  const filteredProducts = productList.filter((product) => product.type === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, 7);

  const activeClass = "border-[0.5px] border-teagreen-600";

  return (
    <div className="py-14">
      <h1 className="text-center text-4xl text-teagreen-800 mb-10">
        Explore our single teas
      </h1>
      <div className="flex gap-5 w-full mx-auto items-center justify-center mb-10">
        {/* <CategoryList categoryList={categoryList} /> */}
        {categoryList.map((item) => (
          <button
            key={item}
            onClick={() => dispatch(setCategory(item))}
            className={
              "rounded-full py-2 px-5 " +
              (selectedCategory === item
                ? activeClass
                : "bg-teagreen-100 text-teagreen-600")
            }
          >
            {item}
          </button>
        ))}
      </div>
      <div className="">
        <div className="my-10">
          <CategorySlider visibleProducts={visibleProducts} />
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-teagreen-700 hover:bg-teagreen-600 text-white rounded-full px-10 py-3 text-center mx-auto">
          Shop All Teas
        </button>
      </div>
    </div>
  );
}

export default Category;
