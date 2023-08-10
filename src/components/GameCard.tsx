import React from 'react';
import '../styles/GameCard.css'

interface Game {
    title: string;
}

const GameCard = ({ title }: Game) => {
    return (
        <>
            <div className='card game-card'>
                <img src='https://fakeimg.pl/300x150/' className='card-img-top' alt='...' />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>
                        Platforms: PC, Xbox Series X, Ps5, Switch
                    </p>
                    <a href='#' className='btn btn-primary details-button'>
                        Details
                    </a>
                </div>
            </div>
        </>
    );
};

export default GameCard;
