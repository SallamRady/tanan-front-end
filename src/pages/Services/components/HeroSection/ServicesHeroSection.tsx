import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ConstantsContext } from "../../../../context/ConstantsContext";

export default function ServicesHeroSection() {
  // todo::declare and define component state and variables
  const constContext = useContext(ConstantsContext);
  let { t } = useTranslation();

  // return component ui.
  return (
    <Box
      width={"100%"}
      height={"40vh"}
      position={"relative"}
      bgcolor={"#0a0310"}
    >
      <Stack
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        justifyContent={"end"}
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
              md: 12,
            },
            mb: 4,
          }}
        >
          {t("servicesPage.statement")}
        </Typography>
      </Stack>
    </Box>
  );
}
