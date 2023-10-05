import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GameService from '../services/GameService';
import { GenreResults } from '../models/GenreModel';
import GenreDescription from '../components/GenreDescription';

const Genres = () => {
    const [genres, setGenres] = useState<GenreResults[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedGenreId, setGenreId] = useState<number>(0);

    useEffect(() => {
        setLoading(true);

        const source = axios.CancelToken.source();
        console.log('here');
        if (genres.length === 0) {
            getGenres();
        }

        return () => {
            source.cancel();
        };
    }, []);

    const getGenres = () => {
        console.log('Calling getGenres');
        GameService.getGenres()
            .then((data) => {
                setLoading(false);
                setGenres(data.results);
                console.log('genres data > ', data);
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
                <div className='row'>
                    <div className='col'>
                        {genres.map((genre) => (
                            <div key={genre.id} className='list-group'>
                                <button
                                    type='button'
                                    className='list-group-item list-group-item-action'
                                    onClick={() => setGenreId(genre.id)}>
                                    {genre.name}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className='col'>
                        <GenreDescription genreId={selectedGenreId}></GenreDescription>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Genres;
