import axios from "@/api/axios";
import { CommonBanner, DeliveryContents } from "@/components";

export const revalidate = 0;

export async function generateMetadata() {
  return {
    title: "Delivery",
    description: "",
    keywords: "",
    openGraph: {
      title: "Delivery",
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
      title: "Delivery",
      description: "",
      images: [""],
    },
  };
}

const Delivery = async () => {
  const { data: { data: systemData = {} } = {} } = await axios.get(
    "/public/system"
  );

  return (
    <div>
      <CommonBanner bannerTitle="Delivery" />
      <div className="container px-4 lg:px-10 py-10 section-gap">
        <DeliveryContents data={systemData.deliveryPolicy || ""} />
      </div>
    </div>
  );
};

export default Delivery;
