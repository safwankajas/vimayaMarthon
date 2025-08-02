import { Box } from "@mui/material";
import { Header } from "../components/header";
import { HomePage } from "@/components/home";
import { AboutSection } from "@/components/about";
import ContactUs from "@/components/contact";
import { RegistrationStatusCard } from "@/components/groupRegister";
import { Red_Rose } from "next/font/google";
import dynamic from "next/dynamic";
const Register = dynamic(() => import("@/components/regiter"));
const RouteSafety = dynamic(() => import("@/components/route"));
const SponsorsSection = dynamic(() => import("@/components/sponser"));
const FAQSection = dynamic(() => import("@/components/faq"));
const Footer = dynamic(() => import("@/components/footer"));

const redRose = Red_Rose({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});
export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <main className={redRose.className}>
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
      </main>
      <Footer />
    </>
  );
}
