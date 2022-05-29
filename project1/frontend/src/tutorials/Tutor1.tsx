import React from "react";
import { page1, page2, page3, page4, page5 } from "./TutorData";

function Tutor1() {
  return (
    <div id="tutor1" className="py-5 px-10 text-xl">
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Introduction
      </h1>
      <ul className="list-disc">
        <li className="text-b0ld">
          The internet has leveled the playing field in business and anyone with
          a computer can start a money-making online business. You can also live
          anywhere you want, operate from any location (e.g. home/hostel), set
          your own time-table, and work as little or as much as you want,
          depending on how big you want your business to be. However, a website
          or blog is vital for such online business.
        </li>
        <li className="text-b0ld">
          We are offering these tutorials to introduce beginners (pupils,
          students, teachers, hobbyists, and other professionals) to the world
          of computer programming, including website design and programming of
          different devices - PCs, Macs, mobile phones, palmtop computers etc.
          The aim is to introduce people and students who have no programming
          and website design experience to:
        </li>
        <ol className="list-decimal">
          <li>Take up posts in organizations that use a lot of IT.</li>
          <li>
            Prepare students for a future career in IT and participate in
            programming/website design competitions.
          </li>
        </ol>
        <li className="text-b0ld">
          With the website tutorials, you should be able to produce an excellent
          website for your school, church, business, or simply for your own
          personal website. If you:
        </li>
        <ol className="list-decimal">
          <li>have trouble understanding something</li>
          <li>would like to see additional information on a topic</li>
          <li>feel something we have written is in error</li>
          <li>know of a useful link to supplement a topic</li>
          <li>would like to see a specific lesson added to our lessons</li>
        </ol>
        <li className="text-b0ld">
          then please send me an e-mail at{" "}
          <a className="bg-teal-100 text-blue-900" href="tuffuornana@gmail.com">
            tuffuornana@gmail.com
          </a>
        </li>
      </ul>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Creating a Website using Django/React/Typescript/TailwindCSS
      </h1>
      <ul className="list-disc">
        <li className="text-b0ld">
          Initial functionalities include a Notes, Portfolio, and E-Commerce
          applications.
        </li>
      </ul>
      <ul className="list-disc">
        <li className="text-b0ld">Prerequisites</li>
      </ul>
      <table className="border-separate border border-lime-400 ...">
        <thead>
          <tr>
            <th className="border border-lime-300 ...">
              Technologies/Installations
            </th>
            <th className="border border-lime-300 ...">Homepage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-lime-300 ...">
              Install Visual Studio Code
            </td>
            <td className="border border-lime-300 ...">
              code.visualstudio.com
            </td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Install Python - verify with python --version and pip --version
            </td>
            <td className="border border-lime-300 ...">Python.org</td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Install Node.js - verify version Node &gt;= 10.16 and npm &gt;=
              5.6
            </td>
            <td className="border border-lime-300 ...">Nodejs.org</td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Install Git on your computer
            </td>
            <td className="border border-lime-300 ...">git-scm.com</td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Sign Up/In to a free GitHub account
            </td>
            <td className="border border-lime-300 ...">github.com</td>
          </tr>
          <tr>
            <td className="border border-lime-300 ...">
              Sign Up/In to a free Netlify account
            </td>
            <td className="border border-lime-300 ...">netlify.com</td>
          </tr>
        </tbody>
      </table>
      <ol className="list-decimal">
        <li>
          {page1()}
          {page2()}
          {page3()}
          {page4()}
          {page5()}
        </li>
      </ol>
    </div>
  );
}

export default Tutor1;
