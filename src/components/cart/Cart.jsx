import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => {

  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
};

const Cart = () => {
  const [quantity, setQuantity] = useState({ burger1: 0, burger2: 0, burger3: 0 })

  const increment = (foodItem, incrementBy) => {
    setQuantity(() => {
      let sum = quantity[foodItem] + incrementBy
      sum = sum >= 0 ? sum : 0
      return { ...quantity, [foodItem]: sum }
    })
  };

  const decrement = (value, decrementBy) => { increment(value, -decrementBy) };

  const total = quantity.burger1 * 10 + quantity.burger2 * 15 + quantity.burger3 * 18

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={quantity.burger1}
          increment={() => increment('burger1', 1)}
          decrement={() => decrement('burger1', 1)}
        />

        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={quantity.burger2}
          increment={() => increment('burger2', 2)}
          decrement={() => decrement('burger2', 2)}
        />

        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={quantity.burger3}
          increment={() => increment('burger3', 3)}
          decrement={() => decrement('burger3', 3)}
        />


        <article>
          <div>
            <h4>Sub Total</h4>
            <p>€{(total * 0.82).toFixed(2)}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>€{(total * 0.18).toFixed(2)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>€{total ? 2.50 : 0}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>€{total ? total + 2.50 : total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
