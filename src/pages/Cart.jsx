import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h1>

      {cart.length > 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="divide-y divide-gray-300">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center py-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain rounded-md shadow-md mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {item.title}
                  </h2>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">Total:</h3>
            <p className="text-2xl font-bold text-blue-600">
              ${totalCart.toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          Your cart is empty. Add some products to see them here.
        </p>
      )}
    </div>
  );
};

export default Cart;
