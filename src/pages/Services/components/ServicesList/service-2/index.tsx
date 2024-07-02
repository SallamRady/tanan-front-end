import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Masonry } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ConstantsContext } from "../../../../../context/ConstantsContext";
import s2Img1 from "../../../../../assets/images/services/s2/s2-i1.png";
import s2Img2 from "../../../../../assets/images/services/s2/s2-i2.png";
import s2Img3 from "../../../../../assets/images/services/s2/s2-i3.png";
import s2Img4 from "../../../../../assets/images/services/s2/s2-i4.png";
import s2Img5 from "../../../../../assets/images/services/s2/s2-i5.png";
import s2Img6 from "../../../../../assets/images/services/s2/s2-i6.png";
import s2Img7 from "../../../../../assets/images/services/s2/s2-i7.png";
import s2Img8 from "../../../../../assets/images/services/s2/s2-i8.png";
import s2Img9 from "../../../../../assets/images/services/s2/s2-i9.png";
import s2Img10 from "../../../../../assets/images/services/s2/s2-i10.png";
import s2Img11 from "../../../../../assets/images/services/s2/s2-i11.png";
import s2Img12 from "../../../../../assets/images/services/s2/s2-i12.png";
import s2Img13 from "../../../../../assets/images/services/s2/s2-i13.png";
import s2Img14 from "../../../../../assets/images/services/s2/s2-i14.png";
import s2Img15 from "../../../../../assets/images/services/s2/s2-i15.png";

export default function ServiceNum2() {
  // TODO::declare and define component state and variables
  const constContext = useContext(ConstantsContext);
  const theme = useTheme();
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
        We understand your needs and then create a comprehensive marketing
        <br />
        campaign plan to help you achieve your goals and aspirations.
      </Typography>
      <Masonry spacing={2} columns={columns}>
        <img
          className="image-fade-in"
          src={s2Img6}
          alt="our services"
          width={"90%"}
          height={"359px"}
        />
        <img
          className="image-fade-in"
          src={s2Img4}
          alt="our services"
          width={"90%"}
          height={"361px"}
          style={{
            marginTop: "40px",
          }}
        />
        <img
          className="image-fade-in"
          src={s2Img7}
          alt="our services"
          width={"90%"}
          height={"368px"}
        />
        <img
          className="image-fade-in"
          src={s2Img1}
          alt="our services"
          width={"90%"}
          height={"368px"}
        />
        <img
          className="image-fade-in"
          src={s2Img8}
          alt="our services"
          width={"90%"}
          height={"368px"}
          style={{
            marginTop: "40px",
          }}
        />
        <img
          className="image-fade-in"
          src={s2Img9}
          alt="our services"
          width={"90%"}
          height={"352px"}
        />
        <img
          className="image-fade-in"
          src={s2Img5}
          alt="our services"
          width={"90%"}
          height={"361px"}
        />
        <img
          className="image-fade-in"
          src={s2Img10}
          alt="our services"
          width={"90%"}
          height={"368px"}
        />
        <img
          className="image-fade-in"
          src={s2Img11}
          alt="our services"
          width={"90%"}
          height={"361px"}
        />
        <img
          className="image-fade-in"
          src={s2Img3}
          alt="our services"
          width={"90%"}
          height={"403px"}
        />
        <img
          className="image-fade-in"
          src={s2Img2}
          alt="our services"
          width={"90%"}
          height={"361px"}
        />

        <img
          className="image-fade-in"
          src={s2Img12}
          alt="our services"
          width={"90%"}
          height={"359px"}
        />
        <img
          className="image-fade-in"
          src={s2Img13}
          alt="our services"
          width={"90%"}
          height={"361px"}
        />
        <img
          className="image-fade-in"
          src={s2Img15}
          alt="our services"
          width={"90%"}
          height={"359px"}
        />
        <img
          className="image-fade-in"
          src={s2Img14}
          alt="our services"
          width={"90%"}
          height={"403px"}
        />
      </Masonry>
    </Stack>
  );
}
