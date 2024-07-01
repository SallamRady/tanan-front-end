import AwesomeSlider from "react-awesome-slider";
import Img1 from "../../../../assets/images/aboutFeatures/about1.png";
import Img2 from "../../../../assets/images/aboutFeatures/about2.png";
import Img3 from "../../../../assets/images/aboutFeatures/about3.png";
import Img4 from "../../../../assets/images/aboutFeatures/about4.png";
import "react-awesome-slider/dist/styles.css";

export default function MobileSlider() {
  return (
    <AwesomeSlider
      style={{
        width: "100%",
        height: "450px",
      }}
      media={[
        {
          source: Img1,
        },
        {
          source: Img2,
        },
        {
          source: Img3,
        },
        {
          source: Img4,
        },
      ]}
    />
  );
}
