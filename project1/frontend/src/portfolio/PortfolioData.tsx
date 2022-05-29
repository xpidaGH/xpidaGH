// ~\project1\frontend\src\portfolio\PortfolioData.tsx
import React from "react";
import { FormattedMessage } from "react-intl";

export const projects = [
  {
    title: "React and Nodejs",
    subtitle: "MERN Stack",
    description: (
      <FormattedMessage
        id="portfolio06"
        defaultMessage="An Ecommerce WebApp with a React frontend and Node.js backend."
      />
    ),
    image: "/static/images/project-1.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "Ecommerce 1",
    subtitle: "React and Django",
    description: (
      <FormattedMessage
        id="portfolio07"
        defaultMessage="An Ecommerce WebApp with a React frontend and Django backend."
      />
    ),
    image: "/static/images/project-2.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "Portfolio",
    subtitle: "React Portfolio WebApp",
    description: (
      <FormattedMessage
        id="portfolio08"
        defaultMessage="One of the most important apps you can build for yourself is your developer portfolio as every Web developer needs to be able to show what they can do for any potential client or employer."
      />
    ),
    image: "/static/images/project-3.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "Utilities App",
    subtitle: "React Hooks",
    description: (
      <FormattedMessage
        id="portfolio09"
        defaultMessage="Utilities Section that offer web scraping services."
      />
    ),
    image: "/static/images/project-4.gif",
    link: "https://reactbootcamp.com",
  },
];

export const testimonials = [
  {
    quote: (
      <FormattedMessage
        id="portfolio10"
        defaultMessage="Hello! We design Websites quickly at affordable rates!"
      />
    ),
    image: "/static/images/pic1.jpg",
    name: "Isaac Tuffuor",
    company: "thespiderapps",
  },
  {
    quote: (
      <FormattedMessage
        id="portfolio11"
        defaultMessage="Partners can use our Partnership services to design for their clients - charges will be determined jointly."
      />
    ),
    image: "/static/images/pic2.jpg",
    name: "Nana Tuffuor",
    company: "kaybit",
  },
];

export const skills = [
  "HTML",
  "CSS/Tailwind",
  "JavaScript/React",
  "Python/Django",
];
