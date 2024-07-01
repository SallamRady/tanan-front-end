import { Stack } from "@mui/material";
import logo from "../../../assets/images/tananLogo.png";
import logo2 from "../../../assets/images/tananLogo2.png";
import NavbarDesktopView from "./components/Desktop";
import HomeVideoBG from "../../../pages/Home/components/VideoBG";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileNavbarView from "./components/mobile";
import AboutPageHeroSection from "../../../pages/AboutUs/components/HeroSection";

export default function MainNavbar() {
  // todo::declare and define component state and variables
  const navigator = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

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
        component={"div"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100%",
          marginTop: "50px",
          transition:
            "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),color 0.2s ease-in-out,background-color 0.5s ease-in-out",
          color: "#fff",
          ":hover": {
            backgroundColor: "#fff",
            transform: "translateY(-50px)",
            color: "#000",
          },
        }}
      >
        {/* logo */}
        <img
          src={isHovered ? logo2 : logo}
          alt="tanan logo"
          width={isHovered ? "75px" : "143px"}
          height={isHovered ? "34px" : "64px"}
          style={{
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            margin: isHovered ? "20px 38px" : "",
          }}
          onClick={handleLogoClick}
        />
        {/* Desktop Navbar */}
        <NavbarDesktopView />
        {/* Mobile Navbar */}
        <MobileNavbarView setIsHovered={setIsHovered} />
      </Stack>

      {/* Hero Section */}
      {location.pathname === "/" && <HomeVideoBG />}
      {location.pathname === "/about" && <AboutPageHeroSection />}
    </Stack>
  );
}
