import { productList } from "@/data/products";
import { ProductDetails, ProductSlider, ProductTabs, RelatedProducts } from "../components"; 

function Product({ params }) {
  const dummyProduct = {
            "_id": "677997c91f208bbbe5ee9ee2",
            "productId": "organic-jade-sword-tea-bags",
            "title": "Jade Sword™ Green Tea, Tea Bags",
            "description": "Grown among misty mountains in a remote part of Hunan province, our Organic Jade Sword™️ is spring-picked at an altitude of 800m, from a garden rich with biodiversity. The garden had been abandoned in the early '90s and was revived in 2007 by tea master Zhou Wei, when he saw an opportunity to help the local minority ethnic people. He has been producing organic tea ever since, providing locals with the chance to build a community and a home. Please dispose of your used tea bags in your council food waste bin.",
            "shortDescription": "Bursting with sweet spring flavour, and selected for its succulent fresh taste, this is our introduction to exceptional green tea in biodegradable tea bags. A refreshing infusion with sappy top notes.",
            "thumbnails": [
                {
                    "alt": "product_03",
                    "uid": "product_03__1736021927304_c13d94d15baee7a9.jpg",
                    "path": "/public/image/upload/product_03__1736021927304_c13d94d15baee7a9.jpg",
                    "_id": "677997c91f208bbbe5ee9ee3"
                },
                {
                    "alt": "product_04",
                    "uid": "product_04__1736021942633_5441fcfeae82710d.jpg",
                    "path": "/public/image/upload/product_04__1736021942633_5441fcfeae82710d.jpg",
                    "_id": "677997c91f208bbbe5ee9ee4"
                }
            ],
            "slideImages": [
                {
                    "alt": "product_03",
                    "uid": "product_03__1736021927304_c13d94d15baee7a9.jpg",
                    "path": "/public/image/upload/product_03__1736021927304_c13d94d15baee7a9.jpg",
                    "_id": "677997c91f208bbbe5ee9ee5"
                },
                {
                    "alt": "product_04",
                    "uid": "product_04__1736021942633_5441fcfeae82710d.jpg",
                    "path": "/public/image/upload/product_04__1736021942633_5441fcfeae82710d.jpg",
                    "_id": "677997c91f208bbbe5ee9ee6"
                }
            ],
            "type": [
                "green tea"
            ],
            "format": [
                "loose leaf"
            ],
            "flavour": [
                "floral"
            ],
            "ingredient": [
                "cacao",
                "cardamom",
                "carob",
                "ginger"
            ],
            "benefit": [
                "energy",
                "gut health",
                "immunity"
            ],
            "originName": "japan",
            "originAddress": "from baotian garden, hunan",
            "isSale": true,
            "isSubscription": true,
            "sale": 5,
            "subscriptionSale": 10,
            "ratings": 2,
            "reviews": [],
            "howToMakeTea": [
                {
                    "title": "A hot cup",
                    "requirements": [
                        "Tea leaves",
                        "Hot water"
                    ],
                    "steps": [
                        "Boil water",
                        "Add tea leaves",
                        "Steep for 5 minutes"
                    ],
                    "_id": "677997c91f208bbbe5ee9ee7"
                },
                {
                    "title": "An iced cup",
                    "requirements": [
                        "Tea leaves",
                        "Hot water"
                    ],
                    "steps": [
                        "Boil water",
                        "Add tea leaves",
                        "Steep for 5 minutes"
                    ],
                    "_id": "677997c91f208bbbe5ee9ee8"
                }
            ],
            "unitPrices": [
                {
                    "unit": "50gm",
                    "price": 4,
                    "salePrice": 3.8,
                    "subscriptionPrice": 3.6
                },
                {
                    "unit": "125gm",
                    "price": 8.45,
                    "salePrice": 8.20,
                    "subscriptionPrice": 7.6
                },
                {
                    "unit": "250gm",
                    "price": 15.5,
                    "salePrice": 14.90,
                    "subscriptionPrice": 13.95
                },
                {
                    "unit": "1kg",
                    "price": 42.75,
                    "salePrice": 40.60,
                    "subscriptionPrice": 38.48
                }
            ],
            "subscriptions": [
                {
                    "weeks": "2 week",
                    "days": 14,
                    "_id": "677997c91f208bbbe5ee9eed"
                },
                {
                    "weeks": "4 week",
                    "days": 28,
                    "_id": "677997c91f208bbbe5ee9eee"
                },
                {
                    "weeks": "6 week",
                    "days": 42,
                    "_id": "677997c91f208bbbe5ee9eef"
                },
                {
                    "weeks": "8 week",
                    "days": 56,
                    "_id": "677997c91f208bbbe5ee9ef0"
                }
            ],
            "createdAt": "2025-01-04T20:19:21.525Z",
            "updatedAt": "2025-01-04T20:19:21.525Z",
            "__v": 0
        }

  const productId = decodeURIComponent(params.product);

  const product = productList.find((product) => product.id === productId);

  return (
    <div className="">
      <div className="container px-20 my-10">
        <div className="mb-10 flex justify-between items-center gap-10">
          <div className="basis-1/2">
            <ProductSlider />
          </div>
          <div className="basis-1/2">
            <ProductDetails product={dummyProduct} />
          </div>
        </div>
        <div>
          <ProductTabs product={dummyProduct}/>
        </div>
        <div>
          <RelatedProducts />
        </div>
      </div>
    </div>
  );
}

export default Product;