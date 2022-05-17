import React from "react";

export const Character = ({ character }) => {
  return (
    <div className="card">
      <figure className="card__fig">
        <img src={character.image} alt={character.name} className="card__img" />
      </figure>
      <h2 className="card__title"> {character.name}</h2>
      <div className="card__body">
        <p className="card__paragraph">Estado: {character.status}</p>
        <p className="card__paragraph">Especie: {character.species}</p>
        <p className="card__paragraph">Genero: {character.gender}</p>
        <p className="card__paragraph">Origen: {character.origin?.name}</p>
        <p className="card__paragraph">Ubicación: {character.location?.name}</p>
      </div>
    </div>
  );
};
