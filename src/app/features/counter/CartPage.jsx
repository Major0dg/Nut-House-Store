import React from "react";
import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div className="container-fluid mx-10 col-lg-12">
      <div className="col-lg-12 p-6 text-[20px] font-bold">Cart Items</div>
      <div>
        {cartItems.lenght === 0 ? (
          <p>No Item in your cart</p>
        ) : (
          <ul className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cartItems.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-64 h-auto"
                />
                <h3 className="text-xl font-semibold"> {item.title}</h3>{" "}
                <p className="mt-2 text-gray-900 font-semibold italic">
                  ${item.price}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <CartSummary />
    </div>
  );
};

export default CartPage;
