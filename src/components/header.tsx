import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = ["Home", "About", "Sponsors", "Contact", "FAQ"];

export const Header = () => {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";

  const [showCTA, setShowCTA] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [groupRegister, setGroupRegister] = useState(false);

  const logoImages = [
    "VISMAY RUN LOGO 1.png",
    "rotat emp.png",
    "vismay log 2.png",
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);

      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        const isHomeInView = rect.bottom > 0 && rect.top < window.innerHeight;
        setShowCTA(!isHomeInView);
      }

      const groupReg = document.getElementById("groupRegister");
      if (groupReg) {
        setGroupRegister(true);
        setShowCTA(true);
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logoImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const bgColor = scrolled ? "#620b38" : "rgba(0, 0, 0, 0.05)";
  const textColor = scrolled ? "#fff" : "#000";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: { xs: "4px", md: 0 },
          }}
        >
          {/* Mobile Logos Row */}
          {!showCTA ? (
            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                justifyContent: "space-around",
                width: "100%",
                gap: 2,
                mb: 1,
              }}
            >
              {logoImages.map((src, i) => (
                <Image
                  key={i}
                  src={`/${src}`}
                  alt={`Logo ${i + 1}`}
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                  priority
                />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                zIndex: 10,
                display: { xs: "flex", lg: "none" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                p: "5px",
              }}
            >
              <Image
                key={`Logo ${currentLogoIndex + 1}`}
                src={`/${logoImages[currentLogoIndex]}`}
                alt={`Logo ${currentLogoIndex + 1}`}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
                priority
              />
              <Box>
                <Button
                  href={isOnHomePage ? "#register" : "/#register"}
                  variant="contained"
                  sx={{
                    backgroundColor: textColor,
                    color: bgColor,
                    fontWeight: 600,
                    pointerEvents: showCTA && !groupRegister ? "auto" : "none",
                    opacity: showCTA && !groupRegister ? 1 : 0,
                    textTransform: "none",
                    borderRadius: 2,
                    fontSize: 14,
                    px: 2,
                    "&:hover": {
                      backgroundColor: textColor,
                      opacity: 0.9,
                    },
                  }}
                >
                  Register Now
                </Button>
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{ color: textColor }}
                  aria-label="menu"
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            </Box>
          )}

          {/* Desktop Header */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logos & Date */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {logoImages.map((src, i) => (
                <Image
                  key={i}
                  src={`/${src}`}
                  alt={`Logo ${i + 1}`}
                  width={70}
                  height={70}
                  style={{ objectFit: "contain" }}
                  priority
                />
              ))}
              <Box sx={{ ml: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  05th October 2025
                </Typography>
                <Typography variant="body2">Kochi</Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {navItems.map((item) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, "-");
                const href = isOnHomePage ? `#${sectionId}` : `/#${sectionId}`;

                return (
                  <Button
                    key={item}
                    href={href}
                    sx={{
                      color: textColor,
                      fontWeight: 500,
                      textTransform: "none",
                      borderRadius: 0,
                    }}
                  >
                    {item}
                  </Button>
                );
              })}
            </Box>

            {/* Register CTA */}
            <Button
              href={isOnHomePage ? "#register" : "/#register"}
              variant="contained"
              sx={{
                backgroundColor: textColor,
                color: bgColor,
                pointerEvents: showCTA && !groupRegister ? "auto" : "none",
                opacity: showCTA && !groupRegister ? 1 : 0,
                fontWeight: 600,
                textTransform: "none",
                px: 3,
                borderRadius: 1,
                "&:hover": { backgroundColor: "#fff" },
              }}
            >
              Register Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { lg: "none" } }}
      >
        <Box sx={{ p: 2 }}>
          <MenuList>
            {navItems.map((item) => {
              const sectionId = item.toLowerCase().replace(/\s+/g, "-");
              const href = isOnHomePage ? `#${sectionId}` : `/#${sectionId}`;

              return (
                <MenuItem
                  key={item}
                  component="a"
                  href={href}
                  onClick={handleDrawerToggle}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      color: "#620b38",
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </MenuItem>
              );
            })}
          </MenuList>
        </Box>
      </Drawer>
    </>
  );
};
