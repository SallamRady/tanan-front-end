import { Box, Grid } from "@mui/material";
import { useState } from "react";
import ServicesListIndex from "./ServicesList";
import ServiceNumber1 from "./service-1";
import { Masonry } from "@mui/lab";
import s1Img3 from "../../../../assets/images/services/s1/s1-i3.png";
import s1Img4 from "../../../../assets/images/services/s1/s1-i4.png";

export default function HomeServices() {
  // TODO::declare and define component state and variables
  const [activeServiceId, setActiveServiceId] = useState("service-1");
  // * return component ui.
  return (
    <Grid container pt={15}>
      <Grid item xs={12} md={6} pl={4}>
        {/* list of services text */}
        <ServicesListIndex
          activeServiceId={activeServiceId}
          setActiveServiceId={setActiveServiceId}
        />
        {/* in service 1 */}
        {activeServiceId === "service-1" && (
          <Box
            width={"100%"}
            mt={10}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Masonry columns={2} spacing={2}>
              <img
                src={s1Img3}
                alt="our services"
                width={"90%"}
                height={"361.25px"}
              />
              <img
                src={s1Img4}
                alt="our services"
                width={"90%"}
                height={"447.25px"}
                style={{
                  marginTop: "40px",
                }}
              />
            </Masonry>
          </Box>
        )}
      </Grid>
      {/* show service view */}
      <ServiceNumber1 />
    </Grid>
  );
}
