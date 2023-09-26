import React from 'react'
import { useState } from 'react';
import Contact from '../Assets/CSS/Search.css'

function SearchPage() {
  {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = () => {
      // You can implement the search logic here, e.g., fetch search results from an API.
      // For this example, we'll just update the state with some dummy results.
      const dummyResults = [
        "Result 1",
        "Result 2",
        "Result 3",
        "Result 4",
      ];
      setSearchResults(dummyResults);
    };
  
    return (
      <div className="search-container">
        <h2>Search Page</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter your search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div key={index} className="search-result">
              {result}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage