import axios from "@/api/axios";
import { CommonBanner, DeliveryContents } from "@/components";
import { deliveryMetadata } from "@/data/staticMetaData";

export const revalidate = 0;

// export const metadata = deliveryMetadata;

export async function generateMetadata() {
  return deliveryMetadata;
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
