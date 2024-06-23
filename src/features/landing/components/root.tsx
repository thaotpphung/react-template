import React from 'react';

import Benefits from './benefits';
import Footer from './footer';
import Header from './header';
import Hero from './hero';
import Pricing from './pricing';
import Services from './services';

const Landing = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Landing;
