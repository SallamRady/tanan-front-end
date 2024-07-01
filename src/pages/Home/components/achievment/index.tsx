import { Box, Grid, Stack } from "@mui/material";
import homeBgVideo from "../../../../assets/videos/BgVideo.mp4";
import AchievmentItem from "./AchievmentItem";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function AchievmentSection() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();
  const [hide, setHide] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  // control show element when scroll
  useEffect(() => {
    const getYCoordinate = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (hide && rect.top <= 550) {
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
    <div
      ref={elementRef}
      style={{
        position: "relative",
        width: "100%",
        height: "360px",
        margin: 0,
        padding: 0,
        transition: "all 1s ease-in-out",
        opacity: hide ? 0 : 1,
      }}
    >
      <video
        src={homeBgVideo}
        autoPlay
        loop
        muted
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.9)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          width={"80%"}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: {
              xs: "row",
              md: "row",
            },
            flexWrap: "wrap",
          }}
        >
          <Grid container>
            <Grid item xs={6} md={3}>
              <AchievmentItem
                value={15}
                text={t("home.achievements.experience")}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <AchievmentItem
                value={420}
                text={t("home.achievements.customers")}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <AchievmentItem
                value={200}
                text={t("home.achievements.reviews")}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <AchievmentItem
                value={310}
                text={t("home.achievements.appreciation")}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </div>
  );
}
