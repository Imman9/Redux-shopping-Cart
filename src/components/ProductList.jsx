import React from "react";

const ProductList = ({ productItem }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <img
          src={productItem?.image}
          alt={productItem?.title}
          className="h-48 w-full object-contain"
        />
      </div>
      <div className="px-4 pb-4">
        <p className="text-lg font-semibold text-gray-800 truncate">
          {productItem?.title}
        </p>
        <p className="text-blue-600 font-bold"> ${productItem?.price}</p>
      </div>
    </div>
  );
};

export default ProductList;
