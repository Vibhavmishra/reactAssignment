import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const CharacterModal = ({ open, handleClose, character }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{character.name}</DialogTitle>
      <DialogContent>
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <p>Homeworld: {character.homeworld}</p>
        <p>Films: {character.films.join(', ')}</p>
        <p>Species: {character.species.join(', ')}</p>
        <p>Vehicles: {character.vehicles.join(', ')}</p>
        <p>Starships: {character.starships.join(', ')}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CharacterModal;
