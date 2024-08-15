import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="character-card" onClick={onClick}>
      <h3>{character.name}</h3>
      <img src={`https://randomuser.me/api/portraits/lego/${character.name.length % 10}.jpg`} alt={character.name} />
    </div>
  );
};

export default CharacterCard;
