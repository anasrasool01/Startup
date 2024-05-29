import React from "react";
import "./App.css";
import Header from "./components/Header/header";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
import Prefooter from "./components/PreFooter/prefooter";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Header/>
      {/* <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />*/}
      <Prefooter/>
      <Footer />
    </div>
  );
}

export default App;
