import React from 'react';
import coin from '../Img/coin.png';

function Coin() {
  return (
    <div className="w-36 flex items-center border-2 rounded-2xl px-5 py-2 border-black">
      <p className="text-lg">Coin</p>
      <img src={coin} alt="coin" className="w-6 ml-1" />
      <p className="border-l-2 pl-3 ml-3 border-black">20</p>
    </div>
  );
}

export default Coin;
