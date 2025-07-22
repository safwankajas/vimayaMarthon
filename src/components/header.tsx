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
  MenuList,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const bgColor = !scrolled ? "rgba(0, 0, 0, 0.05)" : "#620b38";
  const textColor = scrolled ? "#fff" : "#620b38";
  const ctcBgColor = showCTA ? "rgba(0, 0, 0, 0.05)" : "#620b38";
  const ctcTextColor = !scrolled ? "#fff" : "#620b38";

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
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Image
              src={
                !scrolled
                  ? "/VISMAY RUN LOGO 1 with back.png"
                  : "/VISMAY RUN LOGO 1.png"
              }
              alt="Logo"
              width={100}
              height={100}
              layout="intrinsic"
              objectFit="contain"
            />
            <Image
              src={!scrolled ? "/rotat emp bck.png" : "/rotat emp.png"}
              alt="Logo"
              width={100}
              height={100}
              layout="intrinsic"
              objectFit="contain"
            />
            {/* <Typography
              fontWeight={600}
              sx={{
                ml: 1,
                my: 1,
                color: textColor,
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                },
              }}
            >
              vismayrun2025
            </Typography> */}
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 4 }}>
            {navItems.map((item) => (
              <Button
                href={`#${item.toLowerCase()}`}
                key={item}
                sx={{
                  color: textColor,
                  fontWeight: 500,
                  textTransform: "none",
                }}
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
              mx: 1,
              gap: 1,
              fontSize: { xs: "10px", md: "14px" },
              borderRadius: "8px",
              pointerEvents: showCTA ? "auto" : "none",
              backgroundColor: textColor,
              color: bgColor,
              opacity: showCTA ? 1 : 0,
              textTransform: "none",
              transition: "opacity 0.3s ease",
              ...(showCTA && {
                "&:hover": {
                  backgroundColor: textColor,
                  color: bgColor,
                },
              }),
            }}
          >
            Register Now
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
          <MenuList>
            {navItems.map((text) => (
              <>
                <a href={`#${text.toLowerCase()}`}>
                  <MenuItem
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        color: "#620b38",
                      },
                    }}
                    onClick={handleDrawerToggle}
                    key={text}
                    component="li"
                  >
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </MenuItem>
                </a>
              </>
            ))}
            <ListItem></ListItem>
          </MenuList>
        </Box>
      </Drawer>

      {/* Spacer for sticky AppBar */}
      <Toolbar />
    </>
  );
};
