import { Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import { useContext } from "react";

export default function NavbarLink(props: PropsType) {
  // TODO::declare and define component state and variables
  const location = useLocation();
  const constContext = useContext(ConstantsContext);
  const isActive = location.pathname === props.href;

  // return component ui
  return (
    <Button
      component={NavLink}
      to={props.href}
      sx={{
        fontFamily: isActive ? constContext.boldFont : constContext.mediumFont,
        fontWeight: isActive ? 900 : 300,
        fontSize: isActive ? "16px" : "14px",
        color: "inherit",
        textTransform: "none",
      }}
    >
      {props.text}
    </Button>
  );
}

type PropsType = {
  text: string;
  href: string;
};
