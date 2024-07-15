import { Masonry } from "@mui/lab";
import { Grid, ImageListItem } from "@mui/material";
import s1Img1 from "../../../../../assets/images/services/s1/s1-i1.png";
import s1Img2 from "../../../../../assets/images/services/s1/s1-i2.png";
import s1Img3 from "../../../../../assets/images/services/s1/s1-i3.png";
import s1Img4 from "../../../../../assets/images/services/s1/s1-i4.png";
import s1Img5 from "../../../../../assets/images/services/s1/s1-i5.png";
import s1Img6 from "../../../../../assets/images/services/s1/s1-i6.png";

export default function ServiceNumber1() {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Masonry columns={2} spacing={2}>
          <img
            className="image-fade-in imageClass"
            src={s1Img1}
            alt="our services"
            width={"90%"}
            height={"361.25px"}
          />
          <img
            className="image-fade-in imageClass"
            src={s1Img2}
            alt="our services"
            width={"90%"}
            height={"447.25px"}
            style={{
              marginTop: "40px",
            }}
          />
          <img
            className="image-fade-in imageClass"
            src={s1Img5}
            alt="our services"
            width={"90%"}
            height={"447.25px"}
          />
          <img
            className="image-fade-in imageClass"
            src={s1Img6}
            alt="our services"
            width={"90%"}
            height={"361.25px"}
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
            className="image-fade-in imageClass"
            src={s1Img3}
            alt="our services"
            width={"90%"}
            height={"361.25px"}
          />
          <img
            className="image-fade-in imageClass"
            src={s1Img4}
            alt="our services"
            width={"90%"}
            height={"361.25px"}
          />
        </Masonry>
      </Grid>
    </>
  );
}
