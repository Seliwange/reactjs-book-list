import {Routes, Route} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import {AddBook} from './components/AddBook';
import {EditBook} from './components/EditBook';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth: "60rem", margin: "0 auto"}}>
      <GlobalProvider>
        <Routes>
          <Route path="reactjs-book-list/" element={<Dashboard />} />
          <Route path="reactjs-book-list/addbook" element={<AddBook/>} />
          <Route path="reactjs-book-list/edit/:id" element={<EditBook/>} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
