import { Stack, Typography } from "@mui/material";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import { useContext } from "react";

export default function AchievmentItem(props: PropsType) {
  // TODO::declare and define our state and variables
  const constContext = useContext(ConstantsContext);

  // return ui.
  return (
    <Stack spacing={1} justifyContent={"center"} alignItems={"center"}>
      <Typography
        variant="body1"
        fontSize={"2rem"}
        fontWeight={700}
        fontFamily={constContext.boldFont}
      >
        {props.value}+
      </Typography>
      <Typography
        variant="body1"
        fontSize={"18px"}
        fontFamily={constContext.mediumFont}
      >
        {props.text}
      </Typography>
    </Stack>
  );
}

interface PropsType {
  value: number;
  text: string;
}
