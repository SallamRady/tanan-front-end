import { SetStateAction, useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import { Typography } from "@mui/material";
import { ServiceType } from "../../../../types/Services";

export default function SingleService(props: PropsType) {
  // TODO::declare and define component state and variables
  const { service, activeServiceId, setActiveServiceId } = props;
  const constContext = useContext(ConstantsContext);
  let isActive = activeServiceId === service.id;

  // TODO::declare and define component helper methods

  // TODO::return component ui.
  return (
    <Typography
      key={service.id}
      variant={`body${isActive ? "1" : "2"}`}
      fontSize={isActive ? "1.5rem" : "1rem"}
      fontWeight={isActive ? 500 : 400}
      color={isActive ? "#000" : "#6F6F6F80"}
      sx={{
        cursor: "pointer",
        fontFamily: constContext.mediumFont,
        my: 1,
        mx: 2,
      }}
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
