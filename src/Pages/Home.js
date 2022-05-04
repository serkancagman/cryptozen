import {
  Banner,
  Header,
  Featured,
  AboutIco,
  Rating,
  WhoWeAre,
  MobileApp,
  FAQ,
  News,
  Contact,
} from "Components";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Featured />
      <AboutIco />
      <Rating />
      <WhoWeAre />
      <MobileApp />
      <FAQ />
      <News />
      <Contact />
    </>
  );
};

export default Home;
