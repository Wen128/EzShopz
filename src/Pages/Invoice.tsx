import React from 'react';
import { Link } from 'react-router-dom';

function Invoice() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <p className="text-5xl font-extrabold">
        You have placed your order successfully!
      </p>
      <button className="w-60 h-14 bg-green-500 rounded-lg text-white mt-6 text-xl font-bold hover:bg-green-600">
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
}

export default Invoice;
