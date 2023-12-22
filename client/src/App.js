import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../src/pages/HomePage';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import '../src/App.css';
import User from '../src/pages/User';
import Watchlist from '../src/components/Watchlist';
import Favorites from '../src/components/Favorites';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/User" element={<User />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="/User/:userId/favorites" element={<Favorites />} />
        <Route path="/User/:userId/watchlist" element={<Watchlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
