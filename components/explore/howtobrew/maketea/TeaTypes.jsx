import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const TeaTypes = () => {
  const typesData = [
    {
      title: "Green Tea",
      description:
        "Green teas undergo virtually no oxidation and are mainly produced in China and Japan with subtle changes in flavour.",
      image: "/images/teatypeimage.png",
      url: "green tea",
    },
    {
      title: "White Tea",
      description:
        "Black tea goes through the most processing of all tea, resulting in a robust, fragrant and full-bodied brew.",
      image: "/images/teatypeimage.png",
      url: "white tea",
    },
    {
      title: "Flowering Tea",
      description:
        "Fruits ranging from tropical to tree fruit and wholesome veggies are dried then combined for complex fruity sips.",
      image: "/images/teatypeimage.png",
      url: "flowering tea",
    },
    {
      title: "Black Tea",
      description:
        "Oolong tea comes in two main varieties with flavours that range from floral and vegetal to sweet and woody.",
      image: "/images/teatypeimage.png",
      url: "black tea",
    },
    {
      title: "Herbal Tea",
      description:
        "Not technically tea as they don’t come from Camellia Sinensis, herbal and floral tisanes are a collection of flowers, leavesand herbs.",
      image: "/images/teatypeimage.png",
      url: "herbal tea",
    },
    {
      title: "Pureh Tea",
      description:
        "Originally from India, chai’s a combination of black tea and spices simmered with milk and sweetened with honey.",
      image: "/images/teatypeimage.png",
      url: "pureh tea",
    },
    {
      title: "Fruit Tea",
      description:
        "The least processed of all teas, white tea is the closest tea comes to its natural state.",
      image: "/images/teatypeimage.png",
      url: "fruit tea",
    },
    {
        title: "Oolong Tea",
        description:
          "The least processed of all teas, white tea is the closest tea comes to its natural state.",
        image: "/images/teatypeimage.png",
        url: "oolong tea",
      },
      {
        title: "Jasmine Tea",
        description:
          "The least processed of all teas, white tea is the closest tea comes to its natural state.",
        image: "/images/teatypeimage.png",
        url: "jasmine tea",
      },
  ];
  return (
    <div className="section-gap">
      <div className="content-gap">
        <div className="text-3xl font-medium mb-2">Tea types</div>
        <p className="w-1/2">
          With over 100 teas available, we’ve got your beloved favourites as
          well as unexpected flavours so there’s something for every taste.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {typesData.map((data, index) => (
          <div key={index} className="grid grid-cols-12">
            <div className="col-span-7">
              <h2 className="text-xl font-medium">{data.title}</h2>
              <p className="text-sm">{data.description}</p>
            </div>
            <div className="col-span-5 mx-auto"><img src={data?.image} alt="type image" className="max-w-36" /></div>
            <Link href={`/product-category?type=${data?.url}`} className="col-span-12 text-2xl w-fit border border-teagreen-500 hover:border-teagreen-600 py-1 px-3 rounded-2xl"><IoMdArrowForward /></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaTypes;
