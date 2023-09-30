import React from 'react';
import { Link } from 'react-router-dom';
function Product(props: { price: number; title: string; img: string }) {
  return (
    <div className="border-2 w-64 rounded-xl cursor-pointer mb-16 mr-5 shadow-lg hover:text-green-700">
      <Link
        to={'/product/' + props.title}
        state={{ title: props.title, img: props.img, price: props.price }}
      >
        <img
          src={props.img}
          alt="product"
          className="w-full h-72 object-cover rounded-t-xl"
        />
        <div className="flex flex-col items-center justify-around h-16 px-2 border-t-2">
          <p className="font-extrabold">{props.title}</p>
          <p>{props.price} SOL</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
