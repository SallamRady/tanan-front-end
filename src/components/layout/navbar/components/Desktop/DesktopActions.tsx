import { Button, Stack } from "@mui/material";

export default function NavbarDesktopActions() {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      alignItems={"center"}
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      <Button variant="text">Ar</Button>
      <Button variant="contained">Free consultation</Button>
    </Stack>
  );
}
