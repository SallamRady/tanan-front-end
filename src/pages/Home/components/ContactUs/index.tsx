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
import { useContext } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";

export default function ContactUsSection() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();
  const constContext = useContext(ConstantsContext);

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
      <Stack
        spacing={2}
        sx={{
          width: {
            xs: "100%",
            md: "55%",
          },
          ml: {
            xs: 3,
            md: 18,
          },
        }}
      >
        <Typography
          variant="body1"
          fontSize={"2.7rem"}
          fontWeight={700}
          fontFamily={constContext.boldFont}
        >
          {t("home.contact.question")}{" "}
          <span
            style={{
              fontWeight: "lighter",
              fontFamily: constContext.fontRegular,
            }}
          >
            {t("home.contact.contact")}
          </span>
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <AddIcCallIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primary="+966 50 588 2911"
              primaryTypographyProps={{
                fontFamily: constContext.mediumFont,
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DraftsOutlinedIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              primary="yahala@tannan.com"
              primaryTypographyProps={{
                fontFamily: constContext.mediumFont,
              }}
            />
          </ListItem>
        </List>
      </Stack>
    </div>
  );
}
