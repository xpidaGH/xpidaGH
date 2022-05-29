import React from "react";
import PropTypes from "prop-types";
import stripHtml from "string-strip-html";
import { FormattedMessage } from "react-intl";

const ProductItem = ({ product, onAddToCart }: any) => {
  const { result } = product.description.stripHtml;

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

  return (
    <div className=" w-1/2 m-auto my-0 pb-8">
      <img
        className=" border-2 border-solid w-11"
        src={product.image.url}
        alt={product.name}
      />
      <div className="">
        <h4 className=" pt-4 pb-1">{product.name}</h4>
        <p className="">
          {/* product description stripped of html tags */}
          {result}
        </p>
        <div className=" flex justify-between mt-3">
          <p className=" self-center m-0">
            {product.price.formatted_with_symbol}
          </p>
          <button
            name="Add to cart"
            className="product__btn"
            onClick={handleAddToCart}
          >
            <FormattedMessage id="commerce15" defaultMessage="Quick add" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
  onAddToCart: () => {},
};

export default ProductItem;
