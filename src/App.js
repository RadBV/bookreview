import {BrowserRouter,Routes,Route} from "react-router-dom";
import BookDetail from "./components/bookDetail/BookDetail";
import BookManagement from "./pages/bookManagement/BookManagement";
import BookForm from "./components/bookForm/BookForm";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    refreshBooks()
  },[])
  
  const refreshBooks = () => {
    let url = "https://bookreview-backend.herokuapp.com/books"
        
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setBooks(data);
     });
        
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/addBook' element={<BookForm refreshBooks={refreshBooks}/>}/>
          <Route path='/' element={<BookManagement/>}/>
          <Route path='/book/:id' element={<BookDetail/>}/>
  
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
