import NextImage from "@/components/shared/NextImage";
import { env } from "@/config/env";
import Link from "next/link";

const CategoryOfferCard = ({ title, subTitle, thumbnail = [], url }) => {
  return (
    <Link
      href={url}
      className={`rounded-lg group relative bg-cover bg-no-repeat inline-block overflow-hidden`}
      style={{
        backgroundImage: `url(${env.app_url}${thumbnail[0]?.filepath})`,
      }}
    >
      {/* <NextImage
        img={`${env.app_url}${thumbnail[0]?.filepath}`}
        alt={`${thumbnail[0]?.alternateText}`}
        presets={{width: 300, height: 400}}
        className= "absolute top-0 left-0 object-contain w-full h-full"
      /> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
      <div className="text-white flex flex-col justify-center items-center text-center h-[500px] relative">
        <div className="text-3xl group-hover:text-4xl duration-300 capitalize">
          <p className="font-semibold">{subTitle}</p>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryOfferCard;
