import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Table from './components/table/Table';

import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Table/>
      </div>
    </DndProvider>
  );
}

export default App;
