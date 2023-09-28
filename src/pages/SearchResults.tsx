import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GameRow from '../components/GameRow';
import axios from 'axios';
import GameService from '../services/GameService';
import { GameResult } from '../models/GameModel';

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState<GameResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        console.log('effect search');
        setLoading(true);

        const getSearchResults = () => {
            console.log('Calling getSearchResults');
            GameService.getGamesList({ search: searchQuery })
                .then((data) => {
                    setLoading(false);
                    setSearchResults(data.results);
                    console.log('Search data > ', data);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        };

        const source = axios.CancelToken.source();
        getSearchResults();

        return () => {
            source.cancel();
        };
    }, [searchQuery]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='container mt-2 search-results-page'>
            <h1 className='mt-2 mb-3'>Search results for: {searchQuery}</h1>

            <GameRow games={searchResults}></GameRow>
        </div>
    );
};

export default SearchResults;
