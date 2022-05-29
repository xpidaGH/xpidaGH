import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import PaypalIntegration from "./PaypalIntegration";
import { FormattedMessage } from "react-intl";

function PaypalHome() {
  const [succeeded, setSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState("");

  // creates a paypal order
  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              // charge users $499 per order
              value: 499,
            },
          },
        ],
        // remove the applicaiton_context object if you need your users to add a shipping address
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID: any) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // handles when a payment is confirmed for paypal
  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function(details: any) {
      const { payer } = details;
      setBillingDetails(payer);
      setSucceeded(true);
    });
  };

  // handles payment errors
  const onError = (data: any, actions: any) => {
    setPaypalErrorMessage("Something went wrong with your payment");
  };

  <PayPalButtons
    style={{
      color: "blue",
      shape: "pill",
      label: "pay",
      tagline: false,
      layout: "horizontal",
    }}
    createOrder={createOrder}
    onApprove={onApprove}
  />;

  return (
    <div className=" border-4 border-lime-300 bg-teal-200 m-4 flex flex-col items-center justify-center">
      <main className=" flex flex-col items-center justify-center flex-1 text-center">
        <h1 className=" text-2xl font-bold">
          <FormattedMessage
            id="paypalPayment01"
            defaultMessage="React example for collecting payments with Paypal!"
          />
        </h1>
      </main>
      <div className=" text-lg">
        <p>
          F <FormattedMessage id="success" defaultMessage="Success" />:{" "}
          {succeeded}
        </p>
        <p>
          <FormattedMessage id="error" defaultMessage="Error" />:{" "}
          {paypalErrorMessage}
        </p>
        <p>
          <FormattedMessage id="order" defaultMessage="Order ID" />: {orderID}
        </p>
        <p>
          <FormattedMessage id="billing" defaultMessage="Billing Details" />:{" "}
          {billingDetails}
        </p>
      </div>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>tuffuornana@gmail.com</p>
      </footer>
    </div>
  );
}

export default PaypalHome;
