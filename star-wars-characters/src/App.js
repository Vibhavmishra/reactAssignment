import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import './styles/App.css';
import starWarsLogo from './assets/star-wars-logo.svg';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ type: '', value: '' });
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchCharacters(page, search, filter);
  }, [page, search, filter]);

  const fetchCharacters = async (page, search, filter) => {
    setLoading(true);
    try {
      let url = `https://swapi.dev/api/people/?page=${page}`;
      if (search) {
        url += `&search=${search}`;
      }
      const response = await axios.get(url);
      setCharacters(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10));
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch data. Please try again later.');
      setLoading(false);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const [type, value] = e.target.value.split(':');
    setFilter({ type, value });
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={starWarsLogo} className="App-logo" alt="Star Wars logo" />
        <h1>Star Wars Characters</h1>
      </header>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search characters"
          value={search}
          onChange={handleSearchChange}
        />
        <select onChange={handleFilterChange}>
          <option value="">Filter by</option>
          <option value="homeworld:Tatooine">Homeworld: Tatooine</option>
          <option value="film:A New Hope">Film: A New Hope</option>
          <option value="species:Human">Species: Human</option>
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="character-list">
          {characters.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onClick={() => handleCardClick(character)}
            />
          ))}
        </div>
      )}
      <div className="pagination-container">
        <Pagination
          totalPages={totalPages}
          page={page}
          handlePageChange={handlePageChange}
        />
      </div>
      {selectedCharacter && (
        <CharacterModal
          open={modalOpen}
          handleClose={handleCloseModal}
          character={selectedCharacter}
        />
      )}
    </div>
  );
}

export default App;


