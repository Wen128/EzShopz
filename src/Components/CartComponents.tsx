import React from 'react';
import product01 from '../Img/product_01.jpg';
import product02 from '../Img/product_02.jpeg';

function CartComponent() {
  return (
    <div>
      <div className="small-container cart-page">
        <table className="cart-table">
          <tr className="bg-green-700">
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={product01} alt="product" />
                <div>
                  <p>Black T-shirt</p>
                  <small>Price:0.7 SOL</small>
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>0.7 SOL</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={product02} alt="product" />

                <div>
                  <p>Short Sleeve Shirt</p>
                  <small>Price: 2.3 SOL</small>
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>2.3 SOL</td>
          </tr>
        </table>

        <div className="total-price">
          <table>
            <tr>
              <td>Total</td>
              <td>3 SOL</td>
            </tr>
          </table>
        </div>
        <div className="flex w-[90%] justify-end mt-4">
          <button className="border-2 hover:bg-green-600 border-green-700 bg-green-700 text-white py-3 px-5 rounded-xl">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
