import React from 'react';
import './Pokecard.css';
const Pokecard = () => {
  const style = {
    backgroundColor: '#232344',
    width: '300px',
    padding: '5px 0',
    fontColor: '#fff',
    border: '2px solid red',
    borderRadius: '10px',
  };
  return (
    <div style={style}>
      <h1>Charmander</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
        alt=""
      />
      <p>Type: fire</p>
      <p>EXP: 62</p>
    </div>
  );
};

export default Pokecard;
