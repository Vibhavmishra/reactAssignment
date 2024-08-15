import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = ({ onSearch, onFilter }) => {
  const [term, setTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleSearch = () => {
    onSearch(term);
  };

  const handleFilterChange = (e) => {
    const [type, value] = e.target.value.split(':');
    setFilterType(type);
    setFilterValue(value);
    onFilter({ type, value });
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for a character"
      />
      <button onClick={handleSearch}>Search</button>
      <select value={`${filterType}:${filterValue}`} onChange={handleFilterChange}>
        <option value="">Select Filter</option>
        <option value="homeworld">Homeworld</option>
        <option value="film">Film</option>
        <option value="species">Species</option>
      </select>
    </div>
  );
};

export default SearchFilter;
