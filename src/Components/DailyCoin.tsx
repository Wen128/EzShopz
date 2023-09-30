import React from 'react';
import earnCoin from '../Img/earnCoin.jpeg';

function DailyCoin() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold mt-12">Daily Rewards</h1>

      <div className="up flex justify-between mt-8 mb-8  w-full relative">
        <div className="border-2 rounded-2xl flex w-1/4 mr-3 justify-between shadow-md">
          <p className="pl-6 py-3">Monday - 5 coins</p>
          <div className="px-7 py-3 bg-green-700 rounded-r-2xl cursor-pointer shadow-lg hover:bg-green-600 text-white duration-300">
            <p>Collect</p>
          </div>
        </div>
        <div className="border-2 rounded-2xl flex w-1/4 mr-3 justify-between shadow-md">
          <p className="pl-6 py-3">Tuesday - 5 coins</p>
          <div className="px-7 py-3 bg-green-700 rounded-r-2xl cursor-pointer shadow-lg hover:bg-green-600 text-white duration-300">
            <p>Collect</p>
          </div>
        </div>
        <div className="border-2 rounded-2xl flex w-1/4 mr-3 justify-between shadow-md">
          <p className="pl-6 py-3">Wednesday - 5 coins</p>
          <div className="px-7 py-3 bg-green-700 rounded-r-2xl cursor-pointer shadow-lg hover:bg-green-600 text-white duration-300">
            <p>Collect</p>
          </div>
        </div>
        <div className="border-2 rounded-2xl flex w-1/4 mr-3 justify-between shadow-md">
          <p className="pl-6 py-3">Thursday - 5 coins</p>
          <div className="px-7 py-3 bg-green-700 rounded-r-2xl cursor-pointer shadow-lg hover:bg-green-600 text-white duration-300">
            <p>Collect</p>
          </div>
        </div>
      </div>
      <div className="down flex justify-between">
        <div className="border-2 rounded-2xl flex w-1/3 mr-3 justify-between shadow-md">
          <p className="pl-6 py-3">Friday - 10 coins</p>
          <div className="px-7 py-3 bg-green-700 rounded-r-2xl cursor-pointer shadow-lg hover:bg-green-600 text-white duration-300">
            <p>Collect</p>
          </div>
        </div>
        <div className="border-2 rounded-2xl flex w-1/3 mr-3 justify-between shadow-md">
          <p className="pl-6 py-3">Saturday - 10 coins</p>
          <div className="px-7 py-3 bg-green-700 rounded-r-2xl cursor-pointer shadow-lg hover:bg-green-600 text-white duration-300">
            <p>Collect</p>
          </div>
        </div>
        <div className="border-2 rounded-2xl flex w-1/3 mr-3 justify-between shadow-md">
          <p className="pl-6 py-3">Sunday - 10 coins</p>
          <div className="px-7 py-3 bg-green-700 rounded-r-2xl cursor-pointer shadow-lg hover:bg-green-600 text-white duration-300">
            <p>Collect</p>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full h-32  relative cursor-pointer shadow-2xl">
        <img
          src={earnCoin}
          alt="play"
          className="absolute w-full h-full object-cover -z-10 filter brightness-50 rounded-lg"
        />
        <h1 className="w-full h-full text-5xl font-black text-white hover:text-green-400 flex justify-center items-center">
          Play Game To Earn Extra Coins!
        </h1>
      </div>
    </div>
  );
}

export default DailyCoin;
