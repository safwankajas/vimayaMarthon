import ContactUs from "@/components/contact";
import { Header } from "@/components/header";
import { Box, Skeleton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

type GroupLink = {
  Group?: string;
  URL?: string;
};

export default function GroupRegisterPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [formUrl, setFormUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      fetch(
        "https://opensheet.elk.sh/1cuZsZL72FRhULXYZYZ4Hi48rEUPR1g31ZdcvqWjf7QA/groupRegisterUrl"
      )
        .then((res) => res.json())
        .then((data: GroupLink[]) => {
          const cleanedSlug = slug.trim().toLowerCase();

          const matched = data.find(
            (row) => row.Group?.trim().toLowerCase() === cleanedSlug
          );

          setFormUrl(matched?.URL?.trim() || null);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch form links", err);
          setFormUrl(null);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading)
    return (
      <>
        <Head>
          <title>Vismay Run 2025</title>
          <meta
            name="description"
            content="Register for Vismay Run 2025, the 5K women’s marathon in Kochi. Join us this September and claim your finisher medal."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://vismayrun2025.in/" />
        </Head>
        <Header />
        <Box id="groupRegister" sx={{ m: 2, mt: -10 }}>
          <Skeleton height={"100vh"} />
        </Box>
      </>
    );

  if (!formUrl) {
    return (
      <div
        style={{
          backgroundImage: `url('/kochi1.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: "white",
          position: "relative",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            paddingTop: "10vh",
            paddingInline: "2rem",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            ❌ Sorry, group not found
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            Please check the URL or contact support.
          </p>
          <Link
            href={"/"}
            style={{
              backgroundColor: "#ffffff",
              color: "#620b38",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </div>
        <Box sx={{ zIndex: 3, position: "relative" }}>
          <ContactUs />
        </Box>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Vismay Run 2025</title>
        <meta
          name="description"
          content="Register for Vismay Run 2025, the 5K women’s marathon in Kochi. Join us this September and claim your finisher medal."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vismayrun2025.in/" />
      </Head>
      <Header />
      <Box id="groupRegister" sx={{ mt: 7 }}>
        <iframe
          src={formUrl}
          width="100%"
          height="100%"
          style={{
            border: "none",
            height: "90vh",
            display: "block",
          }}
          allowFullScreen
        >
          Loading…
        </iframe>
      </Box>
    </>
  );
}
