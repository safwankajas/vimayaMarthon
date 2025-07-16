import { Box } from "@mui/material";
import { Header } from "../components/header";
import { HomePage } from "@/components/home";
import { Overview } from "@/components/overview";

export default function Home() {
  return (
    <>
      <Header />
      <Box id="home" sx={{ height: "100vh" }}>
        <HomePage />
      </Box>
      <Box id="about" sx={{ height: "1000px" }}>
        <>About</>
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
