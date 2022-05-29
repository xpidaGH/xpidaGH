import React from "react";
import { FormattedMessage } from "react-intl";
import { Todos1 } from "./Todos1";
import { Todos2 } from "./Todos2";

function Todos() {
  return (
    <div className=" gap-4 container mx-1 flex md:flex-row flex-col items-center">
      <div>
        <h1 className="title-font sm:text-xl font-medium space-x-0.5  text-indigo-900 bg-green-300">
          <FormattedMessage id="templates" defaultMessage="Templates" />
        </h1>
        <Todos1 />
      </div>
      <div>
        <h1 className="title-font sm:text-xl font-medium space-x-0.5 text-indigo-900 bg-teal-300">
          <FormattedMessage id="sections" defaultMessage="Website Sections" />
        </h1>
        <Todos2 />
      </div>
    </div>
  );
}

export default Todos;
