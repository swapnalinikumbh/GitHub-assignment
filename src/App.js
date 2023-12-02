import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import RepoCard from './Components/RepoCard';

import './App.css';
const App = () => {
  const [repos, setRepos] = useState([]);

  const handleSearch = (data) => {
    setRepos(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default App;
