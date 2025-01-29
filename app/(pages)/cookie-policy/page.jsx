import axios from "@/api/axios";
import { CommonBanner, CookiePolicyContents } from "@/components";

export const metadata = {
  title: "Cookie Policy",
  description: "",
  keywords: "",
  openGraph: {
    title: "Cookie Policy",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy",
    description: "",
  }
};

const CookiePolicy = async () => {
  const {
    data: { data: systemData = {} } = {},
  } = await axios.get("/public/system");

  return (
    <div>
      <CommonBanner bannerTitle="Cookie Policy" />
      <div className="container px-4 lg:px-20 section-gap banner-gap">
        <CookiePolicyContents systemData={systemData} />
      </div>
    </div>
  );
};

export default CookiePolicy;
