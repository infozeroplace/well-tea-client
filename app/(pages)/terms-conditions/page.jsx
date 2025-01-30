import axios from "@/api/axios";
import { CommonBanner, TermsConditionsContents } from "@/components";

export const revalidate = 0;

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
      <div className="container px-4 lg:px-10 py-10 section-gap">
        <TermsConditionsContents data={systemData.termsAndConditions || ""} />
      </div>
    </div>
  );
};

export default TermsConditions;
