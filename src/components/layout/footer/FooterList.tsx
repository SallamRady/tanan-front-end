import {
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FooterLinkListItemType } from "../../../Constants/FooterLinksData";

export default function FooterList(props: PropsType) {
  return (
    <Stack color={"#fff"} sx={{ mx: 3 }}>
      <Typography
        variant="body1"
        color={"#6F6F6F"}
        fontSize={"1rem"}
        fontWeight={300}
      >
        {props.list.title}
      </Typography>
      <List disablePadding>
        {props.list.links.map((link) => (
          <ListItemButton
            key={link.id}
            component={Link}
            to={link.path}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={link.text}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
        ))}
      </List>
    </Stack>
  );
}

type PropsType = {
  list: FooterLinkListItemType;
};
