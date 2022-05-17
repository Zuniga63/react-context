import React from "react";

export const Episode = ({ episode }) => {
  return (
    <div className="card">
      <h2 className="card__title">
        {episode.name} - {episode.episode}
      </h2>
      <div className="card__body">
        <p className="card__paragraph">Emitido: {episode.air_date}</p>
        <p className="card__paragraph">Personajes: {episode.characters.length}</p>
      </div>
    </div>
  );
};
