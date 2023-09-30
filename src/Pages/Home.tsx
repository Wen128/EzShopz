import React from 'react';
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import { productsImg } from '../Components/ProductsList';
import search from '../Img/search.png';
import filter from '../Img/filter.png';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center mb-10">
        <div className="flex w-2/3 justify-center relative border-2 rounded-3xl px-5 items-center">
          <input
            type="text"
            placeholder="Search anything"
            className="w-full outline-none"
          />
          <img src={search} alt="search absolute" className="w-8 h-8" />
        </div>
        <div className="flex justify-between items-center border-2 rounded-3xl p-5">
          <p className="text-xl mr-3">Filter</p>
          <img src={filter} alt="filter" className="w-8 h-8" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-5/6 flex justify-between flex-wrap">
          {productsImg.map((index) => (
            <Product img={index.img} title={index.title} price={index.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
