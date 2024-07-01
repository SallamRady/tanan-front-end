import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import MainButton from "../../../../components/MainButton";

export default function InformationSection() {
  // todo::declare and define component state and variables
  const contsContext = useContext(ConstantsContext);

  // * return component ui.
  return (
    <Stack spacing={4} width={"100%"} p={5}>
      <Typography variant="h4" fontFamily={contsContext.boldFont}>
        What Makes Us Unique
      </Typography>
      <Typography variant="body1" fontFamily={contsContext.fontRegular}>
        We combine{" "}
        <span style={{ fontFamily: contsContext.mediumFont }}>
          Digital Marketing
        </span>{" "}
        and{" "}
        <span style={{ fontFamily: contsContext.mediumFont }}>
          Creative Content Production
        </span>{" "}
        to craft
        <span style={{ fontFamily: contsContext.mediumFont }}>
          Unique Content
        </span>{" "}
        for you.
      </Typography>
      <MainButton
        variant="outlined"
        handleClick={() => {}}
        text="Contact Us"
        fullWidth={false}
        width="234px"
      />
    </Stack>
  );
}
