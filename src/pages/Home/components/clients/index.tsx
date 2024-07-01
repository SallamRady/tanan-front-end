import { Grid, Stack, Typography } from "@mui/material";
import cImg1 from "../../../../assets/images/clients/c1.png";
import cImg2 from "../../../../assets/images/clients/c2.png";
import cImg3 from "../../../../assets/images/clients/c3.png";
import cImg4 from "../../../../assets/images/clients/c4.png";
import cImg5 from "../../../../assets/images/clients/c5.png";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useRef, useState } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";

export default function ClientsSection() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();
  const constContext = useContext(ConstantsContext);
  const [hide, setHide] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  // control show element when scroll
  useEffect(() => {
    const getYCoordinate = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (hide && rect.top <= 490) {
          setHide(false);
        } else {
          if (!hide) setHide(true);
        }
      }
    };

    // Get Y coordinate on component mount
    getYCoordinate();

    // Optionally, add an event listener to get Y coordinate on scroll
    window.addEventListener("scroll", getYCoordinate);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", getYCoordinate);
    };
  }, []);

  // return component ui.
  return (
    <Stack
      ref={elementRef}
      spacing={3}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={{
        paddingY: "3rem",
        bgcolor: "#8F65EB",
        width: "100%",
        color: "#fff",
        marginY: 0,
        transition: "all 1s ease-in-out",
        opacity: hide ? 0 : 1,
      }}
    >
      <Typography
        variant="h4"
        fontSize={"3rem"}
        fontWeight={900}
        sx={{
          fontFamily: constContext.boldFont,
        }}
      >
        {t("home.clients.title")}
      </Typography>
      <Typography
        variant="body1"
        fontSize={18}
        textAlign={"center"}
        fontFamily={constContext.mediumFont}
        sx={{ px: "2rem" }}
      >
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
        <Grid container>
          <Grid item xs={6} md={2.4}>
            <img src={cImg1} width={"175px"} height={"105px"} alt="clients" />
          </Grid>
          <Grid item xs={6} md={2.4}>
            <img src={cImg2} width={"175px"} height={"105px"} alt="clients" />
          </Grid>
          <Grid item xs={6} md={2.4}>
            <img src={cImg3} width={"175px"} height={"105px"} alt="clients" />
          </Grid>
          <Grid item xs={6} md={2.4}>
            <img src={cImg4} width={"175px"} height={"105px"} alt="clients" />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <img src={cImg5} width={"175px"} height={"105px"} alt="clients" />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
