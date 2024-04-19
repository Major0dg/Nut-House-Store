import React from "react";
import image from "../assets/photo.png";
import { FaCartShopping } from "react-icons/fa6";
import ShoppingCart from "../app/features/counter/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {
  const count = useSelector((state) => state.cart.count);

  return (
    <div className="bg-gradient-to-bl from-cyan-300 via-transparent to-transparent w-screen h-screen bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        {/* nav */}
        <div className="flex justify-between p-6 py-10">
          {/* logo */}
          <h2 className="text-[20px] font-bold">Nut House</h2>

          {/* links */}
          <ul className="hidden md:flex space-x-10 text-[17px] font-normal mx-auto cursor-pointer">
            <li>Home</li>
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

        <div className="p-6 flex flex-col md:flex-row justify-between items-center py-8 md:py-40 text-[24px] font-semibold font-mono">
          {/* left */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <p className=" text-red-600"> Welcome To "Nut House!" </p>
            <h1 className="text-black font-extrabold font-mono text-[24px] md:text-[40px] mb-4">
              Begin Your Shopping Adventure with "Nut House" <br />
            </h1>
            <p className="text-[18px] font-normal">
              Shop with ease in a Friendly Environment
            </p>
            <br />
            <Link to={"/products"}>
              <button className="bg-green-400 text-[14px] font-bold px-5 py-3 rounded-md">
                Start shopping
              </button>
            </Link>{" "}
            {""}
            <Link to={"/community"}>
              <button className="bg-slate-50 text-[14px] font-bold px-5 py-3 rounded-md border-2 border-green-600 mt-4 md:mt-0 md:ml-4">
                Community
              </button>
            </Link>
          </div>
          {/* right */}
          <div className="text-center md:text-right">
            <img src={image} alt="image" className="mx-auto md:mx-0" />
          </div>
        </div>

        {/* <ShoppingCart /> */}
      </div>
    </div>
  );
}

export default HomePage;
