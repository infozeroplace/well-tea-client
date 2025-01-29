import axios from "@/api/axios";
import { PrivacyPolicyContents, CommonBanner } from "@/components";

export const metadata = {
  title: "Privacy Policy",
  description: "",
  keywords: "",
  openGraph: {
    title: "Privacy Policy",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: "",
  },
};

const PrivacyPolicy = async () => {
  const { data: { data: systemData = {} } = {} } = await axios.get(
    "/public/system"
  );

  return (
    <div>
      <CommonBanner bannerTitle="Privacy Policy" />
      {/* <div className="container px-4 lg:px-20 section-gap mt-4 w-full flex justify-center">
        <iframe
          width="736"
          height="414"
          src="https://www.youtube.com/embed/UdtoDueX0U0"
          title="eCommerce Privacy Policy For a Website |  Importance and How to Create one"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullscreen
          className="rounded-lg"
        ></iframe>
      </div> */}
      <div className="container px-4 lg:px-20 section-gap banner-gap">
        <PrivacyPolicyContents systemData={systemData} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
