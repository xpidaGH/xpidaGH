import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }: any) => {
  const handleUpdateCartQty = (lineItemId: any, quantity: any) => {
    onUpdateCartQty(lineItemId, quantity);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  return (
    <div className=" flex p-5">
      <img
        className=" w-16 h-16 object-cover border-2 border-solid border-lime-300 mr-3"
        src={item.image.url}
        alt={item.name}
      />
      <div className="cart-item__details">
        <h4 className=" text-sm font-bold mb-1">{item.name}</h4>
        <div className=" flex m-auto mb-0 text-base">
          <button
            type="button"
            onClick={() =>
              item.quantity > 1
                ? handleUpdateCartQty(item.id, item.quantity - 1)
                : handleRemoveFromCart()
            }
          >
            -
          </button>
          <p className=" mb-0 mt-1">{item.quantity}</p>
          <button
            className=" border-0 bg-transparent text-xl"
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className=" text-sm">{item.line_total.formatted_with_symbol}</div>
      </div>
      <button
        type="button"
        className=" bg-white border-2 border-solid p-2 text-xs uppercase font-bold ml-auto self-start"
        onClick={handleRemoveFromCart}
      >
        <FormattedMessage id="commerce06" defaultMessage="Remove" />
      </button>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
  handleUpdateCartQty: PropTypes.func,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
};
