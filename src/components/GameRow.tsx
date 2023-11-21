import React from 'react';
import GameCard from './GameCard';
import { GameResult } from '../models/GameModel';

interface Props {
    games: GameResult[];
    rowHeader?: string;
}

const GameRow = ({ games, rowHeader }: Props) => {
    return (
        <>
            <h2>{rowHeader}</h2>

            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3'>
                {games.map((game) => (
                    <div className='col' key={game.id}>
                        <GameCard {...game}></GameCard>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GameRow;
