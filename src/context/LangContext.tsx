import { useState, createContext, useEffect } from "react";
import { changeLanguage } from "i18next";
import axios from "axios";
import getLangCookie from "../methods/cookies/getLangCookie";
import setCookie from "../methods/cookies/setCookie";
import { LanguagesType } from "../types/Language";

// TODO::declare and define helper variables
const currentLang = getLangCookie();

// TODO::create langContext
export const LangContext = createContext<LangContextType>({
  lang: () => currentLang,
  changeLang: () => {},
});

// TODO::declare context provider
function LangContextProvider({ children }: PropsType) {
  // * declare and define state and variables
  const [language, setLanguage] = useState<LanguagesType>(currentLang);

  // * handle direction of page according current language
  useEffect(() => {
    if (language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.style.fontFamily =
        "ZanjabeelBold,ZanjabeelMedium,ZanjabeelRegular, sans-serif";
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.style.fontFamily =
        "GeistBold,GeistMedium,GeistThin, sans-serif";
    }

    document.documentElement.setAttribute("lang", language);
  }, [language]);
  // * declare and define helpers methods
  function lang(): string {
    return language;
  }
  function changeLang(lang: LanguagesType) {
    changeLanguage(lang);
    setLanguage(lang);
    setCookie("lang", lang, 100);
    axios.defaults.headers.common["lang"] = lang === "ar" ? "ar" : "en";
  }

  // * return component ui
  return (
    <LangContext.Provider key={language} value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
}

export default LangContextProvider;

// TODO::declare and define types
type LangContextType = {
  lang: () => string;
  changeLang: (lang: LanguagesType) => void;
};

type PropsType = { children: React.ReactNode };
