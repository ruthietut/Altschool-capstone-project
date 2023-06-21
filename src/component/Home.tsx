import React from 'react';
import NavBar from '../component/NavBar';
import Hero from '../component/Hero';
import Footer from '../component/Footer';
import FAQ from '../component/FAQ';
import Optimize from './Optimize';
import Url from './Url';


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Url/>
      <FAQ/>
      <Optimize/>
      <Footer />
    </>
  );
};

export default Home;