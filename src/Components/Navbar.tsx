import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Img/logo.png';
import profile from '../Img/profile.png';
function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="flex w-5/6 h-2/6 justify-between items-center">
        <img src={logo} alt="logo" className="w-32 object-contain" />
        <ul className="flex w-96 justify-between text-lg">
          <li className="list-none hover:text-green-700 duration-100 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="list-none hover:text-green-700 duration-100 ease-in-out">
            <Link to="/rewards">Rewards</Link>
          </li>
          <li className="list-none hover:text-green-700 duration-100 ease-in-out">
            <Link to="/chat">Chat</Link>
          </li>
          <li className="list-none hover:text-green-700 duration-100 ease-in-out">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <img src={profile} alt="profile" className="w-20" />
      </nav>
    </div>
  );
}

export default Navbar;
