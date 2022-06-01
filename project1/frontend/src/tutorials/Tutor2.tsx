import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Tutor2() {
  const str201 = "mkdir DjangoReactTT";
  const copy201 = (
    <CopyToClipboard text={str201}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str202 = "cd DjangoReactTT";
  const copy202 = (
    <CopyToClipboard text={str202}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str203 = "python3 -m venv env";
  const copy203 = (
    <CopyToClipboard text={str203}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str204 = "py -m venv env";
  const copy204 = (
    <CopyToClipboard text={str204}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str205 = "source env/bin/activate";
  const copy205 = (
    <CopyToClipboard text={str205}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str206 = "./env/Scripts/activate";
  const copy206 = (
    <CopyToClipboard text={str206}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str207 = "pip install django";
  const copy207 = (
    <CopyToClipboard text={str207}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str208 = "django-admin startproject project1";
  const copy208 = (
    <CopyToClipboard text={str208}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str209 = "cd project1";
  const copy209 = (
    <CopyToClipboard text={str209}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str210 = "python manage.py migrate";
  const copy210 = (
    <CopyToClipboard text={str210}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str211 = "python manage.py runserver";
  const copy211 = (
    <CopyToClipboard text={str211}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str212 =
    "npx create-react-app frontend --template tailwindcss-typescript";
  const copy212 = (
    <CopyToClipboard text={str212}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str213 =
    "yarn create react-app frontend --template tailwindcss-typescript";
  const copy213 = (
    <CopyToClipboard text={str213}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str214 = "cd frontend";
  const copy214 = (
    <CopyToClipboard text={str214}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str215 = "npm run start";
  const copy215 = (
    <CopyToClipboard text={str215}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str216 = "npm run build";
  const copy216 = (
    <CopyToClipboard text={str216}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str217 = "cd ..";
  const copy217 = (
    <CopyToClipboard text={str217}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str218 = "import os";
  const copy218 = (
    <CopyToClipboard text={str218}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str219 = "os.path.join(BASE_DIR, 'frontend', 'build')";
  const copy219 = (
    <CopyToClipboard text={str219}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str220 =
    "STATICFILES_DIRS = [os.path.join(BASE_DIR, 'frontend', 'build', 'static')]";
  const copy220 = (
    <CopyToClipboard text={str220}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str221 = "python manage.py startapp core";
  const copy221 = (
    <CopyToClipboard text={str221}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str222 =
    "def front(request): \n    context = { }\n    return render(request, 'index.html', context)";
  const copy222 = (
    <CopyToClipboard text={str222}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str223 =
    "from django.contrib import admin\nfrom django.urls import path\nfrom core.views import front\n\nurlpatterns = [\n    path('admin/', admin.site.urls), \n    path('', front, name='front'),\n]\n";
  const copy223 = (
    <CopyToClipboard text={str223}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str224 = "python manage.py runserver";
  const copy224 = (
    <CopyToClipboard text={str224}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str225 = "cd DjangoReactTT/project1";
  const copy225 = (
    <CopyToClipboard text={str225}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str226 =
    "python -m pip install djangorestframework django-cors-headers";
  const copy226 = (
    <CopyToClipboard text={str226}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str227 =
    "/* tailwind.css */\n@tailwind base; \n\n /* Your own custom base styles */\n\n /* Start purging... */\n @tailwind components; \n /* Stop purging. */\n.HolyGrail {\n  display: flex; \n  height: 100%;\n  flex-direction: column; \n }\n.HolyGrail-header, \n.HolyGrail-footer {\n  flex: none; \n }\n.HolyGrail-body {\n  display: flex; \n  flex: 1 0 auto; \n  flex-direction: column; \n  padding: var(--space); \n }\n.HolyGrail-content {\n  margin-top: var(--space); \n }\n.HolyGrail-nav {\n  order: -1; \n }\n.HolyGrail-nav, \n.HolyGrail-ads {\n  padding: 1em; \n  border-radius: 3px; \n  background: rgba(147, 128, 108, 0.1); \n }\n @media (--break-lg) {\n  .HolyGrail-body {\n    flex-direction: row; \n  }\n  .HolyGrail-content {\n    flex: 1; \n    padding: 0 var(--space-lg); \n    margin: 0; \n  }\n  .HolyGrail-nav, \n  .HolyGrail-ads {\n    flex: 0 0 12em; \n  }\n }\n\n /* Your own custom component styles */\n\n /* Start purging... */\n @tailwind utilities; \n /* Stop purging. */\n\n /* Your own custom utilities */\n";
  const copy227 = (
    <CopyToClipboard text={str227}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str228 =
    '// index.tsx\nimport React from "react";\n import ReactDOM from "react-dom";\n import "./styles/tailwind.css";\n import "./styles/output.css";\n import App from "./App";\n import * as serviceWorker from "./serviceWorker";\n import { BrowserRouter } from "react-router-dom";\n\n ReactDOM.render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>,\n  document.getElementById("root")\n); \n\n // If you want your app to work offline and load faster, you can change\n // unregister() to register() below. Note this comes with some pitfalls. \n // Learn more about service workers: https://bit.ly/CRA-PWA\n serviceWorker.unregister();\n';
  const copy228 = (
    <CopyToClipboard text={str228}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str229 =
    '// App.tsx\n\n import React from "react";\n import { Box, Flex } from "rebass";\n import { Routes, Route } from "react-router-dom";\n import Navbar from "./holygrail/Navbar";\n import NavbarLeft from "./holygrail/NavbarLeft";\n import NavbarBottom from "./holygrail/NavbarBottom";\n import NavbarRight from "./holygrail/NavbarRight";\n import HomeScreen from "./screens/HomeScreen";\n import Projects from "./portfolio/Projects";\n import Skills from "./portfolio/Skills";\n import Testimonials from "./portfolio/Testimonials";\n import Contact from "./general/Contact";\n import Tutor1 from "./tutorials/Tutor1";\n import UsefulLinks from "./general/UsefulLinks";\n\n var date = new Date().getDate(); //To get the Current Date. \n var month = new Date().getMonth() + 1; //To get the Current Month. \n var year = new Date().getFullYear(); //To get the Current Year. \n var hours = new Date().getHours();\n var min = new Date().getMinutes();\n var sec = new Date().getSeconds();\n var milsec = new Date().getMilliseconds();\n\n const App = (props: any) => (\n  <>\n    <Flex\n      sx={{\n        flexDirection: "column",\n        minHeight: "100vh",\n      }}\n    >\n      <Box>\n        <Navbar />\n      </Box>\n      <Flex\n        sx={{\n          flex: 1, \n          flexDirection: ["column", "row"],\n        }}\n      >\n        <Box\n          sx={{\n            flex: 1, \n            minWidth: 0, \n          }}\n        >\n          <div className="text-center font-light italic">\n            <p>\n              {date}/{month}/{year} {hours}:{min}:{sec}:{milsec}{" "}\n            </p>\n          </div>\n          {\n            <Routes>\n              <Route index element={<HomeScreen />} />\n              <Route path="/HomeScreen" element={<HomeScreen />} />\n              <Route path="/Projects" element={<Projects />} />\n              <Route path="/Skills" element={<Skills />} />\n              <Route path="/Testimonials" element={<Testimonials />} />\n              <Route path="/Contact" element={<Contact />} />\n              <Route path="/Tutor1" element={<Tutor1 />} />\n              <Route path="/UsefulLinks" element={<UsefulLinks />} />\n              <Route\n                path="*"\n                element={\n                  <main>\n                    <p className="p-10 text-8xl text-red-900">\n                      There is nothing here: 404! \n                    </p>\n                  </main>\n                }\n              />\n            </Routes>\n          }\n        </Box>\n        <Box\n          sx={{\n            flexBasis: ["auto", 128], \n            order: -1, \n          }}\n        >\n          <NavbarLeft />\n        </Box>\n        <Box\n          sx={{\n            flexBasis: ["auto", 128], \n          }}\n        >\n          <NavbarRight />\n        </Box>\n      </Flex>\n      <Box>\n        <NavbarBottom />\n      </Box>\n    </Flex>\n  </>\n); \n\n export default App; \n';
  const copy229 = (
    <CopyToClipboard text={str229}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str319 = "cd frontend";
  const copy319 = (
    <CopyToClipboard text={str319}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str320 =
    "npm install -g react-devtools tree eslint prettier react-scripts dotenv react-player typescript promise-polyfill @material-ui/core @material-ui/lab prop-types @material-ui/icons";
  const copy320 = (
    <CopyToClipboard text={str320}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str321 =
    "npm install --save redux react-redux redux-thunk redux-devtools-extension @types/rebass rebass @heroicons/react react-intl vuera axios @types/react@latest chokidar string-strip-html react-social-login-buttons emailjs-com react-paginate react-syntax-highlighter web-vitals @types/react-dom @emailjs/browser react-router-dom @types/react-router-dom";
  const copy321 = (
    <CopyToClipboard text={str321}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str322 =
    "npm install @paypal/react-paypal-js react-textarea-autosize react-icons react-easy-swipe classnames react react-dom react-hook-form @headlessui/react luxon @chec/commerce.js @types/chec__commerce.js @stripe/react-stripe-js @stripe/stripe-js @types/prop-types @types/jest @types/react @types/styled-components @types/styled-system @types/styled-system__css";
  const copy322 = (
    <CopyToClipboard text={str322}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str323 =
    "npm install -- reactjs-social-login react-copy-to-clipboard save supabase-comments-extension @supabase/ui @supabase/supabase-js react-query react-audio-player @paypal/paypal-js @tailwindcss/forms @types/uuid @chec/react-commercejs-hooks";
  const copy323 = (
    <CopyToClipboard text={str323}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str324 =
    "npm install --save reactjs-social-login react-copy-to-clipboard";
  const copy324 = (
    <CopyToClipboard text={str324}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str325 =
    "npm i --save-dev @types/node @types/prop-types @types/luxon @testing-library/jest-dom @testing-library/user-event  @testing-library/dom @testing-library/react @types/react-syntax-highlighter @types/react-copy-to-clipboard @tailwindcss/formsnpm install --save rebass @types/rebass @heroicons/react";
  const copy325 = (
    <CopyToClipboard text={str325}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str316 = "npm run build";
  const copy316 = (
    <CopyToClipboard text={str316}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str317 = "cd ..";
  const copy317 = (
    <CopyToClipboard text={str317}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str318 =
    "REST_FRAMEWORK = {\n     'DEFAULT_RENDERER_CLASSES': (\n         'rest_framework.renderers.JSONRenderer', \n     ) \n }";
  const copy318 = (
    <CopyToClipboard text={str318}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str332b =
    "INSTALLED_APPS = [\n    'django.contrib.admin', \n    'django.contrib.auth', \n    'django.contrib.contenttypes', \n    'django.contrib.sessions', \n    'django.contrib.messages', \n    'django.contrib.staticfiles', \n\n    'core', \n    'rest_framework', \n    'corsheaders', \n] \n\nCORS_ORIGIN_ALLOW_ALL = False\nCORS_ORIGIN_WHITELIST = ['https://localhost:3000',] \n\nMIDDLEWARE = [\n    'corsheaders.middleware.CorsMiddleware', \n    'django.middleware.security.SecurityMiddleware', \n    'django.contrib.sessions.middleware.SessionMiddleware', \n    'django.middleware.common.CommonMiddleware', \n    'django.middleware.csrf.CsrfViewMiddleware', \n    'django.contrib.auth.middleware.AuthenticationMiddleware', \n    'django.contrib.messages.middleware.MessageMiddleware', \n    'django.middleware.clickjacking.XFrameOptionsMiddleware', \n]";
  const copy332b = (
    <CopyToClipboard text={str332b}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str332c =
    "class Notes(models.Model):\n    title = models.CharField(max_length=60) \n    content = models.CharField(max_length=120) \n\n    def __str__(self): \n        return self.title";
  const copy332c = (
    <CopyToClipboard text={str332c}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str331a =
    '"scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },';
  const str331 =
    '"scripts": {\n    "start": "npm run watch:css && react-scripts start",\n    "build": "npm run watch:css && react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "watch:css": "postcss src/styles/tailwind.css -o src/styles/output.css"\n},';
  const copy331 = (
    <CopyToClipboard text={str331}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str029 =
    "from rest_framework import serializers\nfrom .models import Notes\n\nclass NoteSerializer(serializers.ModelSerializer): \n    class Meta: \n        model = Notes\n        fields = ('id', 'title', 'content')";
  const copy029 = (
    <CopyToClipboard text={str029}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str030 = "fields = '__all__'";
  const copy030 = (
    <CopyToClipboard text={str030}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str031 =
    "from rest_framework.decorators import api_view\nfrom rest_framework.response import Response\nfrom rest_framework import status\nfrom .serializers import NoteSerializer\nfrom .models import Notes";
  const copy031 = (
    <CopyToClipboard text={str031}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str032 =
    "@api_view(['GET', 'POST']) \ndef note(request): \n\n    if request.method == 'GET': \n        note = Notes.objects.all()\n        serializer = NoteSerializer(note, many=True) \n        return Response(serializer.data) \n\n    elif request.method == 'POST': \n        serializer = NoteSerializer(data=request.data) \n        if serializer.is_valid():\n            serializer.save()\n            return Response(status=status.HTTP_201_CREATED) \n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)";
  const copy032 = (
    <CopyToClipboard text={str032}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str033 =
    "@api_view(['DELETE']) \ndef note_detail(request, pk): \n    try: \n        note = Notes.objects.get(pk=pk) \n    except Notes.DoesNotExist: \n        return Response(status=status.HTTP_404_NOT_FOUND) \n\n    if request.method == 'DELETE': \n        note.delete()\n        return Response(status=status.HTTP_204_NO_CONTENT)";
  const copy033 = (
    <CopyToClipboard text={str033}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str034 =
    "from django.shortcuts import render\nfrom rest_framework.decorators import api_view\nfrom rest_framework.response import Response\nfrom rest_framework import status\nfrom .serializers import NoteSerializer\nfrom .models import Notes\n\n# Create your views here. \ndef front(request): \n    context = {\n        }\n\n    return render(request, 'index.html', context) \n\n@api_view(['GET', 'POST']) \ndef note(request): \n\n    if request.method == 'GET': \n        note = Notes.objects.all()\n        serializer = NoteSerializer(note, many=True) \n        return Response(serializer.data) \n\n    elif request.method == 'POST': \n        serializer = NoteSerializer(data=request.data) \n        if serializer.is_valid():\n            serializer.save()\n            return Response(status=status.HTTP_201_CREATED) \n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) \n\n@api_view(['DELETE']) \ndef note_detail(request, pk): \n    try: \n        note = Notes.objects.get(pk=pk) \n    except Notes.DoesNotExist: \n        return Response(status=status.HTTP_404_NOT_FOUND) \n\n    if request.method == 'DELETE': \n        note.delete()\n        return Response(status=status.HTTP_204_NO_CONTENT)";
  const copy034 = (
    <CopyToClipboard text={str034}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str035 = "from core.views import front, note, note_detail";
  const copy035 = (
    <CopyToClipboard text={str035}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str036 =
    '    path("notes/", note, name="note"),\n    path("notes/<int:pk>/", note_detail, name="detail"),';
  const copy036 = (
    <CopyToClipboard text={str036}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str037 =
    "from django.contrib import admin\nfrom django.urls import path\nfrom core.views import front, note, note_detail\n\nurlpatterns = [\n    path('admin/', admin.site.urls), \n    path('', front, name='front'),\n    path('notes/', note, name='note'),\n    path('notes/<int:pk>/', note_detail, name='detail'),\n]";
  const copy037 = (
    <CopyToClipboard text={str037}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str038 = "python manage.py makemigrations";
  const copy038 = (
    <CopyToClipboard text={str038}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str039 = "python manage.py migrate";
  const copy039 = (
    <CopyToClipboard text={str039}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str040 = "python manage.py runserver";
  const copy040 = (
    <CopyToClipboard text={str040}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str041a = "Hello Nana!";
  const copy041a = (
    <CopyToClipboard text={str041a}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str041b = "This is a new note.";
  const copy041b = (
    <CopyToClipboard text={str041b}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div id="tutorial2" className="py-5 px-10 text-xl">
      <section id="about">
        <div className="container mx-auto flex p-1 md:flex-row flex-col items-left">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0">
              Page 3 - Getting Started 2
            </p>
          </div>
        </div>
      </section>
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
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Setting up the Django backend
      </h1>
      <ol className="list-decimal">
        <li>
          Open the Command Line on Windows, Terminal on Mac, and Linux and
          navigate to the directory where you want to store the project and
          create a new directory:
        </li>
        <table id="201" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy201}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str201}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Move into the new directory with:</li>
        <table id="202" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy202}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str202}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Open the DjangoReactTT folder in VS Code (e.g. Launch VS Code --&gt;
          File --&gt; Open Folder... )
        </li>
        <li>Create a Virtual environment:</li>
        <ul className="list-disc">
          <li>For mac/unix users:</li>
        </ul>
        <table id="203" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy203}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str203}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>For windows users:</li>
        </ul>
        <table id="204" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy204}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str204}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>After creating the environment, activate it by running :</li>
        <ul className="list-disc">
          <li>For mac/unix users:</li>
        </ul>
        <table id="205" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy205}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str205}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>For windows users:</li>
        </ul>
        <table id="206" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy206}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str206}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            You can deactivate it by simply running the command:{" "}
            <code>deactivate</code>, but you don't have to deactivate it yet.
          </li>
        </ul>
        <li>Install Django with:</li>
        <table id="207" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy207}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str207}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>

        <li>
          Create a new Django project and name it <code>project1</code>:
        </li>
        <table id="208" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy208}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str208}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Move into the project directory with:</li>
        <table id="209" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy209}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str209}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Migrate your “changes” with this command:</li>
        <table id="210" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy210}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str210}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Then start the development server to ensure that everything is working
          properly with:
        </li>
        <table id="211" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy211}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str211}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Copy this URL: http://127.0.0.1:8000 and open it in any browser of
          your choice. You should be able to see the Django Wellcome page.
        </li>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Setting up the react frontend
      </h1>
      <ol className="list-decimal">
        <li>
          Next, create the frontend react application in the current directory{" "}
          <code>project1</code> that contains the <code>manage.py</code> file
          with:
        </li>
        <table id="212" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy212}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str212}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>or:</li>
        </ul>
        <table id="213" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy213}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str213}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Move into the frontend directory with:</li>
        <table id="214" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy214}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str214}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Start the frontend application by running:</li>
        <table id="215" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy215}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str215}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li className="text-b0ld">
            You should see the default react application page in your browser
            now; if you cannot see it open this link http://localhost:3000 in
            your browser.
          </li>
        </ul>
        <li>
          Build the package which the backend will make use of by running:
        </li>
        <table id="216" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy216}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str216}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Remove <code>/build</code> from the gitignore file since the backend
          would need to make use of the <code>templates</code> and{" "}
          <code>staticfiles</code> in the build folder. Now let's head to the
          backend setup and connect it to the react application we just created.
        </li>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Installations
      </h1>
      <ol className="list-decimal">
        <li>Return to the frontend directory</li>
        <table id="319" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy319}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str319}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          npm install -g react-devtools tree eslint prettier react-scripts
          dotenv react-player typescript promise-polyfill @material-ui/core
          @material-ui/lab prop-types @material-ui/icons
        </li>
        <table id="320" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy320}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str320}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          You must install both react-router-dom and @types/react-router-dom as
          well as both rebass and @types/rebass while using react-typescript:
          npm install --save redux react-redux redux-thunk
          redux-devtools-extension @types/rebass rebass @heroicons/react
          react-intl vuera axios @types/react@latest chokidar string-strip-html
          react-social-login-buttons emailjs-com react-paginate
          react-syntax-highlighter web-vitals @types/react-dom @emailjs/browser
          react-router-dom @types/react-router-dom (@types/ because we are using
          Typescript)
        </li>
        <table id="321" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy321}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str321}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          npm install @paypal/react-paypal-js react-textarea-autosize
          react-icons react-easy-swipe classnames react react-dom
          react-hook-form @headlessui/react luxon @chec/commerce.js
          @types/chec__commerce.js @stripe/react-stripe-js @stripe/stripe-js
          @types/prop-types @types/jest @types/react @types/styled-components
          @types/styled-system @types/styled-system__css
        </li>
        <table id="322" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy322}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str322}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          npm install -- reactjs-social-login react-copy-to-clipboard save
          supabase-comments-extension @supabase/ui @supabase/supabase-js
          react-query react-audio-player @paypal/paypal-js @tailwindcss/forms
          @types/uuid @chec/react-commercejs-hooks
        </li>
        <table id="323" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy323}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str323}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          npm i --save-dev @types/node @types/prop-types @types/luxon
          @testing-library/jest-dom @testing-library/user-event
          @testing-library/dom @testing-library/react
          @types/react-syntax-highlighter @types/react-copy-to-clipboard
          @tailwindcss/forms
        </li>
        <table id="325" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy325}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str325}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Interfacing the frontend application to the Django backend.
      </h1>
      <ol className="list-decimal">
        <li>Move back into the root folder:</li>
        <table id="217" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy217}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str217}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Make some changes to the <code>settings.py</code> file in the backend
          project file so that the Django backend can recognize the react
          application we created as the default frontend directory. Open up the{" "}
          <code>settings.py</code> file and make the following changes:
        </li>
        <ul className="list-disc">
          <li>Import 'os' at the top of the file</li>
        </ul>
        <table id="218" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy218}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str218}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            Then configure the TEMPLATES = [ directory by pointing it towards
            the build folder in our frontend react directory:<br></br>'DIRS':
            [os.path.join(BASE_DIR, 'frontend', 'build')],
          </li>
        </ul>
        <table id="219" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy219}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str219}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We need to configure the static files directory as well; add this line
          to the bottom of the page below the STATIC_URL line.
        </li>
        <table id="220" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy220}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str220}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Create a simple view (app) called <code>core</code> that will display
          our default react page.
        </li>
        <table id="221" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy221}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str221}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Add the new app "core" to the end of "INSTALLED APPS" section in your
          settings.py file: <code className="text-bold text-3xl">'core',</code>
        </li>
        <li>
          Open the ~/core/views.py file and create a simple function-based view
          that just renders our page.
        </li>
        <table id="222" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy222}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str222}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Then we map the created view to a URL in our urls.py file in the
          project1 folder: project1\project1\urls.py . We import the "front"
          view function from the core app and we map it to the default URL " ".
        </li>
        <table id="223" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy223}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str223}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          {" "}
          To test the current state of the application again, make sure you are
          at the frontend (cd project1/frontend) and run:
        </li>
        <table id="316x2" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy316}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str316}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          then return to the project1 directory that contains the manage.py file
        </li>
        <table id="317x2" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy317}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str317}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Run the server - activate the virtual environment from the root folder
          (.\env\Scripts\activate), if not already activated, cd project1 and
          run:
        </li>
        <table id="224" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy224}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str224}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>Reload the page in your browser and observe the following:</li>
        <ul className="list-disc">
          <li>
            You see the <code>REACT</code> page we saw earlier but the URL is
            now http://127.0.0.1:8000.
          </li>
        </ul>
        <ul className="list-disc">
          <li>
            We have successfully connected our Django backend to a react
            frontend.
          </li>
          <li>
            In index.html comment out '&lt;link rel="icon"
            href="%PUBLIC_URL%/favicon.ico" /&gt;' and '&lt;link rel="manifest"
            href="%PUBLIC_URL%/manifest.json" /&gt;'. Then insert '&lt;link
            rel="icon" href="/static/images/favicon.ico" /&gt;' and '&lt;link
            rel="manifest" href="/static/images/manifest.json" /&gt;'
            respectively so that the favicon and manifest will be loaded from
            the static folder.
          </li>
        </ul>
        <ul className="list-disc">
          <li>
            You will need the Django REST framework to create the APIs the react
            frontend application will make use of to get backend data.
          </li>
        </ul>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Note
      </h1>
      <ol className="list-decimal">
        <li>
          You can create your frontend directory outside the Django directory.
          In that case, you'll need to get the path that points to the overall
          base directory that will hold both your backend and frontend
          directories. Add this line below the BASEDIR variable at the top of
          the settings.py file:
        </li>
        <SyntaxHighLighter language="javascript" style={dracula}>
          {"REAL_BASE_DIR = Path(__file__).resolve().parent.parent.parent"}
        </SyntaxHighLighter>
        <p>to give:</p>
        <SyntaxHighLighter language="javascript" style={dracula}>
          {
            "import os\nfrom pathlib import Path\n\n# Build paths inside the project like this: BASE_DIR / 'subdir'.\nBASE_DIR = Path(__file__).resolve().parent.parent\n\n# Get the overall base directory path\nREAL_BASE_DIR = Path(__file__).resolve().parent.parent.parent"
          }
        </SyntaxHighLighter>
        <li>
          Next, the new variable REAL_BASE_DIR will be used in the Templates and
          Staticfiles sections.
        </li>
        <p>
          Templates: 'DIRS': [os.path.join(REAL_BASE_DIR, 'frontend', 'build')],
        </p>
        <SyntaxHighLighter language="javascript" style={dracula}>
          {
            "TEMPLATES = [\n    {\n        'BACKEND': 'django.template.backends.django.DjangoTemplates', \n        'DIRS': [os.path.join(REAL_BASE_DIR, 'frontend', 'build')], \n        'APP_DIRS': True, \n        'OPTIONS': {\n            'context_processors': [\n                'django.template.context_processors.debug', \n                'django.template.context_processors.request', \n                'django.contrib.auth.context_processors.auth', \n                'django.contrib.messages.context_processors.messages', \n            ], \n        },\n    },\n]"
          }
        </SyntaxHighLighter>
        <p>
          Staticfiles: STATICFILES_DIRS = [os.path.join(REAL_BASE_DIR,
          'frontend', 'build', 'static')]
        </p>
        <SyntaxHighLighter language="javascript" style={dracula}>
          {
            "STATIC_URL = 'static/'\n\n STATICFILES_DIRS = [os.path.join(REAL_BASE_DIR, 'frontend', 'build', 'static'), \n]"
          }
        </SyntaxHighLighter>
        <ul className="list-disc">
          <li>
            This will ensure that Django searches for templates and static files
            in your frontend folder which is outside the Django directory. So
            you can create your project by using any of the two methods above.
          </li>
        </ul>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Building a REST API with Django REST Framework
      </h1>
      <ol className="list-decimal">
        <li>
          To Create Api endpoints, you should still be in the project1
          directory. If not, navigate to the directory.
        </li>
        <table id="225" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy225}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str225}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Please ensure you are in this folder with the manage.py file and
          install cors-headers and Django REST framework - a powerful and
          flexible toolkit for building Web APIs
        </li>
        <table id="226" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy226}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str226}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          In settings.py, add the following to INSTALLED_APPS: 'rest_framework',
          'corsheaders', If prompted to install autopep, click Yes to initiate{" "}
          <code>-m pip install -U autopep8</code>. Then add the
          'corsheaders.middleware.CorsMiddleware', from the previously installed
          CORS package to the MIDDLEWARE setting. Again because the React
          development server will be running at http://localhost:3000, we can
          add CORS_ORIGIN_ALLOW_ALL = False and CORS_ORIGIN_WHITELIST =
          ['https://localhost:3000',] anywhere in settings.py file.
        </li>
        <table id="332b" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy332b}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str332b}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>~/core/models.py - create the models</li>
        <table id="332c" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy332c}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str332c}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          ~/core/serializers.py: Create a new file serializers.py inside the app
          directory "core". This will contain the serializer that will be
          responsible for converting the model into data types understandable by
          javascript and the react framework:
        </li>
        <table id="029" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy029}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str029}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          <li>
            Here we import the serializers class from the installed Django REST
            framework package and also the Notes model created earlier. Then we
            declare the fields of the model that we want to have their data
            converted. If you have a model with several fields and you want to
            serialize all; you can simply add the line below in place of the
            fields line above.
          </li>
        </ul>
        <table id="030" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy030}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str030}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Finally, to complete the backend setup, we need to update the
          ~\project1\core\views.py file. Add these import lines to the top of
          the file.
        </li>
        <table id="031" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy031}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str031}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We'll make use of function-based views with the api_view decorator.
          This will allow us to declare the method type. By default only the GET
          method is allowed so we have to specify the POST and DELETE methods
          that we need. Directly below the previous front view, we'll create the
          note view with the api_view decorator. This view will handle the GET
          and POST methods so we have to add it to the decorator as well.
        </li>
        <table id="032" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy032}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str032}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          What we are doing here is to check for the type of request method and
          if it is a get request method we query the database to retrieve all
          the available notes and then we serialize the data received from the
          database. The many=True flag is being used here because we are getting
          a list of objects from the database and not just an object instance.
          Then we return the serialized data to the frontend for display.
        </ul>
        <ul className="list-disc">
          However, if the request method is a post method; we deserialize the
          data submitted from the front end and we check to see if all the data
          is valid with is_valid method before accessing and storing the data in
          the database. We then return a successful status message to the
          frontend without any data. You'll see the reason for this when we
          start working on the front end.
        </ul>
        <li>
          Next, we create the note_detail view. This view will handle the DELETE
          method so we will include it in the api_view decorator.
        </li>
        <table id="033" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy033}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str033}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">
          Here we are passing primary key field(pk) together with the request to
          the note_detail function as we need to add the primary key to the
          database query so we can get the particular note to be deleted. Once
          the note with the specified primary key has been retrieved
          successfully we check for the method type; if it is DELETE, that
          particular note is deleted from the database. We have finished
          creating the views, if you followed all the steps above your views.py
          file should look like this:
        </ul>
        <table id="034" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy034}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str034}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We need to import the new view functions from the core app into the
          ~\project1\project1\urls.py file. We will just add this new line to
          the existing ones.
        </li>
        <table id="035" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy035}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str035}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>and then map them to various urls.</li>
        <table id="036" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy036}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str036}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc">Your urls.py file should look like this </ul>
        <table id="037" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy037}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str037}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          We have finished up the API and backend setup. To test this, we
          migrate the changes we made to the models.py file into the database
          schema (cd project1 first if you are not at the directory).
        </li>
        <table id="038" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy038}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str038}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="039" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy039}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str039}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>and then we run the application with</li>
        <table id="040" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy040}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str040}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          You should still see the default react page. Clck NotesApp menu and
          then the link: Take a Note to go to http://127.0.0.1:8000/notes/.
          You'll see the Django REST framework browsable API. Paste the data
          below in the title and content boxes. This will be the format of the
          POST data that will be sent from the front end.
        </li>
        <p>Content:</p>
        <table id="041b" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy041b}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str041b}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Title:</p>
        <table id="041a" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy041a}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str041a}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Click on the Add button and you'll see the new POST data. Voila! You
          have successfully executed the POST and GET methods. We have confirmed
          that the API endpoints (GET, POST, DELETE) are working as desired.{" "}
        </li>
        <li>
          Let's also test the DELETE method. Click on the DELETE button of a
          note. You'll discover that the note created has been deleted.
        </li>
        <li>
          Note: Function-based views with api_view decorators were used for this
          tutorial for simplicity purposes. You can also choose to make use of
          viewsets which will handle all the various methods GET , POST , PUT ,
          DELETE without you having to state them as we did with the api_view
          decorator. You can read more about viewsets{" "}
          <a href="https://www.django-rest-framework.org/api-guide/viewsets/">
            here
          </a>
        </li>
        <li>
          Bonus: To disable the Django REST framework browsable API view so
          users cant use it to interact with the database. Add this line to your
          settings.py file.
        </li>
        <table id="318x1" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy318}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str318}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          You may also run the frontend with{" "}
          <code>~\DjangoReactTT\project1\frontend&lt;npm start</code> because of
          CORS_ORIGIN_WHITELIST = ['https://localhost:3000',]
        </li>
      </ol>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Styling with Tailwind
      </h1>
      <ol className="list-decimal">
        <li>
          In our application, Tailwind is already set up as an alternative to
          Bootstrap. In VS Code, install Tailwind Intellisense extension.
        </li>
        <li>Update the Following Lines in package.json with the code below:</li>
        <pre>{str331a}</pre>
        <table id="331" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy331}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str331}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          In the styles folder, add a file: output.css (Leave this Output.css
          file empty because it will be taken care of by Postcss created at
          setup).
        </li>
        <li>
          BrowserRouter keeps the UI in sync with the URL using the HTML5
          history API. In index.tsx, insert the import BrowserRouter from
          "react-router-dom";
        </li>
        <li>
          <span className="py-2 text-white bg-teal-900">and replace</span>{" "}
          <pre>ReactDOM.render(</pre>
          <pre> &lt;React.StrictMode&gt;</pre>
          <pre> &lt;App /&gt;</pre>
          <pre>&lt;/React.StrictMode&gt;,</pre>{" "}
          <span className="py-2 text-white bg-teal-900">with</span>{" "}
          <pre>ReactDOM.render(</pre>
          <pre> &lt;BrowserRouter&gt;</pre>
          <pre> &lt;App /&gt;</pre>
          <pre>&lt;/BrowserRouter&gt;,</pre>
        </li>
        <li>
          Copy and paste the following code to replace the existing one in
          index.tsx
        </li>
        <table id="228" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy228}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str228}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          Within the ~/frontend/src (source) folder, create seven folders (in
          addition to the existing styles and components folders) called
          customers, general, holygrail, notes, portfolio, screens and
          tutorials. To create a new folder in vs code such as ~/src/customers,
          right-click the src folder, select New Folder, type customers and
          press Enter key. Repeat for the other folders. Then create new .tsx
          files (in addition to the Wellcome.tsx file created previously) as
          shown below. To create a new file in VS Code such as
          ~/src/crm/Wellcome.tsx, right-click the ~/src/components folder,
          select New File, type Wellcome.tsx and press Enter key. This opens
          Wellcome.tsx file in the Workplace of VS Code. You may enter the
          shortcut: rfce to insert a React Functional Component Export template:
        </li>
        <SyntaxHighLighter language="javascript" style={dracula}>
          {
            "frontend/\n    └── src/\n         └── components/\n            └── Wellcome.tsx\n         └── customers/\n         └── general/\n            └── About.tsx\n            └── Carousel.tsx\n            └── CarouselData.tsx\n            └── CommentBox.tsx\n            └── Contact.tsx\n            └── Footer.tsx\n            └── Header.tsx\n            └── UsefulLinks.tsx\n        └── holygrail/\n            └── Navbar.tsx\n            └── NavbarBottom.tsx\n            └── NavbarLeft.tsx\n            └── NavbarRight.tsx\n        └── notes/\n        └── portfolio/\n            └── PortfolioData.tsx\n            └── Projects.tsx\n            └── Skills.tsx\n            └── Testimonials.tsx\n        └── screens/\n            └── HomeScreen.tsx\n        └── styles/\n        └── tutorials/\n            └── Tutor1.tsx"
          }
        </SyntaxHighLighter>
        <li>
          Now let us create our Homepage with the following copy and paste
          codes. We will discuss them later! We will use the Holy Grail Layout
          with rebass. The holy grail refers to a web page layout which has
          multiple, equal height columns that are defined with style sheets. It
          is commonly desired and implemented, but for many years, the various
          ways in which it could be implemented with the current technologies
          all had drawbacks. Because of this, finding an optimal implementation
          was likened to searching for the elusive Holy Grail. The format is as
          follows:
        </li>
        <SyntaxHighLighter language="javascript" style={dracula}>
          {
            'import React from "react";\nimport { Box, Flex } from "rebass";\n\n/* const fn = () => { ... };\nexport default fn; */\n\nexport default (props) => (\n  <Flex\n    sx={{\n      flexDirection: "column",\n      minHeight: "100vh",\n    }}\n  >\n    <Box>Header</Box>\n    <Flex\n      sx={{\n        flex: 1,\n        flexDirection: ["column", "row"],\n      }}\n    >\n      <Box\n        sx={{\n          flex: 1,\n          minWidth: 0,\n        }}\n      >\n        Main Content\n      </Box>\n      <Box\n        sx={{\n          flexBasis: ["auto", 64],\n          order: -1,\n        }}\n      >\n        Nav\n      </Box>\n      <Box\n        sx={{\n          flexBasis: ["auto", 64],\n        }}\n      >\n        Ads\n      </Box>\n    </Flex>\n    <Box>Footer</Box>\n  </Flex>\n);'
          }
        </SyntaxHighLighter>
        <li>In ~src/styles/tailwind.css add css for the holygrail:</li>
        <table id="227" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy227}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str227}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          The benefit of using React is that after creating each React component
          and exporting it from that file with export default, we can nest child
          components in parent components and parent components in grandparent
          components. Finally, we will import each 'final' component in App.js:
          project1\frontend\src\App.tsx
        </li>
        <table id="229" className="mb-4 border-4 border-teal-200 ...">
          <thead>
            <tr>
              <th>{copy229}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str229}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
        <li>
          To recreate this website, download a copy of the template whose
          starter you have just created:
          <ol className="list-decimal">
            <li>
              The [DjangoReactTT] folder contain all the contents of the website
              project.
            </li>
            <li>
              Unzip the downloaded template or folder to any location you
              desire.
            </li>
            <li>
              Open the [DjangoReactTT] folder in a code editor of your choice,
              such as Visual Studio Code.
            </li>
            <li>Create your environment - with: [python -m venv env]</li>
            <li>Activate it with [./env/Scripts/activate]</li>
            <li>
              Navigate to the [project1] base folder that contains the
              requirements.txt file with [cd project1]
            </li>
            <li>
              Then install all requirements with [pip install -r
              requirements.txt]
            </li>
            <li>
              If you get a [corsheaders] module not found error, install it with
              [python -m pip install django-cors-headers]
            </li>
            <li>Make migrations with [python manage.py makemigrations]</li>
            <li>Then migrate changes with [python manage.py migrate]</li>
            <li>Navigate to the frontend folder with [cd frontend]</li>
            <li>
              Then install and re-create missing [node_modules] directory with
              [npm install]
            </li>
            <li>Build the files with [npm run build]</li>
            <li>
              View and test the application on port 3000 with [npm run start]
            </li>
            <li>Then navigate back to the root directory with [cd ..]</li>
            <li>
              Run the code in development mode with [python manage.py runserver]
            </li>
            <li>
              Then open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to view
              and test the application in the browser.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default Tutor2;
