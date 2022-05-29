import React from "react";
import { FormattedMessage } from "react-intl";
import { LanguagesTTS } from "./LanguagesTTS";
import { GhanaCityIDs } from "./GhanaCityIDs";

function Languages() {
  return (
    <div className="container mx-auto flex p-5 md:flex-row flex-col items-center">
      <div id="languages" className="mx-2 bg-lime-100 p-2 text-lg">
        <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
          <FormattedMessage
            id="Languages01"
            defaultMessage="Language Codes: Google Translate"
          />
        </h1>
        {LanguagesTTS.map(({ id, flag, language, code }) => (
          <p key={id}>
            <img key={id} src={flag} alt={flag} />
            {language} - {code}
            <hr className="bg-white h-2" />
          </p>
        ))}{" "}
      </div>
      <div id="languages" className="mx-2 bg-lime-100 p-2 text-lg">
        <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
          <FormattedMessage
            id="Languages02"
            defaultMessage="Weather Codes of Towns: Ghana"
          />
        </h1>
        {GhanaCityIDs.map(({ name, id }) => (
          <p className="py-8" key={id}>
            {name} - {id}
            <hr className="bg-white h-2" />
          </p>
        ))}
      </div>
    </div>
  );
  /* var cards: any[] = [
    LanguagesTTS.map(({ id, flag, language, code }) => {
      <div key={id} className="bg-lime-100 p-4">
        <img src={flag} alt={flag} />
        <p>
          {language} - {code}
        </p>
      </div>;
    }),
  ];
  return (
    <div>
      <h1>International Languages</h1>
      <p>{{ cards }}</p>
    </div>
  ); */
}

export default Languages;
