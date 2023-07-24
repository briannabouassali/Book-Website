import './App.css';
import {Routes, Route} from 'react-router-dom';
import BookList from './Components/BookList';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Favorites from './Components/YourFavorites';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path = "/" element = {<BookList />} />
      <Route path = "/books/:id" element = {<BookDetails />} />
      <Route path="favorites" element={<Favorites />} /> 
      <Route path="home" element={<Home />} /> 
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
