import axios from "@/api/axios";
import { PrivacyPolicyContents } from "@/components";


const PrivacyPolicy = async () => {
  const {
    data: { data: systemData = {} } = {},
  } = await axios.get("/public/system");
console.log("systemdata", systemData);

  return (
    <div className="container px-4 lg:px-20 section-gap mt-4">
      <div className="content-gap text-center text-4xl font-medium">
        Privacy Policy
      </div>
      <PrivacyPolicyContents systemData={systemData} />
    </div>
  );
};

export default PrivacyPolicy;
