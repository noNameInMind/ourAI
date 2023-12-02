import React from "react";
import {
  AboutUs,
  CTA,
  Cards,
  Footer,
  Header,
  Logo,
  Navbar,
} from "./Containers";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <div className="blur1" />
      <div className="blur2" />
      <Navbar />
      <Header />
      <Logo />
      <AboutUs />
      <Cards />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
