import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { ConstantsContext } from "../../../../context/ConstantsContext";
import bgImg from "../../../../assets/images/contactPageBG.jpeg";
import redirectToWhatsApp from "../../../../methods/social/RedirectToWhatsApp";

export default function ContactUsPageHeroSection() {
  // todo::declare and define component state and variables
  const constContext = useContext(ConstantsContext);
  let { t } = useTranslation();

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
                primary="+966 50 588 2911"
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
                href="mailto:yahala@tannan.com"
                variant="body2"
                fontFamily={constContext.mediumFont}
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                yahala@tannan.com
              </Typography>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Box>
  );
}
