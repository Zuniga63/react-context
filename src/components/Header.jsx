import React from "react";
import ButtonApi from "./ButtonApi";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Episodios y Personajes de Rick And Morty</h1>
      <ButtonApi />
    </header>
  );
};

export default Header;
