import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');

    return (
        <div className='container mt-2 search-results-page'>
            <h1>Search results for: {searchQuery}</h1>
        </div>
    );
};

export default SearchResults;
