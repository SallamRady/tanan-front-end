import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { LangContext } from "./LangContext";

// * create context
export const ConstantsContext = createContext<ConstantsContextType>({
  ServicesDataList: [],
  boldFont: "GeistBold",
  mediumFont: "GeistMedium",
  mediumRegular: "GeistThin",
});

export function ConstantsContextProvider({ children }: PropsType) {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();
  const langContext = useContext(LangContext);
  const lang = langContext.lang();

  let boldFont = lang === "ar" ? "ZanjabeelBold" : "GeistBold";
  let mediumFont = lang === "ar" ? "ZanjabeelMedium" : "GeistMedium";
  let mediumRegular = lang === "ar" ? "ZanjabeelRegular" : "GeistThin";

  const ServicesDataList = [
    { id: "service-1", text: t("home.services.service1") },
    { id: "service-2", text: t("home.services.service2") },
    { id: "service-3", text: t("home.services.service3") },
  ];

  // TODO::declare and define our helper methods

  return (
    <ConstantsContext.Provider
      value={{ ServicesDataList, boldFont, mediumFont, mediumRegular }}
    >
      {children}
    </ConstantsContext.Provider>
  );
}

// * declare and define needed types
type PropsType = {
  children: React.ReactNode;
};

type ConstantsContextType = {
  ServicesDataList: {
    id: string;
    text: string;
  }[];
  boldFont: string;
  mediumFont: string;
  mediumRegular: string;
};
