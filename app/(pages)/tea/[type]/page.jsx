
import { productList } from "@/data/products";
import CategoryCard from "@/components/category/CategoryCard";
import {FilterButton, Sort, Filters} from "../components";
function TeaType({ params}) {
  const type = decodeURIComponent(params.type);

  const filteredProducts = productList.filter((product) => product.type === type);

  return (
    <div className="w-full">
      <div className="flex">
        <div>
          <Filters />
        </div>
        <div>
          {filteredProducts.length > 0 ? (
            <div>
              <div className="sticky mx-5 py-5 h-[70px] flex justify-between items-center border-b-1">
                <p>Products: {filteredProducts.length}</p>
                <div className="flex gap-10">
                  <FilterButton />
                  <Sort />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-10">
                {filteredProducts.map((item) => (
                  <CategoryCard key={item.id} item={item} url={`/tea/${item.type}/${item.id}`} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center p-10">
              <h1>No Products Found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeaType;