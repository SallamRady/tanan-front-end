import { Stack } from "@mui/material";
import NavbarLink from "../NavbarLink";

export default function DesktopMenu() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={1}
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      <NavbarLink text="Home" href="/" />
      <NavbarLink text="About us" href="/about" />
      <NavbarLink text="Achievements" href="/achievements" />
      <NavbarLink text="Services" href="/services" />
      <NavbarLink text="Contact us" href="/contact" />
    </Stack>
  );
}
