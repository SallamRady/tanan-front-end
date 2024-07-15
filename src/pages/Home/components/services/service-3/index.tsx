import { Masonry } from "@mui/lab";
import { Grid } from "@mui/material";
import s3Img1 from "../../../../../assets/images/services/s3/s3-i1.png";
import s3Img2 from "../../../../../assets/images/services/s3/s3-i2.png";
import s3Img3 from "../../../../../assets/images/services/s3/s3-i3.png";
import s3Img4 from "../../../../../assets/images/services/s3/s3-i4.png";
import s3Img5 from "../../../../../assets/images/services/s3/s3-i5.png";

export default function ServiceNumber3() {
  return (
    <Grid item xs={12} md={6}>
      <Masonry columns={2} spacing={2}>
        <img
          className="image-fade-in imageClass"
          src={s3Img1}
          alt="our services"
          width={"95%"}
          height={"371.25px"}
        />
        <img
          className="image-fade-in imageClass"
          src={s3Img2}
          alt="our services"
          width={"90%"}
          height={"371.25px"}
          style={{
            marginTop: "40px",
          }}
        />
        <img
          className="image-fade-in imageClass"
          src={s3Img3}
          alt="our services"
          width={"90%"}
          height={"371.25px"}
        />
        <img
          className="image-fade-in imageClass"
          src={s3Img4}
          alt="our services"
          width={"90%"}
          height={"371.25px"}
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
          src={s3Img5}
          alt="our services"
          width={"90%"}
          height={"371.25px"}
        />
      </Masonry>
    </Grid>
  );
}
