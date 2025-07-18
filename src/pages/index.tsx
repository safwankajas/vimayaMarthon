import { Box } from "@mui/material";
import { Header } from "../components/header";
import { HomePage } from "@/components/home";
import { AboutSection } from "@/components/about";
import Register from "@/components/regiter";
import InclusionsSection from "@/components/include";
import RouteSafety from "@/components/route";
import EventLocation from "@/components/route";
import SponsorsSection from "@/components/sponser";
import MedalTShirtPreview from "@/components/shirtMedal";
import ContactUs from "@/components/contact";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";

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
      <Box id="register" sx={{ backgroundColor: "#fcefdc" }}>
        <Register />
      </Box>
      <Box sx={{}}>
        <InclusionsSection />
      </Box>
      <Box>
        <EventLocation />
      </Box>
      <Box sx={{}}>
        <MedalTShirtPreview />
      </Box>
      <Box sx={{ backgroundColor: "#fcefdc" }}>
        <SponsorsSection />
      </Box>
      <Box id="contact">
        <ContactUs />
      </Box>
      <FAQSection />
      <Footer />
    </>
  );
}
