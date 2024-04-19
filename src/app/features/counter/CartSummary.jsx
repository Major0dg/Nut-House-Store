import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-cyan-200 bg-rou p-4 bg w-1/2 my-20">
      <div>Cart Items</div>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="my-10">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total Quantity: {totalQuantity}</p>
          {""}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
      <div className="text-right">
        <button className="hover:bg-blue-700 bg-green-600 text-white font-bold p-2 py-1 mt-1 rounded-md">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
