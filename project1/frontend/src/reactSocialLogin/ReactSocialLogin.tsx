import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
// import "./styles.css";
import InstagramRSL from "./InstagramRSL";
import GithubRSL from "./GithubRSL";
import AmazonRSL from "./AmazonRSL";
import GoogleRSL from "./GoogleRSL";
import FacebookRSL from "./FacebookRSL";
import MicrosoftRSL from "./MicrosoftRSL";
import TwitterRSL from "./TwitterRSL";
import LinkedinRSL from "./LinkedinRSL";
import PinterestRSL from "./PinterestRSL";

// import { ReactComponent as PinterestLogo } from "./assets/pinterest.svg";
// const REDIRECT_URI = 'http://localhost:3000/account/login'

const ReactSocialLogin = () => {
  return (
    <>
      <section className="p-4 sm:p-2 md:p-3">
        <p className="m-4 p-4 border-2 bg-teal-300 items-center text-center text-xl font-bold rounded-md">
          <FormattedMessage
            id="reactSocialLogin03"
            defaultMessage="Log in before paying the fee for downloads:"
          />
          <FormattedNumber
            value={5.0}
            style="currency"
            currencyDisplay="symbol"
            currency="USD"
          />
        </p>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <InstagramRSL />
          <GithubRSL />
          <AmazonRSL />
          <GoogleRSL />
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <FacebookRSL />
          <MicrosoftRSL />
          <TwitterRSL />
          <LinkedinRSL />
          <PinterestRSL />
        </div>
      </section>
    </>
  );
};

export default ReactSocialLogin;
