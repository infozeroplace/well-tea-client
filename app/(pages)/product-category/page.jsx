import axios from "@/api/axios";
import ProductList from "@/components/ProductList";

const ProductCategory = async ({ searchParams: rawSearchParams }) => {
  const searchParams = await Promise.resolve(rawSearchParams);

  const queryParams = new URLSearchParams(searchParams).toString();
  const url = `/public/product/list?${queryParams}`;

  const { data: { data = [] } = {} } = await axios.get(url);

  return <ProductList products={data} />;
};

export default ProductCategory;
