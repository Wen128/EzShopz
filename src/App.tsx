import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Rewards from './Pages/Rewards';
import Chat from './Pages/Chat';
import ProductDetails from './Components/ProductDetails';
import Purchase from './Pages/Purchase';
import Invoice from './Pages/Invoice';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  );
}

export default App;
