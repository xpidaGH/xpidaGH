import React from "react";
import { FormattedMessage, FormattedDate } from "react-intl";

function List(props: any) {
  function handleClick() {
    props.deletion(props.id);
  }
  return (
    <div className="p-4 shadow bg-orange-100 w-full m-4">
      <p className="w-auto text-center bg-white text-orange-900">
        <FormattedMessage id="notes01" defaultMessage="Copyright" /> ⓒ{" "}
        <FormattedDate value={props.date} year="numeric" />
      </p>
      <h1>
        {" "}
        <FormattedMessage id="notes02" defaultMessage="Title" />: {props.title}{" "}
      </h1>
      <p>
        {" "}
        <FormattedMessage id="notes03" defaultMessage="Content" />:{" "}
        {props.content}
      </p>
      <button
        className="bg-lime-200 rounded-lg border-4 border-lime-900"
        onClick={handleClick}
      >
        <FormattedMessage id="notes04" defaultMessage="Delete" />
      </button>
    </div>
  );
}

export default List;
