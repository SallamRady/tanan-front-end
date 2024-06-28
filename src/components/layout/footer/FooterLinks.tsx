import { Stack } from "@mui/material";
import ListOfFooterLinksData from "../../../Constants/FooterLinksData";
import FooterList from "./FooterList";
import { useTranslation } from "react-i18next";

export default function FooterLinks() {
  // declare and define state and variables
  let { t } = useTranslation();

  // return component ui
  return (
    <Stack
      justifyContent={"start"}
      sx={{
        bgcolor: "#07020B",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        width: {
          xs: "100%",
          md: "60%",
        },
      }}
    >
      {/* lists */}
      <FooterList />
    </Stack>
  );
}
