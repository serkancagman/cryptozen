import { Banner, Header, Featured,AboutIco, Rating, WhoWeAre, MobileApp,FAQ, News } from "Components";
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
    </>
  );
};

export default Home;
