import { useContext } from "react";
import { RickAndMortyContex } from "../store/RickAndMortyContex";
import { Episode } from "./Episode";

const Episodes = () => {
  const { episodes } = useContext(RickAndMortyContex);
  return (
    <div className="episodes__content">
      {episodes.map((item) => {
        return <Episode key={item.id} episode={item} />;
      })}
    </div>
  );
};

export default Episodes;
