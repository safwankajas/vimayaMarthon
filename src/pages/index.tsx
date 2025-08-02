import { Box } from "@mui/material";
import { Header } from "../components/header";
import { HomePage } from "@/components/home";
import { AboutSection } from "@/components/about";
import Register from "@/components/regiter";
import RouteSafety from "@/components/route";
import SponsorsSection from "@/components/sponser";
import ContactUs from "@/components/contact";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import { RegistrationStatusCard } from "@/components/groupRegister";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section id="home">
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <HomePage />
        </Box>
      </section>

      {/* Registration Status */}
      <section>
        <Box sx={{ my: { xs: 0, md: 0 } }}>
          <RegistrationStatusCard />
        </Box>
      </section>

      {/* About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Register */}
      <section id="register">
        <Register />
      </section>

      {/* Event Route & Safety */}
      <section>
        <RouteSafety />
      </section>

      {/* Sponsors */}
      <section id="sponsors">
        <SponsorsSection />
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "#620b38" }}>
        <ContactUs />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQSection />
      </section>

      <Footer />
    </>
  );
}
