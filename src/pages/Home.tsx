import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import '../styles/Home.css';
import GameCard from '../components/GameCard';
import GameRow from '../components/GameRow';
import GameService from '../services/GameService';
import Button from '../components/Button';
import { GameResult } from '../models/GameModel';
import axios from 'axios';

const Home = () => {
    const [games, setGames] = useState<GameResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const source = axios.CancelToken.source();
        console.log('here');
        if (games.length === 0) {
            getGamesList();
        }

        return () => {
            source.cancel();
        };
    }, []);

    const getGamesList = () => {
        console.log('Calling methos');
        GameService.getGamesList()
            .then((data) => {
                setLoading(false);
                setGames(data.results);
                console.log('data > ', data);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <div className='container mt-2'>
                {/* <div className='carousel-container'><Carousel></Carousel></div> */}
                {games.length === 0 && <h1>No games found</h1>}
                {games.length > 0 && <GameRow games={games}></GameRow>}
            </div>
        </>
    );
};

export default Home;
