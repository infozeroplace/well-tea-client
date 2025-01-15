import axios from "@/api/axios";
import { TermsConditionsContents } from "@/components";


const TermsConditions = async () => {
  const {
    data: { data: systemData },
  } = await axios.get("/public/system");

  return (
    <div className="container px-4 lg:px-20 section-gap mt-4">
      <div className="content-gap text-center text-4xl font-medium">
        Terms & Conditions
      </div>
      {/* <div className="">
        <div
          dangerouslySetInnerHTML={{ __html: systemData?.termsAndConditions }}
        />
      </div> */}
        <TermsConditionsContents systemData={systemData} />
    </div>
  );
};

export default TermsConditions;
