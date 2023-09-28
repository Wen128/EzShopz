import React from 'react';
import Navbar from '../Components/Navbar';
import Product from '../Components/Product';
import product01 from '../Img/product_01.jpg';
import product02 from '../Img/product_02.jpeg';
import product03 from '../Img/product_03.jpeg';
import product04 from '../Img/product_04.jpg';

function Home() {
  let productsImg = [
    { img: product01, title: 'black T-shirt', price: 4.56 },
    { img: product02, title: 'Short Sleeve Shirt', price: 3.78 },
    { img: product03, title: 'Blue shirt', price: 6.9 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
    { img: product04, title: 'Black long-sleeve shirt', price: 4.77 },
  ];
  return (
    <div>
      <Navbar />
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
