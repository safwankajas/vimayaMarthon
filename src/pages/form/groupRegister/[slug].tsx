"use client";

import ContactUs from "@/components/contact";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  if (loading) return <p>Loading…</p>;

  if (!formUrl) {
    return (
      <div
        style={{
          backgroundImage: `url('/kochi1.png')`, // Update with your actual image
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
          <ContactUs />

          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <>
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
