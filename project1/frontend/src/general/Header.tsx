//  ~\frontend\src\general\Header.js
import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Header() {
  return (
    <header className="bg-teal-600">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a href="#home">
          <img src={"/static/images/logo.png"} alt="logo" />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-teal-100 flex flex-wrap items-center text-xl justify-center">
          <Dropdown>
            <DropdownToggle>
              <span className="flex px-4 font-medium">
                <FormattedMessage id="header01" defaultMessage="Commerce" />
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </DropdownToggle>
            <DropdownMenu>
              <NavLink
                to="/commerce"
                className="hover:text-orange-600 text-orange-800"
                // style={style}
              >
                <DropdownItem>Templates</DropdownItem>
              </NavLink>
              <DropdownDivider />
              <NavLink
                to=""
                className="hover:text-red-600 animate-pulse text-red-800"
                // style={style}
              >
                <DropdownItem>
                  <FormattedMessage id="header02" defaultMessage="incomplete" />
                </DropdownItem>
              </NavLink>
              <DropdownDivider />
              <NavLink
                to=""
                className="hover:text-red-600 animate-pulse text-red-800"
                // style={style}
              >
                <DropdownItem>
                  <FormattedMessage id="header02" defaultMessage="incomplete" />
                </DropdownItem>
              </NavLink>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownToggle>
              <span className="flex px-4 font-medium">
                Tailwind
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </DropdownToggle>
            <DropdownMenu>
              <NavLink
                to="/tailwind"
                className="hover:text-orange-600 text-orange-800"
                // style={style}
              >
                <DropdownItem>
                  <FormattedMessage id="header03" defaultMessage="Notes" />
                </DropdownItem>
              </NavLink>
              <DropdownDivider />
              <NavLink
                to=""
                className="hover:text-red-600 animate-pulse text-red-800"
                // style={style}
              >
                <DropdownItem>
                  <FormattedMessage id="header02" defaultMessage="incomplete" />
                </DropdownItem>
              </NavLink>
              <DropdownDivider />
              <NavLink
                to=""
                className="hover:text-red-600 animate-pulse text-red-800"
                // style={style}
              >
                <DropdownItem>
                  <FormattedMessage id="header02" defaultMessage="incomplete" />
                </DropdownItem>
              </NavLink>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownToggle>
              <span className="flex px-4 font-medium">
                Typescript
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </DropdownToggle>
            <DropdownMenu>
              <NavLink
                to="/counter"
                className="hover:text-orange-600 text-orange-800"
                // style={style}
              >
                <DropdownItem>
                  <FormattedMessage id="header04" defaultMessage="Count" />
                </DropdownItem>
              </NavLink>
              <DropdownDivider />
              <NavLink
                to=""
                className="hover:text-red-600 animate-pulse text-red-800"
                // style={style}
              >
                <DropdownItem>
                  <FormattedMessage id="header02" defaultMessage="incomplete" />
                </DropdownItem>
              </NavLink>
              <DropdownDivider />
              <NavLink
                to=""
                className="hover:text-red-600 animate-pulse text-red-800"
                // style={style}
              >
                <DropdownItem>
                  <FormattedMessage id="header02" defaultMessage="incomplete" />
                </DropdownItem>
              </NavLink>
            </DropdownMenu>
          </Dropdown>
        </nav>
        <NavLink
          to="/downloads"
          className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0"
        >
          <FormattedMessage id="downloads01" defaultMessage="Downloads" />{" "}
          {/* "downloads01": "Downloads", */}
        </NavLink>
        <span className=" text-teal-600">|</span>
        <NavLink
          to="/contactUs"
          className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0"
        >
          <FormattedMessage id="header05" defaultMessage="Hire Me" />
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </NavLink>
      </div>
    </header>
  );
}
/* Logic*/

function useToggle() {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);

  const toggle = React.useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  // close dropdown when you click outside  initialState = { users: [], // other keys with the default values when app is initialize. }
  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (ref.current != event.target) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [show, ref]);

  // close dropdown when you click on "ESC" key
  React.useEffect(() => {
    const handleEscape = (event: any) => {
      if (!show) return;

      if (event.key === "Escape") {
        setShow(false);
      }
    };
    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [show]);

  return {
    show,
    toggle,
    ref,
  };
}

const style = {
  item: `block w-full py-1 px-8 mb-2 text-sm font-normal clear-both whitespace-nowrap border-0 hover:bg-gray-200 cursor-pointer`,
  menu: `block z-30 absolute top-0 left-0 bg-white float-left py-2 px-0 text-left border border-gray-300 rounded-sm mt-0.5 mb-0 mx-0 bg-clip-padding`,
};

function Dropdown({ children }: { children: any }) {
  const { show, toggle } = useToggle();
  /* First child contains the dropdown toggle */
  const dropdownToggle = children[0];

  /* Second child contains the dropdown menu */
  const dropdownMenu = children[1];

  return (
    <>
      <button
        className="focus:outline-none"
        onClick={toggle}
        type="button"
        id="options-menu"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {dropdownToggle}
      </button>
      {show && <>{dropdownMenu}</>}
    </>
  );
}

function DropdownToggle({ children }: { children: any }) {
  return <>{children}</>;
}

function DropdownMenu({ children }: { children: any }) {
  return (
    <div className="relative">
      <div
        style={{ transform: "translate3d(0px, 3px, 0px)" }}
        className={style.menu}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {children}
      </div>
    </div>
  );
}

/* You can wrap the a tag with Link and pass href prop to Link if you are using either Create-React-App, Next.js or Gatsby */
function DropdownItem({ children }: { children: any }) {
  return (
    <button tabIndex={0} className={style.item} role="menuitem">
      {children}
    </button>
  );
}

function DropdownDivider() {
  return <hr className="my-2 text-gray-300" />;
}
// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedHeader() {
  return (
    <Suspense fallback="...is loading">
      <Header />
    </Suspense>
  );
}
