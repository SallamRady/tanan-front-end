import { Box, IconButton, Stack } from "@mui/material";
import logoImg from "../../../assets/images/tananLogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function LogoAndSocialLinks() {
  return (
    <Stack
      alignItems={"center"}
      sx={{
        width: {
          xs: "100%",
          md: "40%",
        },
      }}
    >
      <img src={logoImg} width={"260px"} height={"112"} alt="tanan" />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        width={"260px"}
      >
        <IconButton aria-label="twitter" sx={{ color: "#ff5b29" }}>
          <TwitterIcon />
        </IconButton>

        <IconButton aria-label="twitter" sx={{ color: "#ff5b29" }}>
          <FacebookIcon />
        </IconButton>

        <IconButton aria-label="twitter" sx={{ color: "#ff5b29" }}>
          <InstagramIcon />
        </IconButton>

        <IconButton aria-label="twitter" sx={{ color: "#ff5b29" }}>
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
