import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import { useTranslation } from "react-i18next";

export default function AboutInformation() {
  // todo::declare and define component state and variable
  const constsContext = useContext(ConstantsContext);
  let { t } = useTranslation();

  // return component ui
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-around"}
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Stack sx={{ width: { xs: "100%", md: "400px" }, flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontFamily={constsContext.boldFont}
          sx={{
            height: "3rem",
            pl: 1,
            py: 4,
            backgroundColor: "#0a0410",
            color: "#fff",
          }}
        >
          {t("aboutPage.information.0.title")}
        </Typography>
        <Typography
          variant="body1"
          p={1}
          fontFamily={constsContext.fontRegular}
          color={"#fff"}
          sx={{
            minHeight: "11rem",
            bgcolor: "#8f65eb",
          }}
        >
          {t("aboutPage.information.0.text")}
        </Typography>
      </Stack>

      <Stack sx={{ width: { xs: "100%", md: "400px" }, flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontFamily={constsContext.boldFont}
          sx={{
            height: "3rem",
            pl: 1,
            py: 4,
            backgroundColor: "#0a0410",
            color: "#fff",
          }}
        >
          {t("aboutPage.information.1.title")}
        </Typography>
        <Typography
          variant="body1"
          p={1}
          fontFamily={constsContext.fontRegular}
          color={"#fff"}
          sx={{
            minHeight: "11rem",
            bgcolor: "#8f65eb",
          }}
        >
          {t("aboutPage.information.1.text")}
        </Typography>
      </Stack>

      <Stack sx={{ width: { xs: "100%", md: "400px" }, flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontFamily={constsContext.boldFont}
          sx={{
            height: "3rem",
            pl: 1,
            py: 4,
            backgroundColor: "#0a0410",
            color: "#fff",
          }}
        >
          {t("aboutPage.information.2.title")}
        </Typography>
        <Typography
          variant="body1"
          p={1}
          fontFamily={constsContext.fontRegular}
          color={"#fff"}
          sx={{
            minHeight: "11rem",
            bgcolor: "#8f65eb",
          }}
        >
          {t("aboutPage.information.2.text")}
        </Typography>
      </Stack>

      <Stack sx={{ width: { xs: "100%", md: "400px" }, flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontFamily={constsContext.boldFont}
          sx={{
            height: "3rem",
            pl: 1,
            py: 4,
            backgroundColor: "#0a0410",
            color: "#fff",
          }}
        >
          {t("aboutPage.information.3.title")}
        </Typography>
        <Typography
          variant="body1"
          p={1}
          fontFamily={constsContext.fontRegular}
          color={"#fff"}
          sx={{
            minHeight: "11rem",
            bgcolor: "#8f65eb",
          }}
        >
          {t("aboutPage.information.3.text")}
        </Typography>
      </Stack>
    </Stack>
  );
}
