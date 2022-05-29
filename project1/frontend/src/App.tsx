import React, { useContext, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { createClient } from "@supabase/supabase-js";
import { Comments, CommentsProvider } from "supabase-comments-extension";
import {
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  /* FormattedPlural, */
  FormattedTime,
  /* useIntl, */
} from "react-intl";
import { Context } from "./reacti18n/Wrapper";
import { Box, Flex } from "rebass";
import { Routes, Route, NavLink } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import Commerce from "./commerce/Commerce";
import Downloads from "./downloads/Downloads";
import Contact from "./general/Contact";
import Footer from "./general/Footer";
import UsefulLinks from "./general/UsefulLinks";
import Languages from "./general/Languages";
import Tailwind from "./general/Tailwind";
import { ContactUs } from "./general/ContactUs";
import Navbar from "./holygrail/Navbar";
import NavbarLeft from "./holygrail/NavbarLeft";
import NavbarBottom from "./holygrail/NavbarBottom";
import NavbarRight from "./holygrail/NavbarRight";
import Note from "./notes/Note";
import Paginate from "./pagination/Paginate";
import PaypalHome from "./paypalPayment/PaypalHome";
import Projects from "./portfolio/Projects";
import Skills from "./portfolio/Skills";
import Testimonials from "./portfolio/Testimonials";
import HomeScreen from "./screens/HomeScreen";
import Todos from "./todo1/Todos";
import Tutor1 from "./tutorials/Tutor1";
import Counter from "./typescript1/Counter";
import Video1 from "./videoAudio/Video1";
import Audio1 from "./videoAudio/Audio1";
import ReactSocialLogin from "./reactSocialLogin/ReactSocialLogin";

const SUPABASE_URL = "https://gcphitoszvetprfsxiwk.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjcGhpdG9zenZldHByZnN4aXdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIwNjAxMDYsImV4cCI6MTk2NzYzNjEwNn0.jomCmTabSBr2Um7k0OLvzUNS71zLQsMo_61PMDhZWxE";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const App = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const context = useContext(Context);

  const initialOptions = {
    "client-id":
      "ARaTYbuhtxw6WyPnyMoHyd3-Amteqp6EF0oW2HlK9pJ7Kjojd867g46kvrheCc9uFq_gKh7rMqlXsjEb",
    currency: "USD",
    intent: "capture",
    "data-clienttoken": "abc123xyz==",
  };

  return (
    <>
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box>
          <Navbar />
        </Box>
        <Flex
          sx={{
            flex: 1,
            flexDirection: ["column", "row"],
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <section
              id="reacti18n"
              className="inline-flex items-center p-1 focus:outline-none title-font font-medium text-xl text-center py-2 px-4 flex-col"
            >
              <table>
                <tr className=" space-x-2">
                  <td>
                    <select
                      value={context.locale}
                      onChange={context.selectLanguage}
                    >
                      <option value="en"> ENGLISH</option>
                      <option value="ar"> ARABIC</option>
                      <option value="bn"> BENGALI</option>
                      <option value="zh"> CHINESE</option>
                      <option value="nl"> DUTCH</option>
                      <option value="fr"> FRENCH</option>
                      <option value="de"> GERMAN</option>
                      <option value="hi"> HINDI</option>
                      <option value="id"> INDONESIAN</option>
                      <option value="it"> ITALIAN</option>
                      <option value="ja"> JAPANESE</option>
                      <option value="mr"> MARATHI</option>
                      <option value="pt"> PORTUGUESE</option>
                      <option value="ru"> RUSSIAN</option>
                      <option value="es"> SPANISH</option>
                      <option value="sw"> SWAHILI</option>
                      <option value="ta"> TAMIL</option>
                      <option value="te"> TELUGU</option>
                      <option value="tr"> TURKISH</option>
                      <option value="ur"> URDU</option>
                    </select>
                  </td>
                  <td>
                    <span className=" space-x-1 p-1 bg-teal-400 rounded-2xl">
                      <FormattedDate
                        value={props.date}
                        year="numeric"
                        month="short"
                        day="numeric"
                        weekday="short"
                      />
                    </span>
                    <span className=" space-x-1 p-1 bg-teal-400 rounded-2xl">
                      <FormattedTime
                        value={new Date()}
                        hour="numeric"
                        minute="numeric"
                        timeZoneName="short"
                      />
                    </span>
                    <br />
                    <FormattedMessage
                      id="app.tech"
                      defaultMessage="React Tailwind CSS Typescript"
                    />
                  </td>
                  <button className=" p-1 bg-teal-500 rounded-lg text-white font-bold">
                    <NavLink to="/todos">
                      <FormattedMessage
                        id="webtemp"
                        defaultMessage="My Website Template"
                      />
                      : <br />
                      <FormattedNumber
                        value={5.0}
                        style="currency"
                        currencyDisplay="symbol"
                        currency="USD"
                      />
                    </NavLink>
                  </button>
                  <td></td>
                </tr>
              </table>
            </section>
            {
              <Routes>
                <Route index element={<HomeScreen />} />
                <Route path="homeScreen" element={<HomeScreen />} />
                <Route path="projects" element={<Projects />} />
                <Route path="skills" element={<Skills />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="contact" element={<Contact />} />
                <Route path="footer" element={<Footer />} />
                <Route path="tutor1" element={<Tutor1 />} />
                <Route path="usefulLinks" element={<UsefulLinks />} />
                <Route path="note" element={<Note />} />
                <Route path="languages" element={<Languages />} />
                <Route path="paginate" element={<Paginate />} />
                <Route path="tailwind" element={<Tailwind />} />
                <Route path="contactUs" element={<ContactUs />} />
                <Route path="counter" element={<Counter />} />
                <Route path="todos" element={<Todos />} />
                <Route path="commerce" element={<Commerce />} />
                <Route path="downloads" element={<Downloads />} />
                <Route path="paypalHome" element={<PaypalHome />} />
                <Route path="video1" element={<Video1 />} />
                <Route path="audio1" element={<Audio1 />} />
                <Route path="ReactSocialLogin" element={<ReactSocialLogin />} />
                <Route
                  path="*"
                  element={
                    <main>
                      <p className="p-10 text-8xl text-red-900">
                        <FormattedMessage
                          id="app.404"
                          defaultMessage="There is nothing here: 404!"
                        />
                      </p>
                    </main>
                  }
                />
              </Routes>
            }
            <section className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
              <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                  <p className="mx-4 px-4 border-2 bg-teal-300  text-xl font-bold rounded-md">
                    <FormattedMessage
                      id="membership"
                      defaultMessage="Get a link to downloads by paying a membership fee:"
                    />
                    <FormattedNumber
                      value={5.0}
                      style="currency"
                      currencyDisplay="symbol"
                      currency="USD"
                    />
                    <NavLink
                      to="/downloads"
                      className=" bg-white text-blue-800 rounded-md"
                    >
                      {" "}
                      <FormattedMessage
                        id="details"
                        defaultMessage="See details"
                      />
                    </NavLink>
                  </p>
                </div>
                <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                  <div>
                    <PayPalScriptProvider options={initialOptions}>
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: "1.99",
                                },
                              },
                            ],
                          });
                        }}
                        // onApprove={(data, actions): any => {
                        //   return actions.order?.capture().then((details) => {
                        //     const name = details.payer.name.given_name;
                        //     alert(`Transaction completed by ${name}`);
                        //   });
                        // }}
                      />
                    </PayPalScriptProvider>
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="px-4">
              <CommentsProvider
                supabaseClient={supabase}
                onAuthRequested={() => {
                  window.location.href = "/sign-in";
                }}
              >
                <Comments topic="tutorial-one" />
              </CommentsProvider>
            </section> */}
          </Box>
          <Box
            sx={{
              flexBasis: ["auto", 128],
              order: -1,
            }}
          >
            <NavbarLeft />
          </Box>
          <Box
            sx={{
              flexBasis: ["auto", 128],
            }}
          >
            <NavbarRight />
          </Box>
        </Flex>
        <Box>
          <NavbarBottom />
        </Box>
      </Flex>
    </>
  );
};
export default App;
