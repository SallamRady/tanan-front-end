import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import bgImg from "../../../../assets/images/contactPageBG.jpeg";
import redirectToWhatsApp from "../../../../methods/social/RedirectToWhatsApp";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import tiktokIcon from "../../../../assets/images/tiktok.png";

export default function ContactUsPageHeroSection() {
  // todo::declare and define component state and variables
  let { t } = useTranslation();
  const navigator = useNavigate();
  const constContext = useContext(ConstantsContext);

  // return component ui.
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Stack
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"start"}
        sx={{
          "::before": {
            content: `""`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover::before": {
            transform: "scale(1.1)",
          },
          pl: {
            xs: 3,
            md: 14,
            color: "#fff",
          },
        }}
      >
        <Stack sx={{ position: "relative", zIndex: 1 }}>
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
              <Stack direction={"row"} spacing={2}  alignItems={'center'}>
                {/* Tiktok */}
                <Tooltip title="tiktok">
                  <a href="https://www.tiktok.com/@tanan_sa?_t=8oJyOUXxSTQ&_r=1" target="_blank">
                    <img
                      src={tiktokIcon}
                      alt="tiktok"
                      width={"45px"}
                      height={"45px"}
                      style={{
                        cursor: "pointer",
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
      </Stack>
    </Box>
  );
}
