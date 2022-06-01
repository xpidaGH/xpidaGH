import React from "react";
import { FormattedMessage } from "react-intl";

function Downloads() {
  return (
    <div id="downloads" className="py-5 px-10 text-xl">
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        <FormattedMessage id="downloads01" defaultMessage="Downloads" />
      </h1>
      <ul className="list-disc">
        <li className="text-b0ld">
          <FormattedMessage
            id="downloads02"
            defaultMessage="Learners Templates: Templates of this website in 20 Languages -
          English, Arabic, Bengali, Chinese, Dutch, French, German, Hindi,
          Indonesian, Italian, Japanese, Marathi, Portuguese, Russian, Spanish,
          Swahili, Tamil, Telugu, Turkish, Urdu."
          />
        </li>
      </ul>
    </div>
  );
}

export default Downloads;
