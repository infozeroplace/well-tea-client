import axios from "@/api/axios";
import { CommonBanner, ReturnRefundContents } from "@/components";

export async function generateMetadata() {
  return {
    title: "Return & Refund",
    description: "",
    keywords: "",
    openGraph: {
      title: "Return & Refund",
      description: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Return & Refund",
      description: "",
      images: [""],
    },
  };
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
