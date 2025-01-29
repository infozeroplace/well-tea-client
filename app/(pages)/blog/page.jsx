import axios from "@/api/axios";
import { BlogContents, CommonBanner } from "@/components";

export const metadata = {
  title: "Blog",
  description: "",
  keywords: "",
  openGraph: {
    title: "Blog",
    description: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "",
  }
};


const Blog = async () => {
  const {
    data: { data: systemData = {} } = {},
  } = await axios.get("/public/system");

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
