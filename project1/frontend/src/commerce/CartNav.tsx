import React, { useState } from "react";
import Cart from "./Cart";
import PropTypes from "prop-types";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

const CartNav = ({
  cart,
  onUpdateCartQty,
  onRemoveFromCart,
  onEmptyCart,
}: any) => {
  const [isCartVisible, setCartVisible] = useState(false);

  return (
    <div className=" fixed top-4 right-5 z-50">
      <div
        className=" text-sm font-bold bg-teal-600 text-white p-1 ml-2 align-top rounded-xl"
        onClick={() => setCartVisible(!isCartVisible)}
      >
        {!isCartVisible ? (
          <button className=" border-none">
            <ShoppingBagIcon className="h-5 w-5 text-blue-500" />
            {cart !== null ? <span>{cart.total_items}</span> : ""}
          </button>
        ) : (
          <button className="bg-teal-600 text-white w-9 h-9 p-1 ml-1 mt-1 mr-2 align-top rounded-xl border-none">
            <XIcon className="h-5 w-5 text-blue-500" />
          </button>
        )}
      </div>
      {isCartVisible && (
        <Cart
          cart={cart}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
          onEmptyCart={onEmptyCart}
        />
      )}
    </div>
  );
};

export default CartNav;

CartNav.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  onEmptyCart: PropTypes.func,
};
