import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function TeawareDropdown({ extraClass }) {
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

  const allTeawareList = [
    {
      name: "Teapots",
      url: "/",
    },
    {
      name: "Cups & Mugs",
      url: "/",
    },
    {
      name: "Tea Strainers",
      url: "/",
    },
    {
      name: "Loose Leaf Tea Essentials",
      url: "/",
    }
  ]

  return (
    <div>
      <div className="w-full mx-auto flex justify-between">
        <div className="basis-[35%] w-full border-r p-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-extralight text-xl">All Teaware</h3>
            {allTeawareList.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="hover:text-teagreen-600"
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="basis-[65%] w-full border-r p-5"></div>
      </div>
    </div>
    // <div className="w-full grid grid-cols-3 mt-10">
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

export default TeawareDropdown;
