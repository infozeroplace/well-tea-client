import NextImage from "./NextImage";

function CommonBanner({
  bannerImage,
  bannerTitle = "",
  breadcrumb,
  bannerDescription = "",
}) {
  return (
    <div className="relative w-full h-[200px]">
      <NextImage
        img={bannerImage || "/images/about-image-1.jpg"}
        alt="banner"
        className="w-full max-h-[200px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col items-center justify-center text-white text-brand__font__size__lg lg:text-brand__font__size__lg2 capitalize">
        <p>{bannerTitle}</p>
        <p className="text-sm mt-2 mx-4 md:mx-20 lg:mx-40 text-center">
          {bannerDescription}
        </p>
      </div>
      <div className="absolute top-0 left-0 pl-5 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-32 pt-4 w-1/3 text-brand__font__size__base text-white capitalize">
        {`Home / ${breadcrumb ? breadcrumb : bannerTitle}`}
      </div>
    </div>
  );
}

export default CommonBanner;
