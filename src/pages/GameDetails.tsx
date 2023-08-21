import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../models/GameModel';
import GameService from '../services/GameService';
import '../styles/GameDetails.css';

const GameDetails = () => {
    const { id } = useParams();
    const [game, setGame] = useState<Game>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const source = axios.CancelToken.source();
        console.log('here');
        if (!game) {
            getGame();
        }

        return () => {
            source.cancel();
        };
    }, []);

    const getGame = () => {
        console.log('Calling methos');
        GameService.getGameDetails(id as string)
            .then((data) => {
                setLoading(false);
                console.log('data 2 > ', data);
                setGame(data);
            })
            .catch((error) => {
                console.log('err > ', error);
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
            <div className='row mt-4 mx-2'>
                <div className='col-sm text-center mb-3 mb-sm-0'>
                    <img src={game?.background_image} className='game-image' />
                </div>

                <div className='col-sm'>
                    <h1>{game?.name}</h1>
                    <p>{game?.description_raw}</p>

                    <ul>
                        <li>Release date: {game?.released}</li>
                        <li>Platforms: {game?.platforms.map((platform) => platform.platform.name + ', ')}</li>
                        <li>Developers: {game?.developers.map((developer) => developer.name + ', ')}</li>
                        <li>Publishers: {game?.publishers.map((publisher) => publisher.name + ', ')}</li>
                        <li>Tags: {game?.tags.map((tag) => tag.name + ', ')}</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default GameDetails;
