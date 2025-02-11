import axios from "@/api/axios";
import { CommonBanner, PrivacyPolicyContents } from "@/components";
import { privacyPolicyMetadata } from "@/data/staticMetaData";

export const revalidate = 0;

// export const metadata = privacyPolicyMetadata;

export async function generateMetadata() {
  return privacyPolicyMetadata;
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
