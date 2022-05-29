// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import "./styles/output.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Wrapper from "./reacti18n/Wrapper";

ReactDOM.render(
  <BrowserRouter>
    <Wrapper>
      <App date={Date.now()} />
    </Wrapper>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
