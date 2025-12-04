"use client";

import React from "react";
import Hero from "./Components/Hero";
import FeatureDestination from "./Components/FeatureDestination";
import Features from "./Components/Features";
import GalleryComp from "./Components/GalleryComp";
import Banner from "./Components/Banner";
import ContactComp from "./Components/ContactComp";
import Navbar from "./Components/Navbar/Navbar"; 
import Footer from "./Components/Footer";
import ScrollToTop from "react-scroll-to-top";


const Home = () => {
  return (
    <>
      <Navbar />     
      <Hero />
      <FeatureDestination />
      <Features />
      <GalleryComp />
      <Banner />
      <ContactComp />
      <Footer />
      <ScrollToTop
        color="white"
        smooth
        style={{
          backgroundColor: "#EF4444",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
};

export default Home;
