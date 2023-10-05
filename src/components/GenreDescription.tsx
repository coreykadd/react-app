import React, { useEffect, useState } from 'react';
import { GenreDetails } from '../models/GenreModel';
import GameService from '../services/GameService';

interface Props {
    genreId: number;
}

const GenreDescription = ({ genreId }: Props) => {
    const [genre, setGenreDetails] = useState<GenreDetails>();
    const [error, setError] = useState(null);

    useEffect(() => {
        const getGenreDetails = () => {
            console.log('Calling genre description');
            GameService.getGenreDetails(genreId)
                .then((data) => {
                    setGenreDetails(data);
                    console.log('desc data > ', data);
                })
                .catch((error) => {
                    setError(error);
                });
        };

        if (genreId) {
            getGenreDetails();
        }
    }, [genreId]);

    return (
        <>
            <div>{genre?.name}</div>
            <div>{genre?.description}</div>
        </>
    );
};

export default GenreDescription;
