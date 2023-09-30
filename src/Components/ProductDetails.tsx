import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function ProductDetails() {
  const location = useLocation();
  const { title, img, price } = location.state;
  return (
    <div>
      <Navbar />
      <div className="w-5/6 mx-auto flex justify-between">
        <div className="w-1/2">
          <img
            src={img}
            alt={title}
            className="w-3/5 mx-auto object-cover h-[450px]"
          />
        </div>
        <div className="w-1/2">
          <h1 className="font-bold text-5xl mb-4">{title}</h1>
          <h2 className="font-bold text-3xl mb-6">{price} SOL</h2>
          <div className="mb-10">
            <button className="cursor-pointer py-3 px-24 text-sm border-2 mr-5 bg-green-700 border-green-700 text-white hover:bg-green-600 hover:border-green-600 duration-300">
              <Link to="/purchase" state={{ totalPrice: price }}>
                Buy Now
              </Link>
            </button>
            <button className="cursor-pointer py-3 px-24 text-sm border-2 border-green-700 text-green-700 hover:bg-green-600 hover:border-green-600 hover:text-white duration-300">
              Add to cart
            </button>
          </div>
          <p className="text-gray-500 text-lg font-medium">
            Slim fit blue shirt for men. Various Sizes provided, stylish design,
            the best prizes you could find online
          </p>

          <p className="flex mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000"
              className="w-6 mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            14 days return policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
