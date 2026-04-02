import React from 'react';
import {Routes,Route } from 'react-router-dom'
import Navbar from './data/Navbar'
import Hero from './data/Hero';
import About from './data/About'
import Skills from './data/Skills'
import Project from './data/Project'
import Contact from './data/Contact'
import Footer from './data/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

