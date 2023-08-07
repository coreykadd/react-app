import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
// import ListGroup from './components/ListGroup';

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    // const handleSelectItem = (item: string) => {
    //     console.log('item > ', item);
    // };

    return (
        <div>
            { alertVisible &&
                <Alert onClose={() => setAlertVisibility(false)}>
                    Yes <span>ya</span>
                </Alert>
            }

            <Button onClick={() => setAlertVisibility(true)}>A button</Button>
            {/* <ListGroup items={items} heading="Items" onSelectItem={handleSelectItem} /> */}
        </div>
    );
}

export default App;
