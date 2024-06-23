import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavbarLink() {
  return (
    <Button component={NavLink} to="/about">
      About
    </Button>
  );
}
