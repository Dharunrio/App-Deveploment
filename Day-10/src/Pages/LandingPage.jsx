import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import LandingContent from "../Components/LandingContent";

const LandingPage = () => {
  return (
    <>
    <div className="">
      <NavBar />
      </div>
      <div className="landing-container bg-dark">
        <LandingContent/>
        <Footer />
    </div>
    </>
  );
};

export default LandingPage;
