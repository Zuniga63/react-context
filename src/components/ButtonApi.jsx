import React from "react";
import { useContext } from "react";
import { RickAndMortyContex } from "../store/RickAndMortyContex";

const ButtonApi = () => {
  const { handleData } = useContext(RickAndMortyContex);
  return (
    <button className="button-api" onClick={handleData}>
      Recucperar Información
    </button>
  );
};

export default ButtonApi;
