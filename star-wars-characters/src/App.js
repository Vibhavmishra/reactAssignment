// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Loader from './components/Loader';
// // import Error from './components/Error';
// // import CharacterCard from './components/CharacterCard';
// // import Pagination from './components/Pagination';
// // import SearchFilter from './components/SearchFilter';
// // import CharacterModal from './components/CharacterModal';
// // import './styles/App.css';

// // const fetchAllCharacters = async () => {
// //   let characters = [];
// //   let nextPage = 'https://swapi.dev/api/people/';
  
// //   while (nextPage) {
// //     const response = await axios.get(nextPage);
// //     characters = characters.concat(response.data.results);
// //     nextPage = response.data.next;
// //   }

// //   return characters;
// // };

// // const fetchDetails = async (urls) => {
// //   const requests = urls.map(url => axios.get(url));
// //   const responses = await Promise.all(requests);
// //   return responses.map(res => res.data);
// // };

// // const fetchFilterOptions = async () => {
// //   const homeworlds = [];
// //   const films = [];
// //   const species = [];

// //   const homeworldResponse = await axios.get('https://swapi.dev/api/planets/');
// //   homeworlds.push(...homeworldResponse.data.results.map(planet => ({ name: planet.name, url: planet.url })));

// //   const filmResponse = await axios.get('https://swapi.dev/api/films/');
// //   films.push(...filmResponse.data.results.map(film => ({ title: film.title, url: film.url })));

// //   const speciesResponse = await axios.get('https://swapi.dev/api/species/');
// //   species.push(...speciesResponse.data.results.map(species => ({ name: species.name, url: species.url })));

// //   return { homeworlds, films, species };
// // };

// // function App() {
// //   const [characters, setCharacters] = useState([]);
// //   const [filteredCharacters, setFilteredCharacters] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedFilter, setSelectedFilter] = useState({ type: '', value: '' });
// //   const [filterOptions, setFilterOptions] = useState({ homeworlds: [], films: [], species: [] });
// //   const [selectedCharacter, setSelectedCharacter] = useState(null);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10;

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       setError(null);
// //       try {
// //         const allCharacters = await fetchAllCharacters();
// //         setCharacters(allCharacters);
// //         setFilteredCharacters(allCharacters);
// //         const options = await fetchFilterOptions();
// //         setFilterOptions(options);
// //       } catch (err) {
// //         setError('Failed to fetch data');
// //       }
// //       setLoading(false);
// //     };

// //     fetchData();
// //   }, []);

// //   const handleSearch = (term) => {
// //     setSearchTerm(term);
// //     filterCharacters(term, selectedFilter);
// //   };

// //   const handleFilter = (filter) => {
// //     setSelectedFilter(filter);
// //     filterCharacters(searchTerm, filter);
// //   };

// //   const filterCharacters = async (term, filter) => {
// //     let filtered = characters;

// //     if (term) {
// //       filtered = filtered.filter(character => character.name.toLowerCase().includes(term.toLowerCase()));
// //     }

// //     if (filter.type) {
// //       const { type, value } = filter;

// //       if (type === 'homeworld') {
// //         filtered = await Promise.all(filtered.map(async character => {
// //           const homeworld = await axios.get(character.homeworld);
// //           return homeworld.data.name === value ? character : null;
// //         }));
// //       } else if (type === 'film') {
// //         filtered = await Promise.all(filtered.map(async character => {
// //           const films = await fetchDetails(character.films);
// //           const filmTitles = films.map(film => film.title);
// //           return filmTitles.includes(value) ? character : null;
// //         }));
// //       } else if (type === 'species') {
// //         filtered = await Promise.all(filtered.map(async character => {
// //           const species = await fetchDetails(character.species);
// //           const speciesNames = species.map(species => species.name);
// //           return speciesNames.includes(value) ? character : null;
// //         }));
// //       }

// //       filtered = filtered.filter(character => character !== null);
// //     }

// //     setFilteredCharacters(filtered);
// //   };

// //   const handlePageChange = (page) => {
// //     setCurrentPage(page);
// //   };

// //   const handleCharacterClick = (character) => {
// //     setSelectedCharacter(character);
// //   };

// //   const displayedCharacters = filteredCharacters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

// //   return (
// //     <div className="App">
// //       <SearchFilter
// //         onSearch={handleSearch}
// //         onFilter={handleFilter}
// //         filterOptions={filterOptions}
// //       />
// //       {loading && <Loader />}
// //       {error && <Error message={error} />}
// //       <div className="character-list">
// //         {displayedCharacters.map(character => (
// //           <CharacterCard
// //             key={character.name}
// //             character={character}
// //             onClick={() => handleCharacterClick(character)}
// //           />
// //         ))}
// //       </div>
// //       <Pagination 
// //         currentPage={currentPage} 
// //         onPageChange={handlePageChange} 
// //         totalItems={filteredCharacters.length} 
// //         itemsPerPage={itemsPerPage} 
// //       />
// //       {selectedCharacter && (
// //         <CharacterModal
// //           character={selectedCharacter}
// //           onClose={() => setSelectedCharacter(null)}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // export default App;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Loader from './components/Loader';
// import Error from './components/Error';
// import CharacterCard from './components/CharacterCard';
// import Pagination from './components/Pagination1';
// import SearchFilter from './components/SearchFilter';
// import CharacterModal from './components/CharacterModal';
// import './styles/App.css';


// const fetchAllCharacters = async () => {
//   let characters = [];
//   let nextPage = 'https://swapi.dev/api/people/';
  
//   while (nextPage) {
//     const response = await axios.get(nextPage);
//     characters = characters.concat(response.data.results);
//     nextPage = response.data.next;
//   }

//   return characters;
// };

// const fetchDetails = async (urls) => {
//   const requests = urls.map(url => axios.get(url));
//   const responses = await Promise.all(requests);
//   console.log('Fetched details:', responses.map(res => res.data)); // Log responses
//   return responses.map(res => res.data);
// };

// const fetchFilterOptions = async () => {
//   const homeworlds = [];
//   const films = [];
//   const species = [];

//   const homeworldResponse = await axios.get('https://swapi.dev/api/planets/');
//   homeworlds.push(...homeworldResponse.data.results.map(planet => ({ name: planet.name, url: planet.url })));

//   const filmResponse = await axios.get('https://swapi.dev/api/films/');
//   films.push(...filmResponse.data.results.map(film => ({ title: film.title, url: film.url })));

//   const speciesResponse = await axios.get('https://swapi.dev/api/species/');
//   species.push(...speciesResponse.data.results.map(species => ({ name: species.name, url: species.url })));

//   return { homeworlds, films, species };
// };

// function App() {
//   const [characters, setCharacters] = useState([]);
//   const [filteredCharacters, setFilteredCharacters] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState({ type: '', value: '' });
//   const [filterOptions, setFilterOptions] = useState({ homeworlds: [], films: [], species: [] });
//   const [selectedCharacter, setSelectedCharacter] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const allCharacters = await fetchAllCharacters();
//         setCharacters(allCharacters);
//         setFilteredCharacters(allCharacters);
//         const options = await fetchFilterOptions();
//         setFilterOptions(options);
//       } catch (err) {
//         setError('Failed to fetch data');
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     filterCharacters(term, selectedFilter);
//   };

//   const handleFilter = (filter) => {
//     setSelectedFilter(filter);
//     filterCharacters(searchTerm, filter);
//   };

//   const filterCharacters = async (term, filter) => {
//     let filtered = characters;

//     // Filter by search term
//     if (term) {
//       filtered = filtered.filter(character => character.name.toLowerCase().includes(term.toLowerCase()));
//     }

//     // Filter by selected filter criteria
//     if (filter.type) {
//       const { type, value } = filter;

//       if (type === 'homeworld') {
//         filtered = await Promise.all(filtered.map(async character => {
//           const homeworld = await axios.get(character.homeworld);
//           return homeworld.data.name === value ? character : null;
//         }));
//       } else if (type === 'film') {
//         filtered = await Promise.all(filtered.map(async character => {
//           const films = await fetchDetails(character.films);
//           const filmTitles = films.map(film => film.title);
//           return filmTitles.includes(value) ? character : null;
//         }));
//       } else if (type === 'species') {
//         filtered = await Promise.all(filtered.map(async character => {
//           const speciesData = await fetchDetails(character.species);
//           const speciesNames = speciesData.map(species => species.name);
//           return speciesNames.includes(value) ? character : null;
//         }));
//       }

//       // Remove null values from filtered results
//       filtered = filtered.filter(character => character !== null);
//     }

//     setFilteredCharacters(filtered);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleCharacterClick = (character) => {
//     setSelectedCharacter(character);
//   };

//   const displayedCharacters = filteredCharacters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <div className="App">
//       <SearchFilter
//         onSearch={handleSearch}
//         onFilter={handleFilter}
//         filterOptions={filterOptions}
//       />
//       {loading && <Loader />}
//       {error && <Error message={error} />}
//       <div className="character-list">
//         {displayedCharacters.map(character => (
//           <CharacterCard
//             key={character.name}
//             character={character}
//             onClick={() => handleCharacterClick(character)}
//           />
//         ))}
//       </div>
//       <Pagination 
//         currentPage={currentPage} 
//         onPageChange={handlePageChange} 
//         totalItems={filteredCharacters.length} 
//         itemsPerPage={itemsPerPage} 
//       />
//       {selectedCharacter && (
//         <CharacterModal
//           character={selectedCharacter}
//           onClose={() => setSelectedCharacter(null)}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Pagination from './components/Pagination';
// import CharacterCard from './components/CharacterCard';
// import './styles/App.css';
// import starWarsLogo from './assets/star-wars-logo.svg';

// function App() {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState({ type: '', value: '' });

//   useEffect(() => {
//     fetchCharacters(page, search, filter);
//   }, [page, search, filter]);

//   const fetchCharacters = async (page, search, filter) => {
//     setLoading(true);
//     try {
//       let url = `https://swapi.dev/api/people/?page=${page}`;
//       if (search) {
//         url += `&search=${search}`;
//       }
//       const response = await axios.get(url);
//       setCharacters(response.data.results);
//       setTotalPages(Math.ceil(response.data.count / 10));
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to fetch data. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     const [type, value] = e.target.value.split(':');
//     setFilter({ type, value });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={starWarsLogo} className="App-logo" alt="Star Wars logo" />
//         <h1>Star Wars Characters</h1>
//       </header>
//       <div className="search-filter">
//         <input
//           type="text"
//           placeholder="Search characters"
//           value={search}
//           onChange={handleSearchChange}
//         />
//         <select onChange={handleFilterChange}>
//           <option value="">Filter by</option>
//           <option value="homeworld:Tatooine">Homeworld: Tatooine</option>
//           <option value="film:A New Hope">Film: A New Hope</option>
//           <option value="species:Human">Species: Human</option>
//         </select>
//       </div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <div className="character-list">
//           {characters.map((character) => (
//             <CharacterCard key={character.name} character={character} />
//           ))}
//         </div>
//       )}
//       <Pagination
//         count={totalPages}
//         page={page}
//         onChange={handlePageChange}
//         color="primary"
//         className="pagination"
//       />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Pagination from './components/Pagination';
// import CharacterCard from './components/CharacterCard';
// import './styles/App.css';
// import starWarsLogo from './assets/star-wars-logo.svg';

// function App() {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState({ type: '', value: '' });

//   useEffect(() => {
//     fetchCharacters(page, search, filter);
//   }, [page, search, filter]);

//   const fetchCharacters = async (page, search, filter) => {
//     setLoading(true);
//     try {
//       let url = `https://swapi.dev/api/people/?page=${page}`;
//       if (search) {
//         url += `&search=${search}`;
//       }
//       const response = await axios.get(url);
//       setCharacters(response.data.results);
//       setTotalPages(Math.ceil(response.data.count / 10));
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to fetch data. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     const [type, value] = e.target.value.split(':');
//     setFilter({ type, value });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={starWarsLogo} className="App-logo" alt="Star Wars logo" />
//         <h1>Star Wars Characters</h1>
//       </header>
//       <div className="search-filter">
//         <input
//           type="text"
//           placeholder="Search characters"
//           value={search}
//           onChange={handleSearchChange}
//         />
//         <select onChange={handleFilterChange}>
//           <option value="">Filter by</option>
//           <option value="homeworld:Tatooine">Homeworld: Tatooine</option>
//           <option value="film:A New Hope">Film: A New Hope</option>
//           <option value="species:Human">Species: Human</option>
//         </select>
//       </div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <div className="character-list">
//           {characters.map((character) => (
//             <CharacterCard key={character.name} character={character} />
//           ))}
//         </div>
//       )}
//       <div className="pagination-container">
//         <Pagination
//           count={totalPages}
//           page={page}
//           onChange={handlePageChange}
//           color="primary"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Pagination from './components/Pagination';
// import CharacterCard from './components/CharacterCard';
// import './styles/App.css';
// import starWarsLogo from './assets/star-wars-logo.svg';

// function App() {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState({ type: '', value: '' });

//   useEffect(() => {
//     fetchCharacters(page, search, filter);
//   }, [page, search, filter]);

//   const fetchCharacters = async (page, search, filter) => {
//     setLoading(true);
//     try {
//       let url = `https://swapi.dev/api/people/?page=${page}`;
//       if (search) {
//         url += `&search=${search}`;
//       }
//       const response = await axios.get(url);
//       setCharacters(response.data.results);
//       setTotalPages(Math.ceil(response.data.count / 10));
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to fetch data. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     const [type, value] = e.target.value.split(':');
//     setFilter({ type, value });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={starWarsLogo} className="App-logo" alt="Star Wars logo" />
//         <h1>Star Wars Characters</h1>
//       </header>
//       <div className="search-filter">
//         <input
//           type="text"
//           placeholder="Search characters"
//           value={search}
//           onChange={handleSearchChange}
//         />
//         <select onChange={handleFilterChange}>
//           <option value="">Filter by</option>
//           <option value="homeworld:Tatooine">Homeworld: Tatooine</option>
//           <option value="film:A New Hope">Film: A New Hope</option>
//           <option value="species:Human">Species: Human</option>
//         </select>
//       </div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <div className="character-list">
//           {characters.map((character) => (
//             <CharacterCard key={character.name} character={character} />
//           ))}
//         </div>
//       )}
//       <div className="pagination-container">
//         <Pagination
//           count={totalPages}
//           page={page}
//           onChange={handlePageChange}
//           color="primary"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
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


