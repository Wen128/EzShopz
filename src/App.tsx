import React from 'react';
import { Wallet } from './Components/Wallet';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Rewards from './Pages/Rewards';
import Chat from './Pages/Chat';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:name" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
