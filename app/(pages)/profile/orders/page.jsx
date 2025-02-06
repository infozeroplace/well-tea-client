import React from 'react'

function OrderScreen() {
  const OrderList = [
    {
      orderId: "3232",
      date: "06-02-2025",
      totalProducts: 100,
      totalPrice: 20.99,
      status: "Pending"
    },
    {
      orderId: "4567",
      date: "09-03-2025",
      totalProducts: 150,
      totalPrice: 30.99,
      status: "Delivered"
    }
  ];
  return (
    <div>
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr className="border-b border-gray-200 text-center text-base">
            <th className="py-3 mr-5 font-medium">Order Id</th>
            <th className="py-3 font-medium">Date</th>
            <th className="py-3 font-medium">Total Products</th>
            <th className="py-3 font-medium">Total Price</th>
            <th className="py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {OrderList.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-teagreen-100 text-center"
            >
              <td className="py-4 font-light">{item?.orderId}</td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{item?.date}</p>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{item?.totalProducts}</p>
              </td>
              <td className="py-4 font-light">
                <p className="text-sm text-gray-500">{item?.totalPrice}</p>
              </td>
              <td className="py-4 font-light">
                {item?.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderScreen;