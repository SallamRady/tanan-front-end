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
import { useContext, useEffect, useRef, useState } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";

export default function ContactUsSection() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();
  const constContext = useContext(ConstantsContext);
  const [hide, setHide] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  // control show element when scroll
  useEffect(() => {
    const getYCoordinate = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (hide && rect.top <= 570) {
          setHide(false);
        } else {
          if (!hide) setHide(true);
        }
      }
    };

    // Get Y coordinate on component mount
    getYCoordinate();

    // Optionally, add an event listener to get Y coordinate on scroll
    window.addEventListener("scroll", getYCoordinate);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", getYCoordinate);
    };
  }, []);

  // return component ui.
  return (
    <div
      ref={elementRef}
      style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${BgImg})`,
        height: "46rem",
        backgroundSize: "100% 100%",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        transition: "all 1s ease-in-out",
        opacity: hide ? 0 : 1,
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
            md: 22,
          },
        }}
      >
        <Typography
          variant="body1"
          fontSize={"2.7rem"}
          fontWeight={700}
          fontFamily={constContext.boldFont}
        >
          {t("home.contact.question")} <br />
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
