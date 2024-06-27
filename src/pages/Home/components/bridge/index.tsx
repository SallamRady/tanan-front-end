import { Stack } from "@mui/material";
import ArrowDown from "./Arrow";
import { useTranslation } from "react-i18next";

export default function HomeBridge() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();

  return (
    <Stack alignItems={"center"} width={"100%"} height={"447px"}>
      <ArrowDown text={t("home.bridge.react")} />
      <ArrowDown text={t("home.bridge.affect")} />
      <ArrowDown text={t("home.bridge.convince")} />
      <ArrowDown text={t("home.bridge.sell")} />
    </Stack>
  );
}
