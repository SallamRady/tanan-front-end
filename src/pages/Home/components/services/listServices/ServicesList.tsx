import { Box, Typography } from "@mui/material";
import { SetStateAction } from "react";
import ServicesDataList from "../../../../../Constants/Services";
import MainButton from "../../../../../components/MainButton";
import SingleServiceItem from "./SingleServiceItem";

export default function ServicesListIndex(props: PropsType) {
  return (
    <>
      {/* title */}
      <Typography variant="h2" fontSize={"4rem"} fontWeight={700} mt={5}>
        Services
      </Typography>
      {/* service list */}
      {ServicesDataList.map((s) => (
        <SingleServiceItem
          key={s.id}
          service={s}
          activeServiceId={props.activeServiceId}
          setActiveServiceId={props.setActiveServiceId}
        />
      ))}
      <Box my={4}>
        <MainButton text="View more" handleClick={() => {}} color="secondary" />
      </Box>
    </>
  );
}

type PropsType = {
  activeServiceId: string;
  setActiveServiceId: React.Dispatch<SetStateAction<string>>;
};
