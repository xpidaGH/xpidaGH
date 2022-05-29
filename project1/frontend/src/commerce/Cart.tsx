import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import CartItem from "./CartItem";

const Cart = ({
  cart,
  onRemoveFromCart,
  onEmptyCart,
  onUpdateCartQty,
}: any) => {
  const handleEmptyCart = () => {
    onEmptyCart();
  };

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className=" p-5 text-center">
        <FormattedMessage
          id="commerce01"
          defaultMessage="You have no items in your shopping cart, start adding some!"
        />
      </p>
    );
  };

  const renderItems = () =>
    cart.line_items.map((lineItem: any) => (
      <CartItem
        item={lineItem}
        onUpdateCartQty={onUpdateCartQty}
        onRemoveFromCart={onRemoveFromCart}
        key={lineItem.id}
        /* className="cart__inner" */
      />
    ));

  const renderTotal = () => (
    <div className=" flex p-4 border-t-2 border-solid justify-between">
      <p className=" font-bold">
        <FormattedMessage id="commerce02" defaultMessage="Subtotal:" />
      </p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
  );

  return (
    <div className=" w-80 bg-white border-2 border-solid text-orange-600 fixed block z-10 top-5 right-5 h-auto">
      <h4 className=" p-4 font-bold border-b-2 border-solid text-xl">
        <FormattedMessage id="commerce03" defaultMessage="Your Shopping Cart" />
      </h4>
      {renderEmptyMessage()}
      {renderItems()}
      {renderTotal()}
      <div className=" flex justify-between">
        <button
          className=" self-start bg-white border-2 border-solid p-4 m-4 uppercase font-bold text-xs"
          onClick={handleEmptyCart}
        >
          <FormattedMessage id="commerce04" defaultMessage="Empty cart" />
        </button>
        <button className=" self-start text-white border-2 border-solid p-4 m-4 uppercase font-bold text-xs bg-orange-500">
          <FormattedMessage id="commerce05" defaultMessage="Checkout" />
        </button>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onRemoveFromCart: () => {},
  onUpdateCartQty: () => {},
  onEmptyCart: () => {},
};
