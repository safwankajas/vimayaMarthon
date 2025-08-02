import { Box } from "@mui/material";
import { Header } from "@/components/header";
import { HomePage } from "@/components/home";
import { AboutSection } from "@/components/about";
import ContactUs from "@/components/contact";
import { RegistrationStatusCard } from "@/components/groupRegister";
import { Red_Rose } from "next/font/google";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";

// Dynamically loaded components
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
      <main className={redRose.className}>
        {/* Hero Section */}
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

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Register Section */}
        <section id="register">
          <Register />
        </section>

        {/* Route & Safety Section */}
        <section>
          <RouteSafety />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors">
          <SponsorsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ background: "#620b38" }}>
          <ContactUs />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

// Enable Static Site Generation
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // Add props if needed in the future
  };
};
