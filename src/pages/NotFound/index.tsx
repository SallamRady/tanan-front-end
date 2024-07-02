import { Box, Stack, Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export default function NotFoundPage() {
  return (
    <Box
      width={"100%"}
      height={"80vh"}
      position={"relative"}
      bgcolor={"#0a0310"}
    >
      <Stack
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#fff"}
      >
        <ReportProblemIcon color="error" sx={{ fontSize: "4rem" }} />
        <Typography variant="subtitle1" color={"error"}>
          404 - Not Found
        </Typography>
        <Typography variant="body1">
          Sorry, the page you are looking for does not exist.
        </Typography>
      </Stack>
    </Box>
  );
}
