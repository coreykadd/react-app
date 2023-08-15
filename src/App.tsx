// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import './App.css';
// import Alert from './components/Alert';
// import Button from './components/Button';
import Navbar from './components/Navbar';
import GameDetails from './pages/GameDetails';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import ListGroup from './components/ListGroup';

function App() {
    // const [alertVisible, setAlertVisibility] = useState(false);
    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    // const handleSelectItem = (item: string) => {
    //     console.log('item > ', item);
    // };

    const routing = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/details', element: <GameDetails /> },
        { path: '*', element: <NotFound /> }, // Default route for unmatched paths
      ]);

    return (
        <>
            <Navbar></Navbar>

            <Router>
                {routing}
            </Router>

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
