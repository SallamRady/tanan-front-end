import { Box, Stack, Typography } from "@mui/material";
import ArrowDown from "./Arrow";

export default function HomeBridge() {
  return (
    <Stack alignItems={"center"} width={"100%"} height={"447px"}>
      <ArrowDown text="React" />
      <ArrowDown text="Affect" />
      <ArrowDown text="Convince" />
      <ArrowDown text="Sell" />
    </Stack>
  );
}
