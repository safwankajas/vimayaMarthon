import { Box } from "@mui/material";
import { Header } from "../components/header";
import { HomePage } from "@/components/home";
import { AboutSection } from "@/components/about";
import Register from "@/components/regiter";

export default function Home() {
  return (
    <>
      <Header />
      <Box
        id="home"
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <HomePage />
      </Box>
      <Box id="about">
        <AboutSection />
      </Box>
      <Box id="register" sx={{ height: "1000px", backgroundColor: "#fcefdc" }}>
        <Register />
      </Box>
      <Box id="contact" sx={{ height: "1000px" }}>
        <>Contact</>
      </Box>
    </>
  );
}
