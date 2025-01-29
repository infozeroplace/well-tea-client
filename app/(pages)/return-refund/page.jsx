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
  }
};

const ReturnRefund = async () => {
  const {
    data: { data: systemData = {} } = {},
  } = await axios.get("/public/system");

  return (
    <div>
      <CommonBanner bannerTitle="Return & Refund" />
      <div className="container px-4 lg:px-20 section-gap banner-gap">
        <ReturnRefundContents systemData={systemData} />
      </div>
    </div>
  );
};

export default ReturnRefund;
