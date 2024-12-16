"use client"
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";

function CategorySlider() {
  const categoryCardDetails = [
    {
      image: "/images/product_one.jpg",
      title: "Green Tea",
      price: "$15",
    },
    {
      image: "/images/product_two.jpg",
      title: "Organic White Tea",
      price: "$20",
    },
    {
      image: "/images/product_three.jpg",
      title: "Organic black Tea",
      price: "$25",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <Slider {...settings}>
        {categoryCardDetails.map((item, index) => (
          <div key={index} className="p-4">
            <CategoryCard
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategorySlider;
