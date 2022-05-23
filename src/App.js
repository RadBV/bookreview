import {BrowserRouter,Routes,Route} from "react-router-dom";
import BookDetail from "./components/bookDetail/BookDetail";
import BookManagement from "./pages/bookManagement/BookManagement";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<BookManagement/>}/>
          <Route path='/book/:id' element={<BookDetail/>}/>
  
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
