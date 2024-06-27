import { Stack } from "@mui/material";
import LogoAndSocialLinks from "./LogoAndSocialLinks";
import FooterLinks from "./FooterLinks";

export default function MainFooter() {
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-around"}
      sx={{
        bgcolor: "#07020B",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        paddingY: "5rem",
      }}
    >
      <LogoAndSocialLinks />
      <FooterLinks />
    </Stack>
  );
}
