import { Stack } from "@mui/material";
import HomeServices from "./components/services";
import HomeBridge from "./components/bridge";

export default function HomePage() {
  return (
    <Stack spacing={2}>
      <HomeServices />
      <HomeBridge />
    </Stack>
  );
}
