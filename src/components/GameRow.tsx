import React from 'react';
import GameCard from './GameCard';
import { GameResult } from '../models/GameModel';

interface Props {
    games: GameResult[];
}

const GameRow = ({ games }: Props) => {
    console.log('games > ', games);
    return (
        <>
            <h2>Game row header</h2>

            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3'>
                {games.map((game) => (
                    <div className='col'>
                        <GameCard {...game}></GameCard>
                    </div>
                ))}
            </div>

            {/* <h2 className='mt-4'>Some other game row</h2>

            <div className='row row-cols-1 row-cols-md-5 g-3'>
                {games.map((game) => (
                    <div className='col'>
                        <GameCard {...game}></GameCard>
                    </div>
                ))}
            </div> */}
        </>
    );
};

export default GameRow;
