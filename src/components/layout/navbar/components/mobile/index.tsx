import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SetStateAction, useContext, useState } from "react";
import MobileMenu from "./MobileMenu";
import { LangContext } from "../../../../../context/LangContext";

export default function MobileNavbarView(props: PropsType) {
  // todo::declare and define component state and variables
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  const [open, setOpen] = useState(false);

  // todo::declare and define helper methods
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) props.setIsHovered(false);
  };

  // * return omponent ui
  return (
    <>
      <IconButton
        aria-label="open-side-bar"
        color="inherit"
        onClick={() => {
          toggleDrawer(true);
        }}
        sx={{
          marginTop: 3,
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        <MobileMenu toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}

type PropsType = {
  setIsHovered: React.Dispatch<SetStateAction<boolean>>;
};
