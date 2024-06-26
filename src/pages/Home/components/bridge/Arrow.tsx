import { Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useEffect, useRef, useState } from "react";

export default function ArrowDown(props: PropsType) {
  // TODO::declare and define component state and variables
  const [hovered, setHovered] = useState(false);
  const [hide, setHide] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getYCoordinate = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (hide && rect.top <= 490) {
          setHide(false);
        } else {
          if (!hide) setHide(true);
        }
      }
    };

    // Get Y coordinate on component mount
    getYCoordinate();

    // Optionally, add an event listener to get Y coordinate on scroll
    window.addEventListener("scroll", getYCoordinate);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", getYCoordinate);
    };
  }, []);

  // TODO::declare and define helper methods
  return (
    <Stack
      ref={elementRef}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        transition: "all 1s ease-in-out",
        fontSize: "5rem",
        opacity: hide ? 0 : 1,
      }}
      onMouseEnter={() => {
        setHovered(true);
        console.log("scrollTop", elementRef.current?.offsetHeight);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <KeyboardDoubleArrowDownIcon
        className={hovered ? "arrow-down-animate" : ""}
        sx={{
          transition: "all 0.3s ease-in-out",
          fontSize: hovered ? "4.2rem" : "3rem",
          color: "#8f65eb",
        }}
      />
      <Typography
        variant="body2"
        fontWeight={hovered ? 600 : 300}
        fontSize={hovered ? "2.3rem" : "1.4rem"}
        sx={{
          transition: "all 0.3s ease-in-out",
          color: "#8f65eb",
          ":hover": {
            textShadow: "1px 1px 2px 2px gray",
          },
        }}
      >
        {props.text}
      </Typography>

      {props.text === "Sell" && (
        <KeyboardDoubleArrowDownIcon
          sx={{
            transition: "all 0.3s ease-in-out",
            fontSize: "3rem",
            color: "#8f65eb",
          }}
        />
      )}
    </Stack>
  );
}

type PropsType = {
  text: string;
};
