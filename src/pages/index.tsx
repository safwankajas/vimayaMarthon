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
import { RegistrationStatusCard } from "@/components/groupRegister";

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
      <Box sx={{ my: { xs: 0, md: 0 } }}>
        <RegistrationStatusCard />
      </Box>
      <Box id="about">
        <AboutSection />
      </Box>
      <Box id="register" sx={{}}>
        <Register />
      </Box>
      {/* <Box sx={{}}>
        <InclusionsSection />
      </Box> */}
      <Box>
        <EventLocation />
      </Box>
      {/* <Box sx={{}}>
        <MedalTShirtPreview />
      </Box> */}
      <Box id="sponsors" sx={{}}>
        <SponsorsSection />
      </Box>
      <Box id="contact" sx={{ background: "#620b38" }}>
        <ContactUs />
      </Box>
      <Box id="faq">
        <FAQSection />
      </Box>
      <Footer />
    </>
  );
}
