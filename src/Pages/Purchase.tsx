import React from 'react';
import { Wallet } from '../Components/Wallet';
import { useLocation } from 'react-router-dom';

function Purchase() {
  const location = useLocation();
  const { totalPrice } = location.state;
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col items-center justify-center mt-20 border-2 border-green-500 shadow-xl rounded-lg w-1/3 h-1/5">
        <p className="text-2xl font-bold">TOTAL:</p>
        <p className="text-2xl font-bold">{totalPrice} SOL</p>
      </div>
      <div className="flex flex-col justify-around items-center mt-8 w-1/3 h-1/4 border-2 border-green-500 shadow-xl rounded-lg">
        <p className="text-2xl font-bold">Address</p>
        <p className="text-lg">
          No 123, Jalan Cantik, Taman Rama Rama, <br />
          42000 Klang, Selangor
        </p>
        <button className="bg-green-500 border-green-500 py-2 px-4 text-white rounded-lg hover:bg-green-600 hover:border-green-600">
          Click to change
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <Wallet price={totalPrice} />
      </div>
    </div>
  );
}

export default Purchase;
