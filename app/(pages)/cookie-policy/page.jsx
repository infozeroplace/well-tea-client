import axios from "@/api/axios";
import { CommonBanner, CookiePolicyContents } from "@/components";

export async function generateMetadata() {

  return {
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
    },
  }
}

const CookiePolicy = async () => {
  const {
    data: { data: systemData = {} } = {},
  } = await axios.get("/public/system");

  return (
    <div>
      <CommonBanner bannerTitle="Cookie Policy" />
      <div className="container px-4 lg:px-20 section-gap mt-4">
        <CookiePolicyContents systemData={systemData} />
      </div>
    </div>
  );
};

export default CookiePolicy;
