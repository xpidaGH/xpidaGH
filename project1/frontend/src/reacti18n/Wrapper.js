import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../lang/en.json";
import Arabic from "../lang/ar.json";
import Bengali from "../lang/bn.json";
import Chinese from "../lang/zh.json";
import Dutch from "../lang/nl.json";
import French from "../lang/fr.json";
import German from "../lang/de.json";
import Hindi from "../lang/hi.json";
import Indonesian from "../lang/id.json";
import Italian from "../lang/it.json";
import Japanese from "../lang/ja.json";
import Marathi from "../lang/mr.json";
import Portuguese from "../lang/pt.json";
import Russian from "../lang/ru.json";
import Spanish from "../lang/es.json";
import Swahili from "../lang/sw.json";
import Tamil from "../lang/ta.json";
import Telugu from "../lang/te.json";
import Turkish from "../lang/tr.json";
import urdu from "../lang/ur.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;

switch (local) {
  case "ar":
    lang = Arabic;
    break;
  case "bn":
    lang = Bengali;
    break;
  case "zh":
    lang = Chinese;
    break;
  case "nl":
    lang = Dutch;
    break;
  case "fr":
    lang = French;
    break;
  case "de":
    lang = German;
    break;
  case "hi":
    lang = Hindi;
    break;
  case "id":
    lang = Indonesian;
    break;
  case "it":
    lang = Italian;
    break;
  case "ja":
    lang = Japanese;
    break;
  case "mr":
    lang = Marathi;
    break;
  case "pt":
    lang = Portuguese;
    break;
  case "ru":
    lang = Russian;
    break;
  case "es":
    lang = Spanish;
    break;
  case "sw":
    lang = Swahili;
    break;
  case "ta":
    lang = Tamil;
    break;
  case "te":
    lang = Telugu;
    break;
  case "tr":
    lang = Turkish;
    break;
  case "ur":
    lang = urdu;
    break;
  default:
    lang = English;
    break;
}
const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);

  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    switch (newLocale) {
      case "ar":
        setMessages(Arabic);
        break;
      case "bn":
        setMessages(Bengali);
        break;
      case "zh":
        setMessages(Chinese);
        break;
      case "nl":
        setMessages(Dutch);
        break;
      case "fr":
        setMessages(French);
        break;
      case "de":
        setMessages(German);
        break;
      case "hi":
        setMessages(Hindi);
        break;
      case "id":
        setMessages(Indonesian);
        break;
      case "it":
        setMessages(Italian);
        break;
      case "ja":
        setMessages(Japanese);
        break;
      case "mr":
        setMessages(Marathi);
        break;
      case "pt":
        setMessages(Portuguese);
        break;
      case "ru":
        setMessages(Russian);
        break;
      case "es":
        setMessages(Spanish);
        break;
      case "sw":
        setMessages(Swahili);
        break;
      case "ta":
        setMessages(Tamil);
        break;
      case "te":
        setMessages(Telugu);
        break;
      case "tr":
        setMessages(Turkish);
        break;
      case "ur":
        setMessages(urdu);
        break;
      default:
        setMessages(English);
        break;
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
