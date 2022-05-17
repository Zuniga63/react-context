import React from "react";
import Characters from "../components/Characters";
import Episodes from "../components/Episodes";
import Header from "../components/Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className="home__content">
        <Episodes />
        <Characters />
      </div>
    </>
  );
};

export default Home;
