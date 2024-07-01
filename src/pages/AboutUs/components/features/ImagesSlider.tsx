import { Box, Grid, IconButton, Stack } from "@mui/material";
import Img1 from "../../../../assets/images/aboutFeatures/about1.png";
import Img2 from "../../../../assets/images/aboutFeatures/about2.png";
import Img3 from "../../../../assets/images/aboutFeatures/about3.png";
import Img4 from "../../../../assets/images/aboutFeatures/about4.png";
import AdjustIcon from "@mui/icons-material/Adjust";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";

const ImagesInfo = [Img1, Img2, Img3, Img4];

export default function ImagesSlider() {
  // todo::declare and define component state and variables
  const [imagesOrders, setImagesOrders] = useState([1, 2, 3, 4]);
  const [moveImages, setMoveImages] = useState(false);

  // todo::declare and define helper methods
  const handleClick = () => {
    setMoveImages(true);
    setTimeout(() => {
      let arr = imagesOrders;
      let last = arr[0];
      arr.shift();
      arr.push(last);
      setImagesOrders([...arr]);
      setMoveImages(false);
    }, 600);
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

  useEffect(() => {
    console.log("Images_Effected ::", imagesOrders[0]);
  }, [imagesOrders]);

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
      <Stack spacing={2}>
        <Stack
          direction={"row"}
          spacing={2}
          flexWrap={"nowrap"}
          overflow={"hidden"}
        >
          <img
            src={returnImage(imagesOrders[0])}
            width={"404px"}
            height={"530px"}
            alt="image ..."
            // className={moveImages ? "removedImage" : ""}
          />
          <img
            src={returnImage(imagesOrders[1])}
            width={"372px"}
            height={"480px"}
            alt="image ..."
            // className={moveImages ? "addedImage-1" : ""}
          />
          <img
            src={returnImage(imagesOrders[2])}
            width={"372px"}
            height={"480px"}
            alt="image ..."
            // className={moveImages ? "addedImage-1" : ""}
          />
          <img
            src={returnImage(imagesOrders[3])}
            width={"372px"}
            height={"480px"}
            alt="image ..."
            // className={moveImages ? "addedImage-1" : ""}
          />
        </Stack>

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
    </Box>
  );
}
