import { Box, Button, Divider, List } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import SingleMenuItem from "./SingleItem";
import { useContext } from "react";
import { LangContext } from "../../../../../context/LangContext";
import { useNavigate } from "react-router-dom";

export default function MobileMenu(props: PropsType) {
  // todo::declare and define component state and variables
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  const navigator = useNavigate();
  let { t } = useTranslation();

  // * return out component ui.
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => props.toggleDrawer(false)}
    >
      <List>
        {/* links */}
        <SingleMenuItem
          handleClick={() => navigator("/")}
          text={t("navbar.links.home")}
          icon={<HomeIcon />}
        />
        <SingleMenuItem
          handleClick={() => navigator("/about")}
          text={t("navbar.links.about")}
          icon={<InfoIcon />}
        />
        <SingleMenuItem
          handleClick={() => navigator("/achievements")}
          text={t("navbar.links.achievements")}
          icon={<EmojiEventsIcon />}
        />
        <SingleMenuItem
          handleClick={() => navigator("/services")}
          text={t("navbar.links.services")}
          icon={<AutoAwesomeMosaicIcon />}
        />
        <SingleMenuItem
          handleClick={() => navigator("/contact")}
          text={t("navbar.links.contact")}
          icon={<ConnectWithoutContactIcon />}
        />
      </List>
      <Divider />
      <List>
        {/* actions */}
        <SingleMenuItem
          handleClick={() =>
            langContext.changeLang(lang === "ar" ? "en" : "ar")
          }
          text={lang === "ar" ? "English" : "Arabic"}
          icon={<TranslateIcon />}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "0",
            padding: "0.6rem 1.8rem",
            textTransform: "none",
          }}
          onClick={() => {}}
          fullWidth
        >
          {t("navbar.actions.FreeConsultation")}
        </Button>
      </List>
    </Box>
  );
}

type PropsType = {
  toggleDrawer: (newOpen: boolean) => void;
};
