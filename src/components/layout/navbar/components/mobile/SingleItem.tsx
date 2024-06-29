import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ConstantsContext } from "../../../../../context/ConstantsContext";
import { useContext } from "react";

export default function SingleMenuItem(props: PropsType) {
  // todo::declare and define component state and variables
  const constContext = useContext(ConstantsContext);

  // return component ui.
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => props.handleClick()}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText
          primary={props.text}
          sx={{ fontFamily: constContext.fontRegular }}
        />
      </ListItemButton>
    </ListItem>
  );
}

type PropsType = {
  text: string;
  icon: React.ReactNode;
  handleClick: () => void;
};
