// ~/src/portfolio/Skills.tsx
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { FormattedMessage } from "react-intl";
import { skills } from "./PortfolioData";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-green-800 mb-4">
            <FormattedMessage
              id="portfolio03"
              defaultMessage="Skills and Technologies"
            />
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            <FormattedMessage
              id="portfolio04"
              defaultMessage="Skills used in making my projects include HTML, CSS, JavaScript,
            React, Python, Django, Tailwind. React to expand our app to as many
            pages as we like, very simply, and add a lot of additional content."
            />
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-teal-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-orange-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
