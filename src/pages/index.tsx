import { Box } from "@mui/material";
import { Header } from "../components/header";
import { HomePage } from "@/components/home";
import { AboutSection } from "@/components/about";

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
      <Box id="about" sx={{ height: "1000px" }}>
        <AboutSection />
      </Box>
      <Box id="register" sx={{ height: "1000px" }}>
        <>Register</>
      </Box>
      <Box id="contact" sx={{ height: "1000px" }}>
        <>Contact</>
      </Box>
    </>
  );
}
