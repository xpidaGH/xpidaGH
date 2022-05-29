// ~/src/portfolio/Contact.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function Contact() {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        firstname,
        lastname,
        phone,
        email,
        language,
        address,
        description,
      }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-start justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://maps.google.com/maps?q=kumasi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
          <div>
            <div className="bg-teal-800 relative flex flex-wrap py-2 rounded shadow-md">
              <p className="title-font font-semibold text-white tracking-widest  py-2">
                <FormattedMessage
                  id="contact01"
                  defaultMessage="Help the enhancement of the functionalities of this WebApp with a contribution. "
                />
                <NavLink
                  to="/footer"
                  className="text-red-900 animate-pulse bg-white border-4"
                >
                  <FormattedMessage
                    id="contact02"
                    defaultMessage="Contribute"
                  />
                </NavLink>
                <FormattedMessage
                  id="contact03"
                  defaultMessage=". Also, register to receive further enhancements."
                />
              </p>
            </div>
            <div className="bg-teal-800 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  <FormattedMessage id="contact04" defaultMessage="Address" />
                </h2>
                <p className="mt-1">
                  AL138 CUSTARD St. <br />
                  AH-0019-9495, Ghana
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  <FormattedMessage id="contact05" defaultMessage="Email" />
                </h2>
                <a
                  className="text-indigo-400 leading-relaxed"
                  href="tuffuornana@gmail.com"
                >
                  tuffuornana@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  <FormattedMessage id="contact06" defaultMessage="Phone" />
                </h2>
                <p className="leading-relaxed">233-247-101575</p>
              </div>
            </div>
          </div>
        </div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-4 mt-8 md:mt-0 bg-orange-100"
        >
          <h3 className="text-teal-800 sm:text-4xl text-3xl mb-1 font-medium title-font">
            <FormattedMessage id="contact07" defaultMessage="Register" />
          </h3>

          <div className="relative mb-2">
            <label
              htmlFor="firstname"
              className="leading-3 text-sm text-teal-900"
            >
              <FormattedMessage id="contact08" defaultMessage="First Name:" />
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-4 transition-colors duration-200 ease-in-out"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="lastname"
              className="leading-7 text-sm text-teal-900"
            >
              <FormattedMessage id="contact09" defaultMessage="Last Name:" />
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-4 transition-colors duration-200 ease-in-out"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-teal-900">
              <FormattedMessage id="contact06" defaultMessage="Phone" />:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-4 transition-colors duration-200 ease-in-out"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-teal-900">
              <FormattedMessage id="contact05" defaultMessage="Email" />:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-4 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="language"
              className="leading-7 text-sm text-teal-900"
            >
              <FormattedMessage id="contact10" defaultMessage="Language:" />
            </label>
            <select
              id="language"
              name="language"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-4 transition-colors duration-200 ease-in-out"
            >
              <option>English</option>{" "}
              {/* translation = "carouselData01": "English", etc. */}
              <option>Arabic</option>
              <option>Chinese</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
              <option>Japanese</option>
              <option>Spanish</option>
              onChange={(e: any) => setLanguage(e.target.value)}
            </select>
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-teal-900"
            >
              <FormattedMessage id="contact04" defaultMessage="Address" />:
            </label>
            <textarea
              id="address"
              name="address:"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-8 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="description"
              className="leading-7 text-sm text-teal-900"
            >
              <FormattedMessage id="contact11" defaultMessage="Description:" />
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-8 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
