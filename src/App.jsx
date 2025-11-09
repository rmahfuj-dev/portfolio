import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skill from "./components/skill/Skill";
import About from "./components/about/About";
import Client from "./components/client/Client";
import Education from "./components/education/Education";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Service from "./components/service/Service";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="bg-base-300 min-h-screen">
      <Header />
      <Hero />
      <Skill />
      <About />
      <Client />
      <Education />
      <Team />
      <Contact />
      <Service />
      <Footer />
    </div>
  );
};

export default App;
