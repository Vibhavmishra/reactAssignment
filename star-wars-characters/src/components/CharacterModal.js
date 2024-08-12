// // import React from 'react';
// // import './CharacterModal.css';

// // const CharacterModal = ({ character, onClose }) => {
// //   const [homeworld, setHomeworld] = React.useState('');
// //   const [films, setFilms] = React.useState([]);
// //   const [species, setSpecies] = React.useState([]);
// //   const [vehicles, setVehicles] = React.useState([]);

// //   React.useEffect(() => {
// //     const fetchDetails = async () => {
// //       try {
// //         const homeworldResponse = await fetch(character.homeworld);
// //         const homeworldData = await homeworldResponse.json();
// //         setHomeworld(homeworldData.name);

// //         const filmsResponses = await Promise.all(character.films.map(url => fetch(url).then(res => res.json())));
// //         setFilms(filmsResponses.map(film => film.title));

// //         const speciesResponses = await Promise.all(character.species.map(url => fetch(url).then(res => res.json())));
// //         setSpecies(speciesResponses.map(species => species.name));

// //         const vehiclesResponses = await Promise.all(character.vehicles.map(url => fetch(url).then(res => res.json())));
// //         setVehicles(vehiclesResponses.map(vehicle => vehicle.name));
// //       } catch (error) {
// //         console.error('Error fetching details:', error);
// //       }
// //     };

// //     fetchDetails();
// //   }, [character]);

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal-content">
// //         <button className="modal-close" onClick={onClose}>X</button>
// //         <h2>{character.name}</h2>
// //         <p><strong>Height:</strong> {character.height} cm</p>
// //         <p><strong>Mass:</strong> {character.mass} kg</p>
// //         <p><strong>Hair Color:</strong> {character.hair_color}</p>
// //         <p><strong>Skin Color:</strong> {character.skin_color}</p>
// //         <p><strong>Eye Color:</strong> {character.eye_color}</p>
// //         <p><strong>Birth Year:</strong> {character.birth_year}</p>
// //         <p><strong>Gender:</strong> {character.gender}</p>
// //         <p><strong>Homeworld:</strong> {homeworld}</p>
// //         <p><strong>Films:</strong> {films.join(', ')}</p>
// //         <p><strong>Species:</strong> {species.join(', ')}</p>
// //         <p><strong>Vehicles:</strong> {vehicles.join(', ')}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CharacterModal;


// import React from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';

// const CharacterModal = ({ open, handleClose, character }) => {
//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>{character.name}</DialogTitle>
//       <DialogContent>
//         <p>Height: {character.height} cm</p>
//         <p>Mass: {character.mass} kg</p>
//         <p>Hair Color: {character.hair_color}</p>
//         <p>Skin Color: {character.skin_color}</p>
//         <p>Eye Color: {character.eye_color}</p>
//         <p>Birth Year: {character.birth_year}</p>
//         <p>Gender: {character.gender}</p>
//         <p>Homeworld: {character.homeworld}</p>
//         <p>Films: {character.films.join(', ')}</p>
//         <p>Species: {character.species.join(', ')}</p>
//         <p>Vehicles: {character.vehicles.join(', ')}</p>
//         <p>Starships: {character.starships.join(', ')}</p>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Close</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default CharacterModal;


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
