import React from 'react';
import Image from 'next/image';

function CommonBanner({ bannerImage, bannerTitle, breadcrumb }) {
  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      <Image
        src={bannerImage || "/images/about-image-1.jpg"}
        alt="banner"
        width={1920}
        height={300}
        objectFit="cover"
      />
      <span className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center text-white text-brand__font__size__lg capitalize">
        {bannerTitle}
      </span>
      <span className="absolute top-10 left-10 w-1/3 text-brand__font__size__base text-white capitalize">
        {`Home / ${bannerTitle}`}
      </span>
    </div>
  );
}

export default CommonBanner;
