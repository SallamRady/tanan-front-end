import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Masonry } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ConstantsContext } from "../../../../../context/ConstantsContext";
import s3Img1 from "../../../../../assets/images/services/s3/s3-i1.png";
import s3Img2 from "../../../../../assets/images/services/s3/s3-i2.png";
import s3Img3 from "../../../../../assets/images/services/s3/s3-i3.png";
import s3Img4 from "../../../../../assets/images/services/s3/s3-i4.png";
import s3Img5 from "../../../../../assets/images/services/s3/s3-i5.png";

export default function ServiceNum3() {
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
        Because words have impact, change choices, and shape decisions, we{" "}
        <br />
        always consider the right words and express them in a way that reflects{" "}
        <br />
        you and achieves your goals.
      </Typography>
      <Masonry spacing={2} columns={columns}>
        <img
          className="image-fade-in"
          src={s3Img1}
          alt="our services"
          width={"90%"}
          height={"359px"}
        />
        <img
          className="image-fade-in"
          src={s3Img2}
          alt="our services"
          width={"90%"}
          height={"361px"}
          style={{
            marginTop: "40px",
          }}
        />
        <img
          className="image-fade-in"
          src={s3Img3}
          alt="our services"
          width={"90%"}
          height={"361px"}
        />
        <img
          className="image-fade-in"
          src={s3Img4}
          alt="our services"
          width={"90%"}
          height={"447px"}
          style={{
            marginTop: "40px",
          }}
        />
        <img
          className="image-fade-in"
          src={s3Img5}
          alt="our services"
          width={"90%"}
          height={"359px"}
        />
      </Masonry>
    </Stack>
  );
}
