import axios from "@/api/axios";
import { CommonBanner, DeliveryContents } from "@/components";

export const metadata = {
  title: "Delivery",
  description: "",
  keywords: "",
  openGraph: {
    title: "Delivery",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delivery",
    description: "",
  }
};

const Delivery = async () => {
  const {
    data: { data: systemData = {} } = {},
  } = await axios.get("/public/system");
console.log(systemData);

  return (
    <div>
      <CommonBanner bannerTitle="Delivery" />
      <div className="container px-4 lg:px-20 section-gap banner-gap">
        <DeliveryContents systemData={systemData} />
      </div>
    </div>
  );
};

export default Delivery;
