import { Button, Stack } from "@mui/material";
import { useContext } from "react";
import { LangContext } from "../../../../../context/LangContext";

export default function NavbarDesktopActions() {
  // TODO::declare and define component state and variables
  const langContext = useContext(LangContext);
  const lang = langContext.lang();

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
          sm: "flex",
        },
      }}
    >
      <Button
        variant="text"
        sx={{
          fontWeight: 300,
          color: "#fff",
          textTransform: "none",
        }}
        onClick={() => langContext.changeLang(lang === "ar" ? "en" : "ar")}
      >
        {lang === "ar" ? "En" : "Ar"}
      </Button>
      <Button variant="contained">Free consultation</Button>
    </Stack>
  );
}
