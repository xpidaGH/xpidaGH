import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReactTextareaAutosize from "react-textarea-autosize";
import { FormattedMessage } from "react-intl";

interface Props {
  name: string;
  email: string;
  message: string;
}

export const ContactUs: React.FC = () => {
  const form: any = useRef<HTMLFormElement>();
  // const form: React.MutableRefObject<HTMLFormElement> = useRef();
  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v7m6rox",
        "template_bfdy6dg",
        form.current,
        "kNN4u5lJ6-A9XlL81"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-teal-400 rounded p-4 m-4">
      <h3 className="text-orange-900 text-center bg-teal-200 sm:text-2xl text-xl mb-1 font-medium title-font">
        <FormattedMessage
          id="contactUS01"
          defaultMessage=" Let's work together - Send a message!"
        />
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="relative mb-2">
          <label htmlFor="name" className="leading-3 text-sm text-teal-900">
            <FormattedMessage id="contactUS02" defaultMessage="Name" />
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-4 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-2">
          <label htmlFor="email" className="leading-7 text-sm text-teal-900">
            <FormattedMessage id="contact05" defaultMessage="Email" />{" "}
            {/* translation = "contact05": "Email", */}
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-4 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-2">
          <label htmlFor="message" className="leading-7 text-sm text-teal-900">
            <FormattedMessage id="contactUS03" defaultMessage="Message" />
          </label>
          <ReactTextareaAutosize
            name="message"
            id="message"
            minRows={3}
            maxRows={12}
            className="w-full flex-wrap rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-8 text-base outline-none py-1 px-3 resize-y leading-6 transition-colors duration-200 ease-in-out"
          />
          <input
            type="submit"
            value="Send"
            className="text-white bg-indigo-400 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          />
        </div>
      </form>
    </div>
  );
};
