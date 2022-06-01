// ~/src/general/About.tsx
import React from "react";
import Carousel from "./Carousel";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex p-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-2xl text-4x xl font-medium text-indigo-900 bg-teal-200">
            <FormattedMessage
              id="about01"
              defaultMessage="Hi, I am Nana Tuffuor."
            />
          </h1>
          <p className="text-xl text-indigo-900 font-extrabold mb-2 px-2 leading-tight">
            <br />
            <FormattedMessage
              id="welcome"
              defaultMessage="Welcome to my educational website! My objective is to help beginners
            and young students everywhere learn website, mobile, and desktop
            programming. I have templates of this website in different
            languages. Use it as a starting point. Limited free copies of the
            templates are available!"
            />
            <NavLink
              to="/downloads"
              className="text-red-900 animate-pulse border-green-900 border-4"
            >
              <FormattedMessage id="welcome2" defaultMessage="Download!" />
            </NavLink>
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 c">
          <div className="text-center">
            <span className="text-xl text-indigo-900 font-extrabold mb-2 leading-tight">
              <NavLink
                to="/tutor2"
                className="text-red-900 animate-pulse border-green-900 border-4"
              >
                <FormattedMessage
                  id="about02"
                  defaultMessage="Take a look at how this Website was started!"
                />
              </NavLink>{" "}
            </span>
          </div>
          <Carousel />
          <div className="text-center">
            <p className="text-xl text-indigo-900 font-extrabold mb-2 px-2 leading-tight">
              <FormattedMessage
                id="beginners"
                defaultMessage="Absolute novices can get free step by step instructions on the
              coding and technologies used to create the template. Find it under
              the Commerce tab. If your preferred language is not yet available,
              come back and download your preference later! The technologies
              include: React TailwindCSS Typescript"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
