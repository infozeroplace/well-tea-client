import axios from "@/api/axios";
import { CommonBanner } from "@/components";
import SubscriptionPolicyContent from "@/components/subscriptionPolicy";
import { subscriptionMetadata } from "@/data/staticMetaData";

export const revalidate = 0;

export async function generateMetadata() {
  return subscriptionMetadata;
}

const Subscription = async () => {
  const { data: { data: systemData = {} } = {} } = await axios.get(
    "/public/system"
  );

  return (
    <div>
      <CommonBanner bannerTitle="Subscription" />
      <div className="container px-4 lg:px-10 py-10 section-gap">
        <SubscriptionPolicyContent data={systemData.subscriptionPolicy || ""} />
      </div>
    </div>
  );
};

export default Subscription;
