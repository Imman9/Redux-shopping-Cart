import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

const ProductList = ({ productItem }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleAddToCart() {
    dispatch(addToCart(productItem));
  }
  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem.id));
  }
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
        <div className="mt-4">
          <button
            onClick={
              cart.some((item) => item.id === productItem.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {cart.some((item) => item.id === productItem.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
