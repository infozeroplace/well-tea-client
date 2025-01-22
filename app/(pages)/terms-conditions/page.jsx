import axios from "@/api/axios";
import { TermsConditionsContents, CommonBanner } from "@/components";

export const metadata = {
  title: "Terms & Conditions",
  description: "",
  keywords: "",
};

const TermsConditions = async () => {
  const {
    data: { data: systemData = {} } = {},
  } = await axios.get("/public/system");

  return (
    <div>
      <CommonBanner bannerTitle="Terms & Conditions" />
      <div className="container px-4 lg:px-20 section-gap mt-4">
        {/* <div className="content-gap text-center text-4xl font-medium">
        Terms & Conditions
      </div> */}
        <TermsConditionsContents systemData={systemData} />
      </div>
    </div>
  );
};

export default TermsConditions;
