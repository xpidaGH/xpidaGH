// ~\project1\frontend\src\general\Footer.tsx
import React from "react";
import { FormattedMessage } from "react-intl";

function Footer() {
  const [language, setLanguage] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

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
      headers: { "Content-Type": "application/-www-form-urlencoded" },
      body: encode({
        "form-name": "register",
        language,
        name,
        email,
      }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <footer className="text-xl font-extrabold leading-tight px-6">
      <div>
        <div className="container mx-auto flex p-5 md:flex-row flex-col items-center">
          <div className="mx-2">
            <h1 className="title-font sm:text-xl font-medium text-indigo-900 bg-teal-200">
              <span className="text-rose-900 animate-pulse bg-white border-4">
                <FormattedMessage id="footer01" defaultMessage="Donations" />
              </span>
              <br className="hidden lg:inline-block" />
              <FormattedMessage
                id="footer02"
                defaultMessage="Support my work to help beginners and young students everywhere
              learn programming and webapp development."
              />
            </h1>
          </div>
          <div className="mx-2">
            <h1 className="title-font sm:text-xl font-medium text-indigo-900 bg-teal-200">
              <span className="text-rose-900 animate-pulse bg-white border-4">
                <FormattedMessage id="footer03" defaultMessage="Subscription" />
              </span>
              <br className="hidden lg:inline-block" />
              <FormattedMessage
                id="footer04"
                defaultMessage="Our copy-and-paste tutorials are very easy to follow - even by
              minors."
              />
              <span className="animate-pulse text-white bg-green-900">
                <FormattedMessage id="contact07" defaultMessage="Register" />{" "}
                {/* translation = "contact07": "Register", */}
              </span>
              <FormattedMessage
                id="footer05"
                defaultMessage="for more tutorials. Select a language, fill in your e-mail, and
              click submit button to receive links to the tutorials."
              />
            </h1>
          </div>
        </div>

        <nav className="mx=9">
          <form
            name="register"
            onSubmit={handleSubmit}
            className="w-full px-4 bg-orange-100 flex flex-nowrap space-x-2"
          >
            <span>
              <label htmlFor="language" className="text-sm text-teal-900">
                <FormattedMessage id="contact10" defaultMessage="Language" />:{" "}
                {/* translation = "contact10": "Language", */}
              </label>
              <select
                id="language"
                name="language"
                className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none p-1 transition-colors duration-200 ease-in-out"
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
            </span>

            <span>
              <label htmlFor="name" className="text-sm text-teal-900">
                <FormattedMessage id="contactUS02" defaultMessage="Name" />:{" "}
                {/* "contactUS02": "Name", */}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none p-1 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </span>

            <span>
              <label htmlFor="email" className="text-sm text-teal-900">
                <FormattedMessage id="contact05" defaultMessage="Email" />:{" "}
                {/* "contact05": "Email", */}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none p-1 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>

            <span>
              <button
                type="submit"
                className="text-white bg-indigo-400 p-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <FormattedMessage id="submit" defaultMessage="Submit" />{" "}
                {/* "contact12": "Submit", */}
              </button>
            </span>
          </form>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
