import { Stack } from "@mui/material";
import ListOfFooterLinksData from "../../../Constants/FooterLinksData";
import FooterList from "./FooterList";

export default function FooterLinks() {
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
      {ListOfFooterLinksData.map((list) => (
        <FooterList key={list.title} list={list} />
      ))}
    </Stack>
  );
}
