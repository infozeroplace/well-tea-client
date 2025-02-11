import axios from "@/api/axios";
import { CommonBanner, CookiePolicyContents } from "@/components";
import { cookiePolicyMetadata } from "@/data/staticMetaData";

export const revalidate = 0;

// export const metadata = cookiePolicyMetadata;

export async function generateMetadata() {
  return cookiePolicyMetadata;
}

const CookiePolicy = async () => {
  const { data: { data: systemData = {} } = {} } = await axios.get(
    "/public/system"
  );

  return (
    <div>
      <CommonBanner bannerTitle="Cookie Policy" />
      <div className="container px-4 lg:px-10 py-10 section-gap">
        <CookiePolicyContents data={systemData.cookiesPolicy || ""} />
      </div>
    </div>
  );
};

export default CookiePolicy;
