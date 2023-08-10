import React from 'react';
import GameCard from './GameCard';

const gameList = [
    {
        title: 'Game 1',
    },
    {
        title: 'Game 2',
    },
    {
        title: 'Game 3',
    },
];

const GameRow = () => {
    return (
        <>
            <h2>Game row header</h2>

            <div className='row row-cols-1 row-cols-md-5 g-3'>
                {gameList.map((game) => (
                    <div className='col'>
                        <GameCard title={game.title}></GameCard>
                    </div>
                ))}
            </div>

            <h2 className='mt-4'>Some other game row</h2>

            <div className='row row-cols-1 row-cols-md-5 g-3'>
                {gameList.map((game) => (
                    <div className='col'>
                        <GameCard title={game.title}></GameCard>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GameRow;
