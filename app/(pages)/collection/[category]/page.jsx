import axios from "@/api/axios";
import { CommonBanner } from "@/components";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const capitalizeEachWord = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export async function generateMetadata({
  searchParams: rawSearchParams,
  params,
}) {
  const { category } = await params;
  const decodedCategory = await decodeURIComponent(category);
  const searchParams = await Promise.resolve(rawSearchParams);
  const queryParams = new URLSearchParams(searchParams).toString();

  const metaTitle =
    searchParams.productType && searchParams.productType.split(",").slice(0, 3).join(" | ");
  
  // const title = searchParams.productType
  //   ? capitalizeEachWord(metaTitle)
  //   : "All Products";

  const title = `${capitalizeEachWord(decodedCategory)} Products`;
  const imageUrl = "/images/chooseus-1.jpg";
  const siteUrl = "welltea.zeroplace.co/";

  const queryString = queryParams ? `?${queryParams}` : "";
  const fullUrl = `${siteUrl}collection/${decodedCategory}${queryString}`;

  // console.log(fullUrl);

  return {
    title: title,
    description: `Explore products under ${decodedCategory}.`,
    keywords: `${decodedCategory}, ${searchParams.productType}`,
    openGraph: {
      title: title,
      description: `Explore products under ${decodedCategory}.`,
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      siteName: "Well Tea",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: `Explore products under ${decodedCategory}.`,
      images: [imageUrl],
    },
  };
}

const ProductCategoryScreen = async ({
  params,
  searchParams: rawSearchParams,
}) => {
  const { category } = await params;
  const decodedCategory = await decodeURIComponent(category);

  const searchParams = await Promise.resolve(rawSearchParams);
  const queryParams = new URLSearchParams(searchParams).toString();
  const url = `/public/product/list?category=${decodedCategory}&${queryParams}`;

  const { data: { data = [], meta = {} } = {} } = await axios.get(url);

  // const metaTitle =
  //   searchParams.productType && searchParams.productType.split(",").join(" | ");

  const title = `${capitalizeEachWord(decodedCategory)} Products`;
  const siteUrl = "http://welltea.zeroplace.co/";

  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "ItemList",
  //   url: siteUrl,
  //   numberOfItems: data.length,
  //   itemListOrder: "Unordered",
  //   itemListElement: data.map((product, index) => ({
  //     "@type": "ListItem",
  //     position: index + 1,
  //     item: {
  //       "@type": "Product",
  //       name: product?.title,
  //       image: product?.thumbnails[0]?.path,
  //       description: product?.shortDescription,
  //       url: `${siteUrl}${product?.urlParameter}`,
  //     },
  //   })),
  // };

  return (
    <div className="">
      {/* <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head> */}
      <CommonBanner bannerTitle={title}/>
      <ProductList products={data} category={decodedCategory} meta={meta} />
    </div>
  );
};

export default ProductCategoryScreen;
