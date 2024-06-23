import { Stack } from "@mui/material";
import logo from "../../../assets/images/tananLogo.png";
import NavbarDesktopView from "./components/Desktop";

export default function MainNavbar() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      padding={2}
    >
      {/* logo */}
      <img src={logo} alt="tanan logo" width={"143px"} height={"64px"} />
      {/* Desktop Navbar */}
      <NavbarDesktopView />
    </Stack>
  );
}
