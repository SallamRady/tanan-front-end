import { Box } from "@mui/material";
import homeBgVideo from "../../../assets/videos/BgVideo.mp4";

export default function HomeVideoBG() {
  return (
    <Box width={"100%"} height={"95vh"} position={"relative"}>
      {/* video */}
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
      {/* overlay layer on video */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.9)",
        }}
      ></Box>
    </Box>
  );
}
