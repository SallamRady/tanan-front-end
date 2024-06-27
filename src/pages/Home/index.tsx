import { Stack } from "@mui/material";
import HomeServices from "./components/services";
import HomeBridge from "./components/bridge";
import ClientsSection from "./components/clients";
import AchievmentSection from "./components/achievment";
import ContactUsSection from "./components/ContactUs";

export default function HomePage() {
  return (
    <Stack spacing={2}>
      <HomeServices />
      <HomeBridge />
      <ClientsSection />
      <AchievmentSection />
      <ContactUsSection />
    </Stack>
  );
}
