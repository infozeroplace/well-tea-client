import axios from "@/api/axios";
import { CommonBanner, ReturnRefundContents } from "@/components";
import { returnRefundMetadata } from "@/data/staticMetaData";

export const revalidate = 0;

// export const metadata = returnRefundMetadata;

export async function generateMetadata() {
  return returnRefundMetadata;
}

const ReturnRefund = async () => {
  const { data: { data: systemData = {} } = {} } = await axios.get(
    "/public/system"
  );

  return (
    <div>
      <CommonBanner bannerTitle="Return & Refund" />
      <div className="container px-4 lg:px-10 py-10 section-gap">
        <ReturnRefundContents data={systemData.returnAndRefund || ""} />
      </div>
    </div>
  );
};

export default ReturnRefund;
