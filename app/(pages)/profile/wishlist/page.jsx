import React from 'react'

const toNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  return 0;
};

function WishlistScreen() {
  const wishlistItems = [
    {
      _id: 1,
      image: "/products/product_01.jpg",
      title: "Product 1",
      price: 10.99,
      unit: "50gm",
    },
    {
      _id: 2,
      image: "/products/product_02.jpg",
      title: "Product 2",
      price: 15.99,
      unit: "100gm",
    },
  ];

  const handleRemoveFromWishlist = () => {

  }

  const handleAddToCart = () => {
    
  }

  return (
    <div className="max-h-screen">
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr className="border-b border-gray-200 text-center text-base">
            <th className="py-3 font-medium">Product</th>
            <th className="py-3 font-medium">Unit</th>
            <th className="py-3 font-medium">Price</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-teagreen-100 text-center"
            >
              <td className="py-4 flex items-center gap-1">
                <img
                  // src={`${env.image_path}/${item?.product?.thumbnails[0]}`}
                  src="/products/product_01.jpg"
                  alt={item?.title}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h4 className="font-light">{item?.title}</h4>
                </div>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{item?.unit}</p>
              </td>
              <td className="py-4 font-light">
                £{toNumber(item?.price).toFixed(2)}
              </td>
              <td className="py-4 font-light space-x-5">
                <button
                  // onClick={() => handleAddToCart(item?._id)}
                  className="text-nowrap bg-teagreen-600 text-white px-5 py-2"
                >
                  Add To Cart
                </button>
                <button
                  // onClick={() => handleRemoveFromWishlist(item?._id)}
                  className="text-nowrap bg-rose-600 text-white px-5 py-2"
                >
                  Remove From Wishlist
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WishlistScreen;