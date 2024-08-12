// // // src/components/CharacterCard.js
// import React from 'react';
// import './CharacterCard.css';

// const CharacterCard = ({ character, onClick }) => {
//   return (
//     <div className="character-card" onClick={onClick}>
//       <h3>{character.name}</h3>
//       <img src={`https://randomuser.me/api/portraits/lego/${character.name.length % 10}.jpg`} alt={character.name} />
//       {/* Additional character info */}
//     </div>
//   );
// };

// export default CharacterCard;

// import React from 'react';
// import './CharacterCard.css';

// const CharacterCard = ({ character, onClick }) => {
//   return (
//     <div className="character-card" onClick={onClick}>
//       <h3>{character.name}</h3>
//       <img src={`https://randomuser.me/api/portraits/lego/${character.name.length % 10}.jpg`} alt={character.name} />
//     </div>
//   );
// };

// export default CharacterCard;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './CharacterCard.css';

// // const CharacterCard = ({ character }) => {
// //   const [imageUrl, setImageUrl] = useState('');

// //   useEffect(() => {
// //     // Fetch a random image from Unsplash
// //     const fetchImage = async () => {
// //       try {
// //         const response = await axios.get('https://source.unsplash.com/random/200x200/?star-wars');
// //         setImageUrl(response.request.responseURL);
// //       } catch (error) {
// //         console.error('Error fetching image', error);
// //       }
// //     };
// //     fetchImage();
// //   }, []);

// //   return (
// //     <div className="character-card">
// //       <img src={imageUrl} alt={character.name} className="character-image" />
// //       <h2>{character.name}</h2>
// //       <p>Height: {character.height} cm</p>
// //       <p>Mass: {character.mass} kg</p>
// //       <p>Hair Color: {character.hair_color}</p>
// //       <p>Skin Color: {character.skin_color}</p>
// //       <p>Eye Color: {character.eye_color}</p>
// //       <p>Birth Year: {character.birth_year}</p>
// //       <p>Gender: {character.gender}</p>
// //     </div>
// //   );
// // };

// // export default CharacterCard;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CharacterModal from './CharacterModal';
// import './CharacterCard.css';

// const CharacterCard = ({ character }) => {
//   const [imageUrl, setImageUrl] = useState('');
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get('https://source.unsplash.com/random/200x200/?star-wars');
//         setImageUrl(response.request.responseURL);
//       } catch (error) {
//         console.error('Error fetching image', error);
//       }
//     };
//     fetchImage();
//   }, []);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <div className="character-card" onClick={handleClickOpen}>
//         <img src={imageUrl} alt={character.name} className="character-image" />
//         <h2>{character.name}</h2>
//       </div>
//       <CharacterModal open={open} handleClose={handleClose} character={character} />
//     </>
//   );
// };

// export default CharacterCard;


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
