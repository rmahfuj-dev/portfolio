import React, { useState, useEffect } from "react";
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
import LoadingScreen from "./components/team/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="bg-base-300 min-h-screen">
          <Header />
          <Hero />
          <Service />
          <Skill />
          <Education />
          <Client />
          <Team />
          <Contact />
          <About />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
