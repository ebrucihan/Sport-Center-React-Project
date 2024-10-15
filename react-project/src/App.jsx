import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Classes from "./components/Classes.jsx";
import BMI from "./components/BMI.jsx";
import Trainer from "./components/Trainer.jsx";
import Purchases from "./components/Purchases.jsx";
import Review from "./components/Review.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Classes />
      <BMI />
      <Trainer />
      <Purchases />
      <Review />
      <Contacts />
      <Footer />
    </>
  );
}
