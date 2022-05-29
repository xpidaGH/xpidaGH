// ~/src/holygrail/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Header from "../general/Header";

export default function Navbar() {
  /* const style = ({ isActive }) => ({
    fontWeight: { isActive } ? "bold" : "normal",
  }); */
  return (
    <div>
      <header className="bg-green-800 border-8 border-lime-200">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <NavLink
            to="/homescreen"
            // style={style}
          >
            <img src={"/static/images/nana_2.jpg"} alt="nana_2" />
          </NavLink>
          <NavLink
            to="/contact"
            className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
          >
            Nana Tuffuor
          </NavLink>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-white rounded  flex flex-wrap items-center text-xl justify-center">
            <Dropdown>
              <DropdownToggle>
                <span className="flex px-4 font-medium">
                  <FormattedMessage id="navbar01" defaultMessage="Portfolio" />
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
                  to="/projects"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage
                      id="navbar02"
                      defaultMessage="Past Work"
                    />
                  </DropdownItem>
                </NavLink>
                <DropdownDivider />
                <NavLink
                  to="/skills"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage id="navbar03" defaultMessage="Skills" />
                  </DropdownItem>
                </NavLink>
                <DropdownDivider />
                <NavLink
                  to="/testimonials"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage
                      id="navbar04"
                      defaultMessage="Testimonials"
                    />
                  </DropdownItem>
                </NavLink>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownToggle>
                <span className="flex px-4 font-medium">
                  React
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
                  to="/todos"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage id="navbar05" defaultMessage="To do" />
                  </DropdownItem>
                </NavLink>
                <NavLink
                  to="/note"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage
                      id="navbar06"
                      defaultMessage="Take a Note"
                    />
                  </DropdownItem>
                </NavLink>
                {/* <NavLink
                    to="/customerApp"
                    className="hover:text-orange-600 text-orange-800"
                  >
                    <DropdownItem>
                  Customers
                </DropdownItem>
                  </NavLink> */}
                <NavLink
                  to="/footer"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage
                      id="navbar07"
                      defaultMessage="Registration"
                    />
                  </DropdownItem>
                </NavLink>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownToggle>
                <span className="flex px-4 font-medium">
                  <FormattedMessage
                    id="navbar08"
                    defaultMessage="Miscellaneous"
                  />
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 20"
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
                  to="/paginate"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage id="navbar09" defaultMessage="Paginate" />
                  </DropdownItem>
                </NavLink>
                <NavLink
                  to="/languages"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage
                      id="navbar10"
                      defaultMessage="Language Codes"
                    />
                    <br />
                    <FormattedMessage
                      id="navbar11"
                      defaultMessage="Weather Codes"
                    />
                  </DropdownItem>
                </NavLink>
                <NavLink
                  to="/paypalHome"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage
                      id="navbar12"
                      defaultMessage="Paypal Example"
                    />
                  </DropdownItem>
                </NavLink>
                <NavLink
                  to="/video1"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage id="navbar13" defaultMessage="Video" />
                  </DropdownItem>
                </NavLink>
                <NavLink
                  to="/audio1"
                  className="hover:text-orange-600 text-orange-800"
                  // style={style}
                >
                  <DropdownItem>
                    <FormattedMessage id="navbar14" defaultMessage="Audio" />
                  </DropdownItem>
                </NavLink>
              </DropdownMenu>
            </Dropdown>
          </nav>
          <NavLink
            to="/ReactSocialLogin"
            className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0"
          >
            <FormattedMessage id="navbar15" defaultMessage="Log in" />
          </NavLink>
        </div>
      </header>
      <Header />
    </div>
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
    <div className="relative bg-teal-100">
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
