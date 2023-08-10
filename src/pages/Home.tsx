import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/Home.css';
import GameCard from '../components/GameCard';
import GameRow from '../components/GameRow';
import GameService from '../services/GameService';
import Button from '../components/Button';

const getGamesList = () => {
    console.log('Calling methos');
    GameService.getGamesList().then((data) => {
        console.log('data > ', data);
    });
};

const Home = () => {
    return (
        <>
            <div className='container mt-2'>
                <div className='carousel-container'>
                    {/* <Carousel></Carousel> */}
                    {/* <GameRow></GameRow> */}
                </div>

                <Button onClick={getGamesList}>
                    Get Games
                </Button>
            </div>
        </>
    );
};

export default Home;
