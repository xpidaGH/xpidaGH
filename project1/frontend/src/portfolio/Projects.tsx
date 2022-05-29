// ~\project1\frontend\src\portfolio\Projects.tsx
import React from "react";
import { projects } from "./PortfolioData";
import { FormattedMessage } from "react-intl";
// import { Todo } from "../todo1/types";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-orange-800 p-4 bg-teal-300 body-font 5-6"
    >
      <div className="container px-2 py-2 mx-auto text-center lg:px-20">
        <div className="flex flex-col w-full mb-10">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            <FormattedMessage
              id="portfolio01"
              defaultMessage="I Build Apps similar to the ones below:"
            />
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <FormattedMessage
              id="portfolio02"
              defaultMessage="I have versions of my template in twenty different languages. They
            are ready for production and all you need to do is make minor
            changes to make it your own. There are several functionalities,
            namely Portfolio, Notes, To do, a d E-commerce apps, as well as
            Social login and Comments sections. I also have notes and
            miscellaneous apps on the main technologies used as well as
            integration with Email/PayPal."
            />
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-teal-200 bg-teal-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
