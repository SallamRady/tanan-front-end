import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import BgImg from "../../../../assets/images/contactSectionBG.jpeg";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { useTranslation } from "react-i18next";

export default function ContactUsSection() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();

  // return component ui.
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${BgImg})`,
        height: "46rem",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Stack spacing={2} ml={18} width={"55%"}>
        <Typography variant="body1" fontSize={"3rem"} fontWeight={700}>
          {t("home.contact.question")}{" "}
          <span style={{ fontWeight: "lighter" }}>
            {t("home.contact.contact")}
          </span>
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <AddIcCallIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="+966 50 588 2911" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DraftsOutlinedIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="yahala@tannan.com" />
          </ListItem>
        </List>
      </Stack>
    </div>
  );
}
