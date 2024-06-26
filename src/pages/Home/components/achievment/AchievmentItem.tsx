import { Stack, Typography } from "@mui/material";

export default function AchievmentItem(props: PropsType) {
  return (
    <Stack spacing={1} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="body1" fontSize={"2rem"} fontWeight={700}>
        {props.value}+
      </Typography>
      <Typography variant="body1" fontSize={"18px"}>
        {props.text}
      </Typography>
    </Stack>
  );
}

interface PropsType {
  value: number;
  text: string;
}
