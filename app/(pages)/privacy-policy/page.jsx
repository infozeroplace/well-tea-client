import axios from "@/api/axios";
import { CommonBanner, PrivacyPolicyContents } from "@/components";

export async function generateMetadata() {
  return {
    title: "Privacy Policy",
    description: "",
    keywords: "",
    openGraph: {
      title: "Privacy Policy",
      description: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Privacy Policy",
      description: "",
      images: [""],
    },
  };
}

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
