import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function GiftDropdown() {
  const productTypes = [
    {
      image: "/images/Teanav_Organic_Tea.webp",
      name: "Black Tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Green Tea",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      name: "White Tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Oolong Tea",
    },
    {
      image: "/images/Teanav_Herbal_tea.webp",
      name: "Herbal Tea",
    },
    {
      image: "/images/Teanav_Flowering_tea.webp",
      name: "Pu-erh Tea",
    },
    {
      image: "/images/product_one.jpg",
      name: "Black Tea",
    },
    {
      image: "/images/product_two.jpg",
      name: "Green Tea",
    },
    {
      image: "/images/product_three.jpg",
      name: "White Tea",
    },
    {
      image: "/images/product_one.jpg",
      name: "Black Tea",
    },
  ];

  const allGiftList = [
    {
      name: "Tea Gifts",
      url: "/",
    },
    {
      name: "Tea Scented Candles",
      url: "/",
    },
    {
      name: "Gift Boxes & Hampers",
      url: "/",
    }
  ]

  const giftInspirationList = [
    {
      name: "Gifts under £30",
      url: "/"
    },
    {
      name: "Gifts under £50",
      url: "/"
    },
    {
      name: "Starter kits",
      url: "/"
    },
    {
      name: "Popular gifts",
      url: "/"
    }
  ]

  const seasonalGiftList = [
    {
      name: "Christmas Gifts",
      url: "/"
    },
    {
      name: "Anniversary Gifts",
      url: "/"
    },
    {
      name: "Birthday Gifts",
      url: "/"
    },
    {
      name: "Festive Teas",
      url: "/"
    }
  ]

  return (
    <div>
      <div className="w-full mx-auto flex justify-between">
        <div className="basis-[50%] flex justify-evenly w-full border-r p-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-extralight text-xl">All Gifts</h3>
            {allGiftList.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-teagreen-600"
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-extralight text-xl">Gift Inspirations</h3>
            {giftInspirationList.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-teagreen-600"
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-extralight text-xl">Seasonal Gifts</h3>
            {seasonalGiftList.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-teagreen-600"
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="basis-[50%] w-full flex justify-evenly pt-5">
          <Link href="/" className="group flex flex-col items-center gap-5">
            <Image
              src="/whychooseus/slide_banner_09.jpg"
              alt="gifts"
              width={300}
              height={250}
            />
            <h4 className="uppercase font-extralight text-teagreen-600">
              Christmas Gift Shop
            </h4>
          </Link>
          <Link href="/" className="flex flex-col items-center gap-5">
            <Image
              src="/whychooseus/slide_banner_09.jpg"
              alt="gifts"
              width={300}
              height={250}
            />
            <h4 className="uppercase font-extralight text-teagreen-600">
              Egift cards
            </h4>
          </Link>
        </div>
      </div>
    </div>
    // <div className="w-full grid grid-cols-3 mt-10">

    //   <div className="border-r-1">
    //     <Image
    //       src="/images/welltea_hero.png"
    //       alt=""
    //       width={200}
    //       height={200}
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //       }}
    //     />
    //   </div>

    //   <div className="w-full mx-auto border-r-1">
    //     <div className="flex justify-between mb-10 mx-5">
    //       <h3>Type</h3>
    //       <Link href="/tea" className="flex items-center gap-1">
    //         All Teas
    //         <BsArrowRight />
    //       </Link>
    //     </div>
    //     <div className="grid grid-cols-2 gap-5 ml-10">
    //       {productTypes.map((product, index) => (
    //         <Link
    //           href="#"
    //           key={index}
    //           className="flex items-center gap-3 hover:brightness-125"
    //         >
    //           <Image
    //             src={product.image}
    //             alt={product.name}
    //             width={50}
    //             height={50}
    //           />
    //           <p>{product.name}</p>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="border-r-1 flex flex-col gap-5">
    //     <div>
    //       <Image
    //         src="/images/welltea_hero.png"
    //         alt=""
    //         width={200}
    //         height={200}
    //         style={{
    //           width: "100%",
    //           height: "auto",
    //         }}
    //       />
    //     </div>
    //     <div>
    //       <Image
    //         src="/images/welltea_hero.png"
    //         alt=""
    //         width={200}
    //         height={200}
    //         style={{
    //           width: "100%",
    //           height: "auto",
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default GiftDropdown;
