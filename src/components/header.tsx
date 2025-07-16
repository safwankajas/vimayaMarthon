"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = ["Home", "About", "Register", "Contact"];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        const isHomeInView = rect.bottom > 0 && rect.top < window.innerHeight;

        setShowCTA(!isHomeInView); // Show CTA only if home is NOT in view
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        const isHomeInView = rect.bottom > 0 && rect.top < window.innerHeight;

        setShowCTA(!isHomeInView); // Show CTA only if home is NOT in view
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const bgColor = !scrolled ? "rgba(0, 0, 0, 0.05)" : "#7B1E3A";
  const textColor = scrolled ? "#fff" : "#7B1E3A";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: bgColor,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          color: textColor,
        }}
      >
        <Toolbar sx={{ maxWidth: "1280px", width: "100%", margin: "0 auto" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight={600} sx={{ color: textColor }}>
              vismaya
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: textColor, fontWeight: 500 }}
                disableRipple
              >
                {item}
              </Button>
            ))}
          </Box>
          <Button
            href="www.d.com"
            variant="contained"
            sx={{
              mx: 3,
              gap: 4,
              pointerEvents: showCTA ? "auto" : "none",
              backgroundColor: "#2563eb",
              opacity: showCTA ? 1 : 0,
              transition: "opacity 0.3s ease",
              ...(showCTA && {
                "&:hover": {
                  backgroundColor: "#1d4ed8",
                },
              }),
            }}
          >
            Get started now
          </Button>
          {/* Mobile menu toggle */}
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { lg: "none" }, color: textColor }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
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
          <List>
            {navItems.map((text) => (
              <ListItem key={text} component="li">
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            ))}
            <ListItem></ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Spacer for sticky AppBar */}
      <Toolbar />
    </>
  );
};
