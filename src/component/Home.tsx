import React from 'react';
import NavBar from '../component/NavBar';
import Hero from '../component/Hero';
import Footer from '../component/Footer';
import FAQ from '../component/FAQ';
import Optimize from './Optimize';


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FAQ/>
      <Optimize/>
      <Footer />
    </>
  );
};

export default Home;