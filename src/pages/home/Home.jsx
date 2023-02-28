import React from "react";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
