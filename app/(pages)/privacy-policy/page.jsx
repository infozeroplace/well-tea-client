import axios from "@/api/axios";
import { CommonBanner, PrivacyPolicyContents } from "@/components";

export const revalidate = 0;

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
      <div className="container px-4 lg:px-10 py-10 section-gap">
        <PrivacyPolicyContents data={systemData.privacyPolicy || ""} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
