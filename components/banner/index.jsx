import { env } from "@/config/env";
import { SectionLinkButton } from "../shared";

function Banner({ data }) {
  return (
    <div className="container px-5 sm:px-10 md:px-14 lg:px-10 section-gap h-[500px] w-full">
      <div
        className="bg-cover bg-no-repeat bg-center h-full w-full flex items-center"
        style={{
          backgroundImage: `url(${env.app_url}${data.bannerImage[0].filepath})`,
        }}
      >
        <div className="max-w-[450px] w-full flex flex-col justify-center px-20 gap-5 py-10 text-center lg:text-left bg-teagreen-500">
          <h1 className="text-2xl xl:text-3xl font-semibold text-white">
            {data?.title || ""}
          </h1>
          <p className="text-sm xl:text-base">{data?.subTitle || ""}</p>
          <SectionLinkButton
            title={data?.buttonText || ""}
            buttonClass="text-sm font-semibold px-10 border border-teagreen-700"
            url={data?.buttonUrl || ""}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
