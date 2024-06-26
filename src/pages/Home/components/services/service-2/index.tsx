import { Masonry } from "@mui/lab";
import { Grid } from "@mui/material";
import s2Img1 from "../../../../../assets/images/services/s2/s2-i1.png";
import s2Img2 from "../../../../../assets/images/services/s2/s2-i2.png";
import s2Img3 from "../../../../../assets/images/services/s2/s2-i3.png";
import s2Img4 from "../../../../../assets/images/services/s2/s2-i4.png";
import s2Img5 from "../../../../../assets/images/services/s2/s2-i5.png";

export default function ServiceNumber2() {
  return (
    <Grid item xs={12} md={6}>
      <Masonry columns={2} spacing={2}>
        <img
          src={s2Img1}
          alt="our services"
          width={"95%"}
          height={"447.25px"}
        />
        <img
          src={s2Img2}
          alt="our services"
          width={"90%"}
          height={"368.25px"}
          style={{
            marginTop: "40px",
          }}
        />
        <img
          src={s2Img3}
          alt="our services"
          width={"90%"}
          height={"361.25px"}
        />
        <img
          src={s2Img4}
          alt="our services"
          width={"90%"}
          height={"315.25px"}
        />
      </Masonry>
      <Masonry
        columns={2}
        spacing={2}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <img
          src={s2Img5}
          alt="our services"
          width={"90%"}
          height={"361.25px"}
        />
      </Masonry>
    </Grid>
  );
}
