// ShoppingCart.js
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { addToCart, fetchCartItems, subtractFromCart } from "../actions";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log(item);
    dispatch(addToCart(item));
  };
  const handleSubtract = (itemId) => {
    console.log(itemId);
    dispatch(subtractFromCart(itemId));
  };
  return (
    <div className="mt-7 px-4 py-2 border-slate-700 border">
      <img src={item.image} alt={item.title} className="w-64 h-auto" />
      <div className="card-content">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        {/* <p className="text-gray-700 italic text-xs">
          Description: {item.description}
        </p> */}
        <p className="mt-2 text-gray-900 font-semibold italic">
          Price: - ${item.price}
        </p>
        <p className="text-gray-900">Category: {item.category}</p>
        <button
          type="button"
          onClick={() => handleAdd(item)}
          className="bg-cyan-400 text-white p-2 py-1 mt-1 rounded-md"
        >
          +
        </button>{" "}
        <button
          type="button"
          onClick={() => handleSubtract(item.id)}
          className="bg-cyan-400 text-white font-bold p-2 py-1 mt-1 rounded-md"
        >
          -
        </button>
      </div>
    </div>
  );
};

const ShoppingCart = ({ items, loading, error, fetchCartItems }) => {
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {items?.map((product) => (
        <Card key={product.id} item={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
  loading: state.cart.loading,
  error: state.cart.error,
});

export default connect(mapStateToProps, { fetchCartItems })(ShoppingCart);
