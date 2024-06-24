import { Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export default function NavbarLink(props: PropsType) {
  // TODO::declare and define component state and variables
  const location = useLocation();
  const isActive = location.pathname === props.href;

  // return component ui
  return (
    <Button
      component={NavLink}
      to={props.href}
      sx={{
        fontWeight: isActive ? 700 : 300,
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
