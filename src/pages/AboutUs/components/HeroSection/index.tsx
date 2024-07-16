import { Box, Stack, Typography } from "@mui/material";
import bgImg from "../../../../assets/images/aboutPageBG.png";
import TImg from "../../../../assets/images/T-Letter.png";
import { useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import { useTranslation } from "react-i18next";

export default function AboutPageHeroSection() {
  // todo::declare and define component state and variables
  const constContext = useContext(ConstantsContext);
  let { t } = useTranslation();

  // return component ui.
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      position={"relative"}
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <Stack
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Typography
          variant="h2"
          fontSize={"2.3rem"}
          fontWeight={constContext.boldFont}
          color={"#fff"}
          sx={{
            ml: {
              xs: 2,
              md: 18,
            },
          }}
        >
          {t("aboutPage.heroStatment")} <br />
          <br />
          {t("aboutPage.heroStatment2")}
          <div className="AboutLoader"></div>
        </Typography>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          top: "29%",
          right: "10%",
          width: "30rem",
          height: "30rem",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <img src={TImg} width={"93%"} height={"90%"} alt="tanan letter" />
      </Box>
    </Box>
  );
}
