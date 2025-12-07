"use client";
import "../cart/Cart.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../Redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <h4 className="empty-cart">No items in your cart</h4>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.title} className="cart-img" />

              <div className="cart-info">
                <h5 className="item-title">{item.title}</h5>
                <p className="item-category">{item.category}</p>
                <h4 className="item-price">${item.price}</h4>

                {/* Quantity Buttons */}
                <div className="quantity-box">
                  <button
                    style={{ marginLeft: "5px" }}
                    className="btn btn-primary"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    -
                  </button>

                  <span style={{ fontWeight: "bolder", marginLeft: "5px" }} className="qty-number">{item.quantity}</span>

                  <button
                    style={{ marginLeft: "5px" }}
                    className="btn btn-primary"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="cart-total">
            Total: $
            {cartItems
              .reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )
              .toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
