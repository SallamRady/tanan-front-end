import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import MainButton from "../../../../components/MainButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function InformationSection() {
  // todo::declare and define component state and variables
  const contsContext = useContext(ConstantsContext);
  const navigator = useNavigate();
  let { t } = useTranslation();

  // * return component ui.
  return (
    <Stack spacing={4} width={"100%"} p={5}>
      <Typography variant="h4" fontFamily={contsContext.boldFont}>
        {t("aboutPage.features.title")}
      </Typography>
      <Typography variant="body1" fontFamily={contsContext.fontRegular}>
        {t("aboutPage.features.statment")}
      </Typography>
      <MainButton
        variant="outlined"
        handleClick={() => navigator("/contact")}
        text={t("aboutPage.features.button")}
        fullWidth={false}
        width="234px"
      />
    </Stack>
  );
}
