import { Box, Stack } from "@mui/material";
import homeBgVideo from "../../../../assets/videos/BgVideo.mp4";
import AchievmentItem from "./AchievmentItem";
import { useTranslation } from "react-i18next";

export default function AchievmentSection() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();

  // return component ui.
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "360px",
        margin: 0,
        padding: 0,
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
              xs: "column",
              md: "row",
            },
          }}
        >
          <AchievmentItem value={15} text={t("home.achievements.experience")} />
          <AchievmentItem value={420} text={t("home.achievements.customers")} />
          <AchievmentItem value={200} text={t("home.achievements.reviews")} />
          <AchievmentItem
            value={310}
            text={t("home.achievements.appreciation")}
          />
        </Stack>
      </Box>
    </div>
  );
}
