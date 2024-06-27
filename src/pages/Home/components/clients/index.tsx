import { Stack, Typography } from "@mui/material";
import cImg1 from "../../../../assets/images/clients/c1.png";
import cImg2 from "../../../../assets/images/clients/c2.png";
import cImg3 from "../../../../assets/images/clients/c3.png";
import cImg4 from "../../../../assets/images/clients/c4.png";
import cImg5 from "../../../../assets/images/clients/c5.png";
import { useTranslation } from "react-i18next";

export default function ClientsSection() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();

  // return component ui.
  return (
    <Stack
      spacing={3}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={{
        paddingY: "3rem",
        bgcolor: "#8F65EB",
        width: "100%",
        color: "#fff",
        marginY: 0,
      }}
    >
      <Typography variant="h4" fontSize={"3rem"} fontWeight={800}>
        {t("home.clients.title")}
      </Typography>
      <Typography variant="body1" fontSize={18} textAlign={"center"}>
        {t("home.clients.statement")}
      </Typography>
      <Stack
        width={"80%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <img src={cImg1} width={"175px"} height={"105px"} alt="clients" />
        <img src={cImg2} width={"175px"} height={"105px"} alt="clients" />
        <img src={cImg3} width={"175px"} height={"105px"} alt="clients" />
        <img src={cImg4} width={"175px"} height={"105px"} alt="clients" />
        <img src={cImg5} width={"175px"} height={"105px"} alt="clients" />
      </Stack>
    </Stack>
  );
}
