import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const count = useSelector((state) => state.cart.count);
  return (
    <div className="bg-gradient-to-bl from-cyan-300 via-transparent to-transparent w-screen h-[300px] bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        {/* nav */}
        <div className="flex justify-between p-6 py-10">
          {/* logo */}
          <Link to={"/"}>
            <h2 className="text-[20px] font-bold">Nut House</h2>
          </Link>
          {/* links */}
          <ul className="hidden md:flex space-x-10 text-[17px] font-normal mx-auto cursor-pointer">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>About</li>
            <Link to={"/products"}>
              <li>Products</li>
            </Link>
            <li>Contact Us</li>
          </ul>

          <Link to={"/cartPage"}>
            <div className="relative">
              <div className="z-40">
                <FaCartShopping color="purple" size={28} />{" "}
              </div>
              <span className="absolute -top-5 z-[0000]  -right-5 rounded-full bg-orange-500 text-white  px-3 py-1">
                {count}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
