"use client";

import React, { FC } from "react";
import TopBanner from "../Components/TopBanner";
import GalleryComp from "../Components/GalleryComp";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";

const Gallery: FC = () => {
  return (
    <>
    <Navbar />
      <TopBanner text="Gallery" />
      <GalleryComp />
      <Footer />
    </>
  );
};

export default Gallery;
