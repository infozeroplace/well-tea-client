import axios from "@/api/axios";
import { CommonBanner, FAQsCollapse } from "@/components";
import { faqMetadata } from "@/data/staticMetaData";

export const revalidate = 0;

// export async function generateMetadata() {
//   return {
//     title: "FAQs",
//     description: "",
//     keywords: "",
//     openGraph: {
//       title: "FAQs",
//       description: "",
//       images: [
//         {
//           url: "",
//           width: 1200,
//           height: 630,
//           alt: "",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "FAQs",
//       description: "",
//       images: [
//         {
//           url: "",
//           width: 1200,
//           height: 630,
//           alt: "",
//         },
//       ],
//     },
//   };
// }

export const metadata = faqMetadata;

const FAQs = async () => {
  const {
    data: { data: systemData },
  } = await axios.get("/public/system");

  console.log("systemData");
  console.log(systemData?.faqs);
  console.log(systemData?.faqs.length);

  return (
    <div>
      <CommonBanner
        bannerTitle="FAQs"
        bannerDescription="Got a burning question? Check the frequently asked questions below - or contact us if you don't find what you're looking for, and we'll be happy to help."
      />

      <div className="container-narrow px-5 sm:px-10 md:px-14 lg:px-20 [column-count:1] lg:[column-count:2] gap-8 banner-gap section-gap">
        {systemData?.faqs.map((faqContent, index) => (
          <FAQsCollapse
            key={faqContent?.id || index}
            faqTitle={faqContent?.title}
            faqInfo={faqContent?.faqs}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
