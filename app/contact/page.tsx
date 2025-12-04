"use client";

import React from "react";
import TopBanner from "@/app/Components/TopBanner";
import ContactComp from "@/app/Components/ContactComp";
import Navbar from "@/app/Components/Navbar/Navbar";
import Footer from "@/app/Components/Footer";

const ContactPage = () => {
  return (
    <>
    <Navbar />
      <TopBanner text="Contact" />
      <ContactComp />
      <Footer />
    </>
  );
};

export default ContactPage;
