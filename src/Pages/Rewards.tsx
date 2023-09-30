import React from 'react';
import Navbar from '../Components/Navbar';
import Coin from '../Components/Coin';
import DailyCoin from '../Components/DailyCoin';
import VoucherExchange from '../Components/VoucherExchange';

function Rewards() {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <div className="flex flex-col justify-start w-5/6 mx-auto">
        <Coin />
        <DailyCoin />
        <VoucherExchange />
      </div>
    </div>
  );
}

export default Rewards;
