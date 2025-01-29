import axios from "@/api/axios";
import { TermsConditionsContents, CommonBanner } from "@/components";

export const metadata = {
  title: "Terms & Conditions",
  description: "",
  keywords: "",
  openGraph: {
    title: "Terms & Conditions",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions",
    description: "",
  },
};

const TermsConditions = async () => {
  const { data: { data: systemData = {} } = {} } = await axios.get(
    "/public/system"
  );

  return (
    <div>
      <CommonBanner bannerTitle="Terms & Conditions" />
      {/* <div className="container px-4 lg:px-20 section-gap mt-4 w-full flex justify-center">
        <iframe
          width="736"
          height="414"
          src="https://www.youtube.com/embed/85uAUi9R0Vc"
          title="Terms and Conditions for Your Website"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-lg"
        ></iframe>
      </div> */}

      <div className="container px-4 lg:px-20 section-gap banner-gap">
        {/* <div className="content-gap text-center text-4xl font-medium">
        Terms & Conditions
      </div> */}
        <TermsConditionsContents systemData={systemData} />
      </div>
    </div>
  );
};

export default TermsConditions;
