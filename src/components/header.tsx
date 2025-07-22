"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuList,
  MenuItem,
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
        setShowCTA(!isHomeInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = !scrolled ? "rgba(0, 0, 0, 0.05)" : "#620b38";
  const textColor = scrolled ? "#fff" : "#620b38";

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
        <Toolbar
          sx={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "space-around", lg: "flex-start" },
              alignItems: "center",
              gap: 2,
              flex: "1 1 100%",
              mb: { xs: 1, lg: 0 },
            }}
          >
            <Image
              src={"/VISMAY RUN LOGO 1.png"}
              alt="Logo 1"
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              priority
            />
            <Image
              src={"/rotat emp.png"}
              alt="Logo 2"
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              priority
            />
            <Image
              src={"/vismay log 2.png"}
              alt="Logo 3"
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>

          {/* Menu + Register Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              alignItems: "center",
              gap: 2,
              flex: "1 1 100%",
              flexWrap: "wrap",
              mb: { xs: 1, lg: 0 },
            }}
          >
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

            {/* Register Button */}
            <Button
              href="https://www.d.com"
              variant="contained"
              sx={{
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
            {navItems.map((text) => (
              <a href={`#${text.toLowerCase()}`} key={text}>
                <MenuItem
                  onClick={handleDrawerToggle}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      color: "#620b38",
                    },
                  }}
                  component="li"
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                </MenuItem>
              </a>
            ))}
          </MenuList>
        </Box>
      </Drawer>

      {/* Spacer for sticky AppBar */}
      {/* <Toolbar /> */}
    </>
  );
};
