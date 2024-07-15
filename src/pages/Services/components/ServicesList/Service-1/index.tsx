import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Masonry } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ConstantsContext } from "../../../../../context/ConstantsContext";
import s1Img1 from "../../../../../assets/images/services/s1/s1-i1.png";
import s1Img2 from "../../../../../assets/images/services/s1/s1-i2.png";
import s1Img3 from "../../../../../assets/images/services/s1/s1-i3.png";
import s1Img4 from "../../../../../assets/images/services/s1/s1-i4.png";
import s1Img5 from "../../../../../assets/images/services/s1/s1-i5.png";
import s1Img6 from "../../../../../assets/images/services/s1/s1-i6.png";
import s1Img7 from "../../../../../assets/images/services/s1/s1-i7.png";
import s1Img8 from "../../../../../assets/images/services/s1/s1-i8.png";
import { useTranslation } from "react-i18next";

export default function ServiceNum1() {
  // TODO::declare and define component state and variables
  const constContext = useContext(ConstantsContext);
  const theme = useTheme();
  let { t } = useTranslation();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  let columns = 4;
  if (isXs) {
    columns = 1;
  } else if (isSm) {
    columns = 2;
  } else {
    columns = 4;
  }

  // TODO::declare and define helper methods

  // * return component UI.
  return (
    <Stack spacing={3} mt={4} px={2}>
      <Typography
        variant="body2"
        fontFamily={constContext.mediumFont}
        color={"#000"}
      >
        {t("servicesPage.service1Text")}
      </Typography>
      <Masonry
        spacing={2}
        columns={columns}
        // sx={{
        //   columns: {
        //     xs: 2,
        //     md: 4,
        //   },
        // }}
      >
        <img
          className="image-fade-in imageClass"
          src={s1Img5}
          alt="our services"
          width={"90%"}
          height={"359px"}
        />
        <img
          className="image-fade-in imageClass"
          src={s1Img6}
          alt="our services"
          width={"90%"}
          height={"361px"}
          style={{
            marginTop: "40px",
          }}
        />
        <img
          className="image-fade-in imageClass"
          src={s1Img1}
          alt="our services"
          width={"90%"}
          height={"361px"}
        />
        <img
          className="image-fade-in imageClass"
          src={s1Img2}
          alt="our services"
          width={"90%"}
          height={"447px"}
          style={{
            marginTop: "40px",
          }}
        />
        <img
          className="image-fade-in imageClass"
          src={s1Img3}
          alt="our services"
          width={"90%"}
          height={"359px"}
        />
        <img
          className="image-fade-in imageClass"
          src={s1Img4}
          alt="our services"
          width={"90%"}
          height={"447px"}
        />
        <img
          className="image-fade-in imageClass"
          src={s1Img7}
          alt="our services"
          width={"90%"}
          height={"447px"}
        />
        <img
          className="image-fade-in imageClass"
          src={s1Img8}
          alt="our services"
          width={"90%"}
          height={"361px"}
        />
      </Masonry>
    </Stack>
  );
}
