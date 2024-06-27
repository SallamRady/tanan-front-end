import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

// * create context
export const ConstantsContext = createContext<ConstantsContextType>({
  ServicesDataList: [],
});

export function ConstantsContextProvider({ children }: PropsType) {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();

  const ServicesDataList = [
    { id: "service-1", text: t("home.services.service1") },
    { id: "service-2", text: t("home.services.service2") },
    { id: "service-3", text: t("home.services.service3") },
  ];

  // TODO::declare and define our helper methods

  return (
    <ConstantsContext.Provider value={{ ServicesDataList }}>
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
};
