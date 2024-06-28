import {
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterList() {
  // declare and define state and variables
  let { t } = useTranslation();

  // return component ui
  return (
    <>
      <Stack color={"#fff"} sx={{ mx: 3 }}>
        <Typography
          variant="body1"
          color={"#6F6F6F"}
          fontSize={"1rem"}
          fontWeight={300}
        >
          {t("footer.links.0.title")}
        </Typography>
        <List disablePadding>
          <ListItemButton
            component={Link}
            to={t("footer.links.0.links.0.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.0.links.0.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to={t("footer.links.0.links.1.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.0.links.1.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to={t("footer.links.0.links.2.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.0.links.2.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to={t("footer.links.0.links.3.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.0.links.3.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
        </List>
      </Stack>

      <Stack color={"#fff"} sx={{ mx: 3 }}>
        <Typography
          variant="body1"
          color={"#6F6F6F"}
          fontSize={"1rem"}
          fontWeight={300}
        >
          {t("footer.links.1.title")}
        </Typography>
        <List disablePadding>
          <ListItemButton
            component={Link}
            to={t("footer.links.1.links.0.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.1.links.0.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to={t("footer.links.1.links.1.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.1.links.1.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to={t("footer.links.1.links.2.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.1.links.2.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
        </List>
      </Stack>

      <Stack color={"#fff"} sx={{ mx: 3 }}>
        <Typography
          variant="body1"
          color={"#6F6F6F"}
          fontSize={"1rem"}
          fontWeight={300}
        >
          {t("footer.links.2.title")}
        </Typography>
        <List disablePadding>
          <ListItemButton
            component={Link}
            to={t("footer.links.2.links.0.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.2.links.0.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to={t("footer.links.2.links.1.path")}
            sx={{ m: 0, p: 0 }}
          >
            <ListItemText
              primary={t("footer.links.2.links.1.text")}
              sx={{ fontWeight: 300, fontSize: "1rem" }}
            />
          </ListItemButton>
        </List>
      </Stack>
    </>
  );
}
