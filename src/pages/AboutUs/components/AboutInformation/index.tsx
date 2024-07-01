import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";

export default function AboutInformation() {
  // todo::declare and define component state and variable
  const constsContext = useContext(ConstantsContext);

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
            backgroundColor: "#0a0410",
            color: "#fff",
          }}
        >
          Well known
        </Typography>
        <Typography
          variant="body1"
          px={1}
          fontFamily={constsContext.fontRegular}
          color={"#fff"}
          sx={{
            minHeight: "11rem",
            bgcolor: "#8f65eb",
          }}
        >
          We, at Tanan, are renowned for our seamless integration of creativity
          and profound expertise in digital marketing and creative content
          production. We provide solutions that guarantee you access.
        </Typography>
      </Stack>

      <Stack sx={{ width: { xs: "100%", md: "400px" }, flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontFamily={constsContext.boldFont}
          sx={{
            height: "3rem",
            pl: 1,
            backgroundColor: "#0a0410",
            color: "#fff",
          }}
        >
          Accumulated expertise
        </Typography>
        <Typography
          variant="body1"
          px={1}
          fontFamily={constsContext.fontRegular}
          color={"#fff"}
          sx={{
            minHeight: "11rem",
            bgcolor: "#8f65eb",
          }}
        >
          Our team brings together talents and capabilities to add value to our
          clients' businesses.
        </Typography>
      </Stack>

      <Stack sx={{ width: { xs: "100%", md: "400px" }, flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontFamily={constsContext.boldFont}
          sx={{
            height: "3rem",
            pl: 1,
            backgroundColor: "#0a0410",
            color: "#fff",
          }}
        >
          Depth and local insight
        </Typography>
        <Typography
          variant="body1"
          px={1}
          fontFamily={constsContext.fontRegular}
          color={"#fff"}
          sx={{
            minHeight: "11rem",
            bgcolor: "#8f65eb",
          }}
        >
          Blending authenticity with ambition to align with the Kingdom's Vision
          2030.
        </Typography>
      </Stack>

      <Stack sx={{ width: { xs: "100%", md: "400px" }, flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontFamily={constsContext.boldFont}
          sx={{
            height: "3rem",
            pl: 1,
            backgroundColor: "#0a0410",
            color: "#fff",
          }}
        >
          Close-knit relationships
        </Typography>
        <Typography
          variant="body1"
          px={1}
          fontFamily={constsContext.fontRegular}
          color={"#fff"}
          sx={{
            minHeight: "11rem",
            bgcolor: "#8f65eb",
          }}
        >
          Across the three sectors.
        </Typography>
      </Stack>
    </Stack>
  );
}
