import { createContext, useState } from "react";
import axios from "axios";

export const RickAndMortyContex = createContext();

export const RickAndMortyProvider = ({ children }) => {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  const getEpisodes = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/episode");
      //console.log(res.data);
      setEpisodes(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getCharacters = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      //console.log(res.data);
      setCharacters(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = async () => {
    getCharacters();
    getEpisodes();
  };

  return (
    <RickAndMortyContex.Provider
      value={{
        episodes,
        characters,
        handleData,
      }}
    >
      {children}
    </RickAndMortyContex.Provider>
  );
};
