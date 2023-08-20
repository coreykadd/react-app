// import { useState } from 'react';
import { Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
// import Alert from './components/Alert';
// import Button from './components/Button';
import Navbar from './components/Navbar';
import GameDetails from './pages/GameDetails';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Genres from './pages/Genres';
// import ListGroup from './components/ListGroup';

function App() {
    // const [alertVisible, setAlertVisibility] = useState(false);
    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    // const handleSelectItem = (item: string) => {
    //     console.log('item > ', item);
    // };

    return (
        <>
            <Navbar></Navbar>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/gameDetails' element={<GameDetails />} />
                <Route path='/genres' element={<Genres />} />
                <Route path='*' element={<NotFound />} /> {/* 404 Not Found */}
            </Routes>

            {/* <Home></Home> */}
            {/* { alertVisible &&
                <Alert onClose={() => setAlertVisibility(false)}>
                    Yes <span>ya</span>
                </Alert>
            } */}

            {/* <Button onClick={() => setAlertVisibility(true)}>A button</Button> */}
            {/* <ListGroup items={items} heading="Items" onSelectItem={handleSelectItem} /> */}
        </>
    );
}

export default App;
