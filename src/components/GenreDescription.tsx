import React, { useEffect, useState } from 'react';
import '../styles/GenreDescription.css';
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
            GameService.getGenreDetails(genreId)
                .then((data) => {
                    data.description = data.description.replace('<p>', '').replace('</p>', '');
                    setGenreDetails(data);
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
            <h2 className='genre-name'>{genre?.name}</h2>
            <img src={genre?.image_background} className='genre-image'></img>
            <p className='genre-description'>{genre?.description}</p>
        </>
    );
};

export default GenreDescription;
