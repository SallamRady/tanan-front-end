import { Stack } from "@mui/material";
import logo from "../../../assets/images/tananLogo.png";
import NavbarDesktopView from "./components/Desktop";
import HomeVideoBG from "../../../pages/Home/components/VideoBG";
import { useNavigate } from "react-router-dom";

export default function MainNavbar() {
  // todo::declare and define component state and variables
  const navigator = useNavigate();

  // todo::declare and define helper methods
  const handleLogoClick = () => {
    navigator("/");
  };

  // todo::return component ui.
  return (
    <Stack position={"relative"} m={0} p={0}>
      {/* Navbar */}
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        paddingY={2}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* logo */}
        <img
          src={logo}
          alt="tanan logo"
          width={"143px"}
          height={"64px"}
          style={{
            cursor: "pointer",
          }}
          onClick={handleLogoClick}
        />
        {/* Desktop Navbar */}
        <NavbarDesktopView />
      </Stack>

      {/* Hero Section */}
      <HomeVideoBG />
    </Stack>
  );
}
