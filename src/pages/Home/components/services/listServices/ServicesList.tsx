import { Box, Typography } from "@mui/material";
import { SetStateAction, useContext } from "react";
import MainButton from "../../../../../components/MainButton";
import SingleServiceItem from "./SingleServiceItem";
import { ConstantsContext } from "../../../../../context/ConstantsContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function ServicesListIndex(props: PropsType) {
  // TODO::declare and define component state and variables
  const { ServicesDataList } = useContext(ConstantsContext);
  const constContext = useContext(ConstantsContext);
  const navigator = useNavigate();
  let { t } = useTranslation();

  // TODO::declare and define component helper methods
  // TODO::return component ui.
  return (
    <>
      {/* title */}
      <Typography
        variant="h2"
        fontSize={"4rem"}
        fontWeight={700}
        mt={5}
        sx={{
          fontFamily: constContext.boldFont,
        }}
      >
        {t("home.services.services")}
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
        <MainButton
          text={t("buttons.viewMore")}
          handleClick={() => navigator("/services")}
          color="secondary"
        />
      </Box>
    </>
  );
}

type PropsType = {
  activeServiceId: string;
  setActiveServiceId: React.Dispatch<SetStateAction<string>>;
};
