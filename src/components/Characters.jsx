import React from "react";
import { useContext } from "react";
import { RickAndMortyContex } from "../store/RickAndMortyContex";
import { Character } from "./Character";

function Characters() {
  const { characters } = useContext(RickAndMortyContex);
  return (
    <div className="episodes__content">
      {characters.map((item) => {
        return <Character key={item.id} character={item} />;
      })}
    </div>
  );
}

export default Characters;
