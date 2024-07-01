import { Grid, Stack } from "@mui/material";
import InformationSection from "./InformationSection";
import ImagesSlider from "./ImagesSlider";

export default function AboutFeatures() {
  return (
    <Grid container my={14}>
      <Grid item xs={12} md={4}>
        <InformationSection />
      </Grid>
      <Grid item xs={12} md={8}>
        <ImagesSlider />
      </Grid>
    </Grid>
  );
}
