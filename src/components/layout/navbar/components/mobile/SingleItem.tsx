import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function SingleMenuItem(props: PropsType) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => props.handleClick()}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItemButton>
    </ListItem>
  );
}

type PropsType = {
  text: string;
  icon: React.ReactNode;
  handleClick: () => void;
};
