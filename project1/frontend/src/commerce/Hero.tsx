import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const Hero = ({ merchant }: any) => {
  return (
    <div
      className=" bg-no-repeat bg-cover relative max-h-screen px-7 cursor-pointer  "
      style={{ backgroundImage: `url(${"/static/images/bg.jpg"})` }}
    >
      <img src={"/static/images/logo.svg"} alt="logo" />
      <div className="text-orange-600">
        <h1 className=" text-4xl font-bold">{merchant.business_name}</h1>
        <a
          href="#products"
          className="text-white bg-teal-300 border-2 rounded border-blue-500"
        >
          <FormattedMessage id="commerce14" defaultMessage="Shop" />
        </a>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  merchant: PropTypes.object,
};
