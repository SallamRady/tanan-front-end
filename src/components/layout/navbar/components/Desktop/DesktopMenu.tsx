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
      <NavbarLink />
      <NavbarLink />
      <NavbarLink />
      <NavbarLink />
      <NavbarLink />
    </Stack>
  );
}
