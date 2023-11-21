import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary px-3'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>
                        Games
                    </Link>

                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>
                                    Home
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link className='nav-link' to='/genres'>
                                    Genres
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Discover
                                </a>
                            </li>

                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Favourites
                                </a>
                            </li>
                        </ul>

                        <form className='d-flex' role='search' onSubmit={handleSearch}>
                            <input
                                className='form-control me-2'
                                type='search'
                                placeholder='Search...'
                                aria-label='Search'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            <button className='btn btn-outline-success' type='submit'>
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
