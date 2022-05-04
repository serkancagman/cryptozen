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
  Footer,
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
      <Footer />
    </>
  );
};

export default Home;
