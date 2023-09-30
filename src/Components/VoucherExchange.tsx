import React from 'react';
import voucher from '../Img/voucher.png';

function VoucherExchange() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold mt-20">Voucher Exchange</h1>
      <div className="w-full flex justify-between mt-12">
        <div className="w-1/2 h-32 border-2 mr-16 rounded-2xl flex items-center pl-10">
          <img src={voucher} alt="voucher" className="w-24" />
          <div className="ml-8">
            <h1 className="text-xl font-bold">0.5 SOL voucher</h1>
            <p className="text-gray-600">
              available in every product higher than 5 SOL
            </p>
            <button className="w-50 border-2 py-1 px-5 mt-2 rounded-xl bg-green-700 border-green-700 hover:bg-green-600 hover:border-green-500 duration-300 text-white">
              Exchange (100 coins)
            </button>
          </div>
        </div>
        <div className="w-1/2 h-32 border-2 rounded-2xl flex items-center pl-10">
          <img src={voucher} alt="voucher" className="w-24" />
          <div className="ml-8">
            <h1 className="text-xl font-bold">1 SOL voucher</h1>
            <p className="text-gray-600">
              available in every product higher than 8 SOL
            </p>
            <button className="w-50 border-2 py-1 px-5 mt-2 rounded-xl bg-green-700 border-green-700 hover:bg-green-600 hover:border-green-500 duration-300 text-white">
              Exchange (200 coins)
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-12">
        <div className="w-1/2 h-32 border-2 mr-16 rounded-2xl flex items-center pl-10">
          <img src={voucher} alt="voucher" className="w-24" />
          <div className="ml-8">
            <h1 className="text-xl font-bold">15% voucher</h1>
            <p className="text-gray-600">
              available in every product lower than 10 SOL
            </p>
            <button className="w-50 border-2 py-1 px-5 mt-2 rounded-xl bg-green-700 border-green-700 hover:bg-green-600 hover:border-green-500 duration-300 text-white">
              Exchange (180 coins)
            </button>
          </div>
        </div>
        <div className="w-1/2 h-32 border-2 rounded-2xl flex items-center pl-10">
          <img src={voucher} alt="voucher" className="w-24" />
          <div className="ml-8">
            <h1 className="text-xl font-bold">20% voucher</h1>
            <p className="text-gray-600">
              available in every product lower than 5 SOL
            </p>
            <button className="w-50 border-2 py-1 px-5 mt-2 rounded-xl bg-green-700 border-green-700 hover:bg-green-600 hover:border-green-500 duration-300 text-white">
              Exchange (50 coins)
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-12">
        <div className="w-1/2 h-32 border-2 mr-16 rounded-2xl flex items-center pl-10">
          <img src={voucher} alt="voucher" className="w-24" />
          <div className="ml-8">
            <h1 className="text-xl font-bold">15% voucher</h1>
            <p className="text-gray-600">
              available in every product lower than 10 SOL
            </p>
            <button className="w-50 border-2 py-1 px-5 mt-2 rounded-xl bg-green-700 border-green-700 hover:bg-green-600 hover:border-green-500 duration-300 text-white">
              Exchange (180 coins)
            </button>
          </div>
        </div>
        <div className="w-1/2 h-32 border-2 rounded-2xl flex items-center pl-10">
          <img src={voucher} alt="voucher" className="w-24" />
          <div className="ml-8">
            <h1 className="text-xl font-bold">20% voucher</h1>
            <p className="text-gray-600">
              available in every product lower than 5 SOL
            </p>
            <button className="w-50 border-2 py-1 px-5 mt-2 rounded-xl bg-green-700 border-green-700 hover:bg-green-600 hover:border-green-500 duration-300 text-white">
              Exchange (50 coins)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoucherExchange;
