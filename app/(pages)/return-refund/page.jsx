import axios from "@/api/axios";
import { CommonBanner, ReturnRefundContents } from "@/components";

export const metadata = {
  title: "Return & Refund",
  description: "",
  keywords: "",
  openGraph: {
    title: "Return & Refund",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Return & Refund",
    description: "",
  },
};

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
