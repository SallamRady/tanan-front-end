import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useRef, useState } from "react";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import redirectToWhatsApp from "../../../../methods/social/RedirectToWhatsApp";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useNavigate } from "react-router-dom";
import tiktokIcon from "../../../../assets/images/tiktok.png";
import "../../../../App.css";

export default function ContactUsSection() {
  // TODO::declare and define our state and variables
  let { t } = useTranslation();
  const constContext = useContext(ConstantsContext);
  const [hide, setHide] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const navigator = useNavigate();

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
        backgroundSize: "100% 100%",
        height: "43rem",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        transition: "all 1s ease-in-out",
        opacity: hide ? 0.1 : 1,
      }}
      className="HomeContactSection"
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
              primary="+966 50 781 0823"
              onClick={() => redirectToWhatsApp()}
              sx={{ cursor: "pointer" }}
              primaryTypographyProps={{
                fontFamily: constContext.mediumFont,
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DraftsOutlinedIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <Typography
              component={"a"}
              href="mailto:customersuccess@tanan.sa"
              variant="body2"
              fontFamily={constContext.mediumFont}
              sx={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              customersuccess@tanan.sa
            </Typography>
          </ListItem>
          <ListItem>
            <Stack direction={"row"} spacing={2} alignItems={'center'}>
              {/* Tiktok */}
              <Tooltip title="tiktok">
                <a
                  href="https://www.tiktok.com/@tanan_sa?_t=8oJyOUXxSTQ&_r=1"
                  target="_blank"
                >
                  <img
                    src={tiktokIcon}
                    alt="tiktok"
                    width={"45px"}
                    height={"45px"}
                    style={{
                      cursor: "pointer",
                      marginTop:1
                    }}
                  />
                </a>
              </Tooltip>
              {/* twitter X */}
              <Tooltip title="X">
                <a
                  target="_blank"
                  href={"https://x.com/tannan_sa"}
                  style={{
                    color: "#fff",
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <XIcon />
                </a>
              </Tooltip>
              {/* instgram */}
              <Tooltip title="Instagram">
                <a
                  target="_blank"
                  href={"https://x.com/tannan_sa"}
                  style={{
                    color: "#fff",
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InstagramIcon />
                </a>
              </Tooltip>
            </Stack>
          </ListItem>
        </List>
      </Stack>
    </div>
  );
}
