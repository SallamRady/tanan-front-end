import { Button, Stack } from "@mui/material";
import { useContext } from "react";
import { LangContext } from "../../../../../context/LangContext";
import MainButton from "../../../../MainButton";
import { useTranslation } from "react-i18next";
import { ConstantsContext } from "../../../../../context/ConstantsContext";
import { useLocation } from "react-router-dom";
import redirectToWhatsApp from "../../../../../methods/social/RedirectToWhatsApp";

export default function NavbarDesktopActions() {
  // TODO::declare and define component state and variables
  const location = useLocation();
  const langContext = useContext(LangContext);
  const constContext = useContext(ConstantsContext);
  const lang = langContext.lang();
  let { t } = useTranslation();

  // TODO::declare and define helper methods
  // * return our component ui.
  return (
    <Stack
      direction={"row"}
      spacing={1}
      alignItems={"center"}
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <Button
        variant="text"
        sx={{
          fontFamily: constContext.mediumFont,
          fontWeight: 300,
          color: "inherit",
          textTransform: "none",
        }}
        onClick={() => langContext.changeLang(lang === "ar" ? "en" : "ar")}
      >
        {lang === "ar" ? "En" : "Ar"}
      </Button>
      <MainButton
        text={t("navbar.actions.FreeConsultation")}
        variant={location.pathname === "/contact" ? "outlined" : "contained"}
        color={location.pathname === "/contact" ? "inherit" : "primary"}
        handleClick={() => redirectToWhatsApp()}
      />
    </Stack>
  );
}
