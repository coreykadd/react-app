import './App.css';
import ListGroup from './components/ListGroup';

function App() {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    const handleSelectItem = (item: string) => {
        console.log('item > ', item);
    };

    return (
        <div>
            <ListGroup items={items} heading="Items" onSelectItem={handleSelectItem} />
        </div>
    );
}

export default App;
