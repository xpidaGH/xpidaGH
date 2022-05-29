import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import { useIntl } from "react-intl";

import Hero from "./Hero";
import ProductsList from "./ProductsList";
import CartNav from "./CartNav";

const Commerce = () => {
  const [merchant, setMerchant] = useState({});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // Because React rendering can be triggered for many different reasons,
  // it is best practice to wrap our commerce object method calls into a
  // useEffect() hook. This hook acts as the replacment to componentWillMount()
  // function when using class components. By leaving the second argument array
  // empty, this method will run once before the initial render.
  useEffect(() => {
    fetchMerchantDetails();
    fetchProducts();
    fetchCart();
  }, []);

  /**
   * Fetch merchant details
   * https://commercejs.com/docs/sdk/full-sdk-reference#merchants
   */
  const fetchMerchantDetails = () => {
    const intl = useIntl();
    commerce.merchants
      .about()
      .then((merchant) => {
        setMerchant(merchant);
      })
      .catch((error) => {
        console.log(intl.formatMessage({ id: "commerce07" }), error);
      });
  };

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  const fetchProducts = () => {
    const intl = useIntl();
    commerce.products
      .list()
      .then((products: any) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log(intl.formatMessage({ id: "commerce08" }), error);
      });
  };

  /**
   * Retrieve the current cart or create one if one does not exist
   * https://commercejs.com/docs/sdk/cart
   */
  const fetchCart = () => {
    const intl = useIntl();
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log(intl.formatMessage({ id: "commerce09" }), error);
      });
  };

  /**
   * Adds a product to the current cart in session
   * https://commercejs.com/docs/sdk/cart/#add-to-cart
   *
   * @param {string} productId The ID of the product being added
   * @param {number} quantity The quantity of the product being added
   */
  const handleAddToCart = ({ productId, quantity }: any) => {
    const intl = useIntl();
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
      })
      .catch((error) => {
        console.error(intl.formatMessage({ id: "commerce10" }), error);
      });
  };

  /**
   * Removes line item from cart
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   *
   * @param {string} lineItemId ID of the line item being removed
   */
  const handleRemoveFromCart = (lineItemId: any) => {
    const intl = useIntl();
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(intl.formatMessage({ id: "commerce11" }), error);
      });
  };

  /**
   * Updates line_items in cart
   * https://commercejs.com/docs/sdk/cart/#update-cart
   *
   * @param {string} lineItemId ID of the cart line item being updated
   * @param {number} newQuantity New line item quantity to update
   */
  const handleUpdateCartQty = ({ lineItemId, quantity }: any) => {
    const intl = useIntl();
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log(intl.formatMessage({ id: "commerce12" }), error);
      });
  };

  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */
  const handleEmptyCart = () => {
    const intl = useIntl();
    commerce.cart
      .empty()
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(intl.formatMessage({ id: "commerce13" }), error);
      });
  };

  return (
    <div className="app">
      <CartNav
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onEmptyCart={handleEmptyCart}
      />
      <Hero merchant={merchant} />
      <ProductsList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Commerce;
