import { Button } from "@mui/material";
import { useContext } from "react";
import { ConstantsContext } from "../../context/ConstantsContext";

export default function MainButton(props: PropsType) {
  // TODO::declare and define component state and variables
  const constContext = useContext(ConstantsContext);
  
  // * return component ui.
  return (
    <Button
      variant={props.variant ?? "contained"}
      color={props.color ?? "primary"}
      sx={{
        borderRadius: "25px",
        padding: "0.6rem 1.8rem",
        textTransform: "none",
        fontFamily: constContext.mediumFont,
      }}
      onClick={() => props.handleClick()}
    >
      {props.text}
    </Button>
  );
}

type PropsType = {
  text: string;
  handleClick: () => void;
  variant?: "text" | "contained" | "outlined";
  color?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
};
