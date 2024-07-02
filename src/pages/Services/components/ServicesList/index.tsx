import { Stack } from "@mui/material";
import { SetStateAction, useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import SingleService from "./SingleService";

export default function ServicesListSection(props: PropsType) {
  // TODO::declare and define component state and variables
  const { ServicesDataList } = useContext(ConstantsContext);

  // * Return Component UI.
  return (
    <Stack alignItems={'center'} sx={{ flexDirection: { xs: "column", md: "row" } }}>
      {ServicesDataList.map((s) => (
        <SingleService
          key={s.id}
          service={s}
          activeServiceId={props.activeServiceId}
          setActiveServiceId={props.setActiveServiceId}
        />
      ))}
    </Stack>
  );
}

type PropsType = {
  activeServiceId: string;
  setActiveServiceId: React.Dispatch<SetStateAction<string>>;
};
