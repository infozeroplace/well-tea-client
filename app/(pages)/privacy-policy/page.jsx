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
  }
};

const PrivacyPolicy = async () => {
  const {
    data: { data: systemData = {} } = {},
  } = await axios.get("/public/system");

  return (
    <div>
      <CommonBanner bannerTitle="Privacy Policy" />
      <div className="container px-4 lg:px-20 section-gap mt-4">
        <PrivacyPolicyContents systemData={systemData} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
