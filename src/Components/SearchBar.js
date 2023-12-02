import React, { useState } from 'react';
import axios from 'axios';
import '../StyleComponent/SearchBar.css';
import SortOptions from './SortOptions';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      onSearch(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <SortOptions onSort={handleSort} />
    </div>
  );
};

export default SearchBar;
