import Image from "next/image";

function CommonBanner({
  bannerImage,
  bannerTitle = "",
  breadcrumb,
  bannerDescription = "",
}) {
  return (
    <div className="relative max-w-[2500px] w-full h-[200px] overflow-hidden">
      <Image
        src={bannerImage || "/images/about-image-1.jpg"}
        alt="banner"
        // width={1920}
        // height={300}
        objectFit="cover"
        fill
      />
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col items-center justify-center text-white text-brand__font__size__lg lg:text-brand__font__size__lg2 capitalize">
        <p>{bannerTitle}</p>
        <p className="text-sm mt-2 mx-4 md:mx-20 lg:mx-40 text-center">
          {bannerDescription}
        </p>
      </div>
      <span className="absolute top-0 left-0 pl-5 sm:pl-10 md:pl-14 lg:pl-20 pt-4 w-1/3 text-brand__font__size__base text-white capitalize">
        {`Home / ${breadcrumb ? breadcrumb : bannerTitle}`}
      </span>
    </div>
  );
}

export default CommonBanner;
