import { useState } from "react";
import ServicesListSection from "./components/ServicesList";
import { Stack } from "@mui/material";
import ServiceNum1 from "./components/ServicesList/Service-1";
import ServiceNum2 from "./components/ServicesList/service-2";
import ServiceNum3 from "./components/ServicesList/service-3";

export default function ServicePage() {
  // TODO::declare and define component state and variables
  const [activeServiceId, setActiveServiceId] = useState("service-1");

  return (
    <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
      <Stack spacing={2} sx={{ p: 0 }} width={"90%"}>
        <ServicesListSection
          activeServiceId={activeServiceId}
          setActiveServiceId={setActiveServiceId}
        />
        {activeServiceId === "service-1" && <ServiceNum1 />}
        {activeServiceId === "service-2" && <ServiceNum2 />}
        {activeServiceId === "service-3" && <ServiceNum3 />}
      </Stack>
    </Stack>
  );
}
