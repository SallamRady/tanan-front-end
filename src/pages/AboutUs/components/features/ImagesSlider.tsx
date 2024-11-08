import { Box, Grid, IconButton, Stack } from "@mui/material";
import Img1 from "../../../../assets/images/aboutFeatures/about1.png";
import Img2 from "../../../../assets/images/aboutFeatures/about2.png";
import Img3 from "../../../../assets/images/aboutFeatures/about3.png";
import Img4 from "../../../../assets/images/aboutFeatures/about4.png";
import AdjustIcon from "@mui/icons-material/Adjust";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useContext, useState } from "react";
import { LangContext } from "../../../../context/LangContext";

export default function ImagesSlider() {
  // todo::declare and define component state and variables
  const [imagesOrders, setImagesOrders] = useState([1, 2, 3, 4]);
  const langContext = useContext(LangContext);
  const lang = langContext.lang();

  // todo::declare and define helper methods
  const handleClick = () => {
    setTimeout(() => {
      let arr = imagesOrders;
      let last = arr[0];
      arr.shift();
      arr.push(last);
      setImagesOrders([...arr]);
    }, 100);
  };

  const returnImage = (idx: number) => {
    switch (idx) {
      case 1:
        return Img1;
      case 2:
        return Img2;
      case 3:
        return Img3;
      case 4:
        return Img4;
    }
  };

  // * return component ui.
  return (
    <Box
      sx={{
        width: "100%",
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4}>
          <img
            src={returnImage(imagesOrders[0])}
            width={"98%"}
            height={"530px"}
            alt="image ..."
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <Grid container sx={{ position: "relative", overflowX: "hidden" }}>
              <Grid item xs={12} md={6} px={1}>
                <img
                  src={returnImage(imagesOrders[1])}
                  width={"98%"}
                  height={"480px"}
                  alt="image ..."
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "hidden",
                }}
              >
                <img
                  src={returnImage(imagesOrders[2])}
                  width={"98%"}
                  height={"480px"}
                  alt="image ..."
                  style={{ margin: "0 5px" }}
                />
                <img
                  src={returnImage(imagesOrders[3])}
                  width={"98%"}
                  height={"480px"}
                  alt="image ..."
                  style={{ margin: "0 5px" }}
                />
              </Grid>
              <IconButton
                onClick={() => handleClick()}
                sx={{
                  color: "#000",
                  background: "#fff",
                  position: "absolute",
                  top: "50%",
                  left: "46%",
                  boxShadow: "1px 1px 1px 2px lightgray",
                  ":hover": {
                    background: "#fff",
                  },
                }}
              >
                {lang === "ar" ? (
                  <KeyboardArrowLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </Grid>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {imagesOrders.map((ele, idx) => {
                return idx + 1 === imagesOrders[0] ? (
                  <AdjustIcon sx={{ color: "#8f65eb" }} />
                ) : (
                  <FiberManualRecordIcon />
                );
              })}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
