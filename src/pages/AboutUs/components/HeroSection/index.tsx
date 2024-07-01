import { Box, Stack, Typography } from "@mui/material";
import bgImg from "../../../../assets/images/aboutPageBG.jpeg";
import { useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";

export default function AboutPageHeroSection() {
  // todo::declare and define component state and variables
  const constContext = useContext(ConstantsContext);
  // return component ui.
  return (
    <Box
      width={"100%"}
      height={"94vh"}
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
          fontSize={"2.5rem"}
          fontWeight={constContext.boldFont}
          color={"#fff"}
          sx={{
            ml: {
              xs: 2,
              md: 18,
            },
          }}
        >
          We are Tanan <br />
          Unlimited creative capabilities . . .
        </Typography>
      </Stack>
    </Box>
  );
}
