import React from 'react';
import '../styles/GameCard.css';
import { GameResult } from '../models/GameModel';
import { Link } from 'react-router-dom';

const GameCard = (game: GameResult) => {
    return (
        <>
            <div className='card game-card'>
                <img src={game.short_screenshots[0].image} className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>{game.name}</h5>
                    <p className='card-text'>Platforms: {game.parent_platforms.map((platform) => platform.platform.name + ', ')}</p>
                    <Link to='/details'>
                        <a className='btn btn-primary details-button'>Details</a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default GameCard;
