import { Box, Stack } from "@mui/material";
import homeBgVideo from "../../../../assets/videos/BgVideo.mp4";
import AchievmentItem from "./AchievmentItem";

export default function AchievmentSection() {
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
          <AchievmentItem value={15} text="Years of experience" />
          <AchievmentItem value={420} text="Happy customers" />
          <AchievmentItem value={200} text="Positive reviews" />
          <AchievmentItem value={310} text="Customers appreciation" />
        </Stack>
      </Box>
    </div>
  );
}
