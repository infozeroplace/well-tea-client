import axios from "@/api/axios";
import { BlogContents, CommonBanner } from "@/components";

export const revalidate = 0;

export async function generateMetadata() {
  return {
    title: "Blog",
    description: "",
    keywords: "",
    openGraph: {
      title: "Blog",
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
      title: "Blog",
      description: "",
      images: [""],
    },
  };
}

const Blog = async () => {
  const { data: { data: systemData = {} } = {} } = await axios.get(
    "/public/system"
  );

  console.log("SystemData", systemData);
  return (
    <div>
      <CommonBanner bannerTitle="Blog" />
      <div className="container px-4 lg:px-20 section-gap banner-gap">
        <BlogContents systemData={systemData} />
      </div>
    </div>
  );
};

export default Blog;
