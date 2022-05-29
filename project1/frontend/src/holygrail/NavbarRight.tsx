// ~/src/holygrail/NavbarRight.js
import React from "react";
import { FormattedMessage } from "react-intl";

const NavbarRight: React.FC = () => (
  <section id="navbarRight">
    <div className="text-xl text-center">
      <p className="animate-pulse bg-rose-600 text-white flex-wrap">
        <FormattedMessage
          id="navbarleft01"
          defaultMessage="Under Construction"
        />
      </p>
    </div>
    <div className="inline-flex items-center bg-teal-200 border-0 p-1 focus:outline-none title-font font-medium hover:bg-teal-100 rounded text-xl text-center">
      <p>
        <FormattedMessage id="navbarright01" defaultMessage="Desktop Apps" />:
      </p>
    </div>
    <div className="inline-flex items-center bg-teal-200 border-0 p-2 text-center focus:outline-none title-font font-medium hover:bg-teal-100 rounded text-base mt-4">
      <p>
        <FormattedMessage id="navbarleft03" defaultMessage="Ethical Hacking" />
      </p>
    </div>
    <div className="inline-flex items-center bg-teal-200 border-0 p-2 text-center focus:outline-none title-font font-medium hover:bg-teal-100 rounded text-base mt-4">
      <p>
        <FormattedMessage id="navbarleft04" defaultMessage="Web Scraping" />
      </p>
    </div>
    <div className="inline-flex items-center bg-teal-200 border-0 p-2 text-center focus:outline-none title-font font-medium hover:bg-teal-100 rounded text-base mt-4">
      <p>
        <FormattedMessage id="navbarleft05" defaultMessage="Anti-virus" />
      </p>
    </div>
    <div className="inline-flex items-center bg-teal-200 border-0 p-2 text-center focus:outline-none title-font font-medium hover:bg-teal-100 rounded text-base mt-4">
      <p>
        <FormattedMessage id="navbarleft06" defaultMessage="Automation" />
      </p>
    </div>
    <div className="inline-flex items-center bg-teal-200 border-0 p-2 text-center focus:outline-none title-font font-medium hover:bg-teal-100 rounded text-base mt-4">
      <p>
        <FormattedMessage id="navbarleft07" defaultMessage="Data Science" />
      </p>
    </div>
    <div className="inline-flex items-center bg-teal-200 border-0 p-2 text-center focus:outline-none title-font font-medium hover:bg-teal-100 rounded text-base mt-4">
      <p>
        <FormattedMessage id="navbarleft08" defaultMessage="Game Development" />
      </p>
    </div>
  </section>
);

export default NavbarRight;
