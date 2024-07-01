import { Stack } from "@mui/material";
import NavbarLink from "../NavbarLink";
import { useTranslation } from "react-i18next";

export default function DesktopMenu() {
  // declare and define state and variables
  let { t } = useTranslation();

  // return component ui
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={1}
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <NavbarLink text={t("navbar.links.home")} href="/" />
      <NavbarLink text={t("navbar.links.about")} href="/about" />
      <NavbarLink text={t("navbar.links.services")} href="/services" />
      <NavbarLink text={t("navbar.links.contact")} href="/contact" />
    </Stack>
  );
}
