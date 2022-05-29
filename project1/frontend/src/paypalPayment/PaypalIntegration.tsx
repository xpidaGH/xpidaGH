import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PAYPAL_CLIENT_ID } from "./constants/clientID";

function PaypalIntegration({ Component, pageProps }: any) {
  return (
    <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID.clientId }}>
      <Component {...pageProps} />
    </PayPalScriptProvider>
  );
}

export default PaypalIntegration;
