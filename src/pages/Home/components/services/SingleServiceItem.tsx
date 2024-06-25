import { Typography } from "@mui/material";
import { SetStateAction } from "react";
import { ServiceType } from "../../../../types/Services";

export default function SingleServiceItem(props: PropsType) {
  // TODO::declare and define component state and variables
  const { service, activeServiceId, setActiveServiceId } = props;
  let isActive = activeServiceId === service.id;

  // TODO::declare and define component helper methods

  // TODO::return component ui.
  return (
    <Typography
      key={service.id}
      variant={`body${isActive ? "1" : "2"}`}
      fontSize={isActive ? 24 : 16}
      fontWeight={isActive ? 500 : 400}
      color={isActive ? "#000" : "#6F6F6F80"}
      sx={{ cursor: "pointer" }}
      onMouseEnter={() => setActiveServiceId(service.id)}
    >
      {service.text}
    </Typography>
  );
}

type PropsType = {
  service: ServiceType;
  activeServiceId: string;
  setActiveServiceId: React.Dispatch<SetStateAction<string>>;
};
