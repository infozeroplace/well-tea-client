import axios from "@/api/axios";
import { BlogContents, CommonBanner } from "@/components";

export const revalidate = 0;

export async function generateMetadata({params}) {
  const { article } = await params;

  const { data: { data: articleData = {} } = {} } = await axios.get(
    `/public/blog/${article}`
  );

  return {
    title: `${articleData?.metaTitle}`,
    description: `${articleData?.metaDescription}`,
    keywords: "",
    openGraph: {
      title: `${articleData?.metaTitle}`,
      description: `${articleData?.metaDescription}`,
      images: [
        {
          url: `${articleData?.thumbnail?.filepath}`,
          width: 1200,
          height: 630,
          alt: `${articleData?.thumbnail?.alternateText}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${articleData?.metaTitle}`,
      description: `${articleData?.metaDescription}`,
      images: [`${articleData?.thumbnail?.filepath}`],
    },
  };
}

const Blog = async ({ params }) => {
  const { article } = await params;

  const { data: { data: articleData = {} } = {} } = await axios.get(
    `/public/blog/${article}`
  );

  console.log(articleData);

  return (
    <div>
      <CommonBanner bannerTitle="Blog" />
      <div className="container px-4 lg:px-20 section-gap banner-gap">
        <BlogContents articleData={articleData.content} />
      </div>
    </div>
  );
};

export default Blog;
