import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FormattedMessage } from "react-intl";

function Tailwind() {
  return (
    <div className="p-2">
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        <FormattedMessage
          id="tailwind01"
          defaultMessage="Tailwind - Build modern websites without leaving HTML"
        />
      </h1>
      <p>
        <FormattedMessage
          id="tailwind02"
          defaultMessage="You can build any design directly in your HTML by composing it with
        various class names such as: flex, pt-4, text-center, rotate-90."
        />
      </p>
      <figure className="bg-slate-100 rounded-xl dark:bg-slate-800">
        <img
          className="w-24 h-24"
          src={"/static/images/pic4.jpg"}
          alt="pic4"
          width="384"
          height="512"
        />
        <figcaption>
          <span>
            Emmanuel Agyekum -{" "}
            <FormattedMessage id="tailwind03" defaultMessage="Staff Engineer" />
          </span>
        </figcaption>
        <div className="py-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It is easy to customize, adapts to any design, and the
              build size is tiny.”
            </p>
          </blockquote>
        </div>
      </figure>
      <p>
        Utility classes help you work within the constraints of a system instead
        of littering your stylesheets with arbitrary values. They make it easy
        to be consistent with color choices, spacing, typography, shadows, and
        everything else that makes up a well-engineered design system. The shape
        below was produced with the following code:
      </p>
      <SyntaxHighLighter language="javascript" style={dracula}>
        {
          '<div className="bg-teal-300 p-4 space-4">\n<div className="w-96 bg-white shadow rounded">w-96</div>\n<div className="w-80 bg-black shadow rounded">w-80</div>\n<div className="w-72 bg-lime-700 shadow rounded">w-72</div>\n<div className="w-64 bg-gray-700 shadow rounded">w-64</div>\n<div className="w-60 bg-red-500 shadow rounded">w-60</div>\n<div className="w-56 bg-orange-500 shadow rounded">w-56</div>\n<div className="w-52 bg-yellow-500 shadow rounded">w-52</div>\n<div className="w-48 bg-green-500 shadow rounded">w-48</div>\n</div>'
        }
      </SyntaxHighLighter>
      <div className="bg-teal-300 p-4 space-4">
        <div className="w-96 bg-white shadow rounded">w-96</div>
        <div className="w-80 bg-black shadow rounded">w-80</div>
        <div className="w-72 bg-lime-700 shadow rounded">w-72</div>
        <div className="w-64 bg-gray-700 shadow rounded">w-64</div>
        <div className="w-60 bg-red-500 shadow rounded">w-60</div>
        <div className="w-56 bg-orange-500 shadow rounded">w-56</div>
        <div className="w-52 bg-yellow-500 shadow rounded">w-52</div>
        <div className="w-48 bg-green-500 shadow rounded">w-48</div>
      </div>
      <p>
        Because Tailwind is so low-level, it never encourages you to design the
        same site twice. Even with the same color palette and sizing scale, it's
        easy to build the same component with a completely different look in the
        next project.
      </p>
      <div className="flex p-4 mx-10 border-teal-200 font-sans">
        <div className="flex-none w-48 relative">
          <img
            src={"/static/images/pic3.jpg"}
            alt="pic3"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <form className="flex-auto border-8 p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              Classic Utility T-Shirt
            </h1>
            <div className="text-lg font-semibold text-slate-500">$10.00</div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="s"
                />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="m"
                />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
      <p>
        Tailwind automatically removes all unused CSS when building for
        production, which means your final CSS bundle is the smallest it could
        possibly be. In fact, most Tailwind projects ship less than 10kB of CSS
        to the client.
      </p>
      <p>
        Wrestling with a bunch of complex media queries in your CSS sucks, so
        Tailwind lets you build responsive designs right in your HTML instead.
        Throw a screen size in front of literally any utility class and watch it
        magically apply at a specific breakpoint: sm: md: lg: xl: 2xl:
      </p>
      <section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
              Beach House in Collingwood
            </h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
              Entire house
            </p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img
              src={"/static/images/beach-house.jpg"}
              alt="beach-house.jpg"
              className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src={"/static/images/beach-house-interior-1.jpg"}
              alt="beach-house-interior-1.jpg"
              className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src={"/static/images/beach-house-interior-2.jpg"}
              alt="beach-house-interior-2.jpg"
              className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
          </div>
          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt className="sr-only">Reviews</dt>
            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="mr-1 stroke-current dark:stroke-indigo-500"
              >
                <path
                  d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                4.89 <span className="text-slate-400 font-normal">(128)</span>
              </span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                aria-hidden="true"
                fill="currentColor"
                className="mx-3 text-slate-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mr-1 text-slate-400 dark:text-slate-500"
                aria-hidden="true"
              >
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Collingwood, Ontario
            </dd>
          </dl>
          <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <button
              type="button"
              className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Check availability
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            This sunny and spacious room is for those traveling light and
            looking for a comfy and cosy place to lay their head for a night or
            two. This beach house sits in a vibrant neighborhood littered with
            cafes, pubs, restaurants and supermarkets and is close to all the
            major attractions such as Edinburgh Castle and Arthur's Seat.
          </p>
        </div>
      </section>
      <p>
        You can style something on hover, focus, active, disabled, focus-within,
        focus-visible, and even group-hover.
      </p>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Projects</h2>
          <a
            href="/new"
            className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New
          </a>
        </div>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects..."
          />
        </form>
      </header>
      <p>
        Flexbox Example - To use flex in Tailwind CSS, you need to add a class
        of flex and then the direction of the flex items:
      </p>
      <div className="flex flex-row">
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 1 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 2 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 3 </button>
      </div>
      <p>
        Using flex-row-reverse will reverse the order in which the buttons
        appear. flex-col stacks them above each other. Here is an example:
      </p>{" "}
      <div className="flex flex-col">
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 1 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 2 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 3 </button>
      </div>
      <p>
        Just like the previous example, flex-col-reverse reverses the order.
      </p>
      <p>
        Grid Example - When specifying columns and rows in the grid system, we
        take a different approach by passing in a number that will determine how
        the elements will occupy available space:
      </p>
      <div className="grid grid-cols-3">
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 1 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 2 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 3 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 4 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 5 </button>
        <button className="my-2 mx-2 p-2 bg-teal-400"> Button 6 </button>
      </div>
      <p>
        Colors - Tailwind comes with a lot of predefined colors. Each color has
        a set of different variations, with the lightest variation being 50 and
        the darkest being 900. &lt;button className="bg-red-900"&gt;Click
        me&lt;/button&gt; This syntax is the same for all colors in Tailwind
        except for black and white, which are written the same way but without
        the use of numbers: bg-black and bg-white. To add text color, you use
        the class text-color: &lt;p className="text-yellow-600"&gt;Hello
        World&lt;/p&gt;
      </p>
      <p>
        Padding Tailwind already has a design system that would help you keep a
        consistent scale across your designs. All you have to know is the syntax
        for applying each utility. The following are utilities for adding
        padding to your elements: p denotes padding across the whole element. py
        denotes padding padding-top and padding-bottom. px denotes padding-left
        and padding-right. pt denotes padding-top. pr denotes padding-right. pb
        denotes padding-bottom. pl denotes padding-left To apply them to your
        elements, you’d have to use the appropriate numbers provided by Tailwind
        — a bit similar to the numbers that represented color variants in the
        last section. Here’s what we mean:
      </p>
      <button className="my-2 mx-2 bg-teal-400 p-0">Click me</button>
      <button className="my-2 mx-2 bg-teal-400 pt-1">Click me</button>
      <button className="my-2 mx-2 bg-teal-400 pr-2">Click me</button>
      <button className="my-2 mx-2 bg-teal-400 pb-3">Click me</button>
      <button className="my-2 mx-2 bg-teal-400 pl-4">Click me</button>
      <p>
        Margin The predefined utilities for padding and margin are very similar.
        You have to replace the p with an m: m my mx mt mr mb ml
      </p>
    </div>
  );
}

export default Tailwind;
