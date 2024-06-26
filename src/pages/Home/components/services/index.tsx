import { Box, Grid, Skeleton } from "@mui/material";
import { useState } from "react";
import ServicesListIndex from "./listServices/ServicesList";
import ServiceNumber1 from "./service-1";
import { Masonry } from "@mui/lab";
import s1Img3 from "../../../../assets/images/services/s1/s1-i3.png";
import s1Img4 from "../../../../assets/images/services/s1/s1-i4.png";
import s2Img5 from "../../../../assets/images/services/s2/s2-i5.png";
import s3Img5 from "../../../../assets/images/services/s3/s3-i5.png";
import ServiceNumber2 from "./service-2";
import ServiceNumber3 from "./service-3";

export default function HomeServices() {
  // TODO::declare and define component state and variables
  const [activeServiceId, setActiveServiceId] = useState("service-1");

  // TODO::declare and define component helper methods
  const ServiceWrapper = () => {
    switch (activeServiceId) {
      case "service-1":
        return <ServiceNumber1 />;
      case "service-2":
        return <ServiceNumber2 />;
      case "service-3":
        return <ServiceNumber3 />;
    }
  };

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
        {activeServiceId === "service-2" && (
          <>
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
                <Skeleton
                  variant="rectangular"
                  height={200}
                  sx={{
                    bgcolor: "#fff",
                  }}
                />
                <img
                  src={s2Img5}
                  alt="our services"
                  width={"90%"}
                  height={"361.25px"}
                  style={{
                    float: "right",
                  }}
                />
              </Masonry>
            </Box>
          </>
        )}
        {activeServiceId === "service-3" && (
          <>
            <Box
              width={"100%"}
              mt={18}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Masonry columns={2} spacing={2}>
                <Skeleton
                  variant="rectangular"
                  height={200}
                  sx={{
                    bgcolor: "#fff",
                  }}
                />
                <img
                  src={s3Img5}
                  alt="our services"
                  width={"90%"}
                  height={"371.25px"}
                  className="image-fade-in"
                  style={{
                    float: "right",
                  }}
                />
              </Masonry>
            </Box>
          </>
        )}
      </Grid>
      {/* show service view */}
      {ServiceWrapper()}
    </Grid>
  );
}
