import logo from "./logo.svg";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import getLangCookie from "./methods/cookies/getLangCookie";
import axios from "axios";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import ArTranslation from "./translate/ArTranslation";
import EnTranslation from "./translate/EnTranslation";
import { useContext, useMemo } from "react";
import { LangContext } from "./context/LangContext";
import "./App.css";
import { Button } from "@mui/material";

// TODO:: Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
// TODO::define current language
const currentLang = getLangCookie();
axios.defaults.headers.common["from"] = "website";
axios.defaults.headers.common["lang"] = currentLang === "ar" ? "ar" : "en";
// TODO::config react18inext
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: EnTranslation },
    ar: { translation: ArTranslation },
  },
  lng: currentLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function App() {
  // declare and define component state and variables
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  let { t } = useTranslation();

  // TODO::APP Component
  const AppComponent = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("welcome")}</p>
        <Button
          variant="contained"
          onClick={() => langContext.changeLang(lang == "ar" ? "en" : "ar")}
        >
          Change Language to {lang == "ar" ? "EN" : "AR"}
        </Button>
      </header>
    </div>
  );

  const render = useMemo(() => {
    switch (lang) {
      case "ar":
        return (
          <CacheProvider value={cacheRtl}>
            <AppComponent />
          </CacheProvider>
        );
      default:
        return <AppComponent />;
    }
  }, [lang]);

  // return component ui.
  return render;
}

export default App;
