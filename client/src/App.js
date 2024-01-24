import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../src/pages/HomePage';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import '../src/App.css';
import User from '../src/pages/User';
import Watchlist from '../src/components/movies/WatchList';
import Favorites from '../src/components/movies/Favorites';
import LoginPage from './pages/LoginPage';
import TestPage from './pages/TestPage';
import TrendingPage from './pages/TrendingPage';
import ActionPage from './pages/ActionPage';
import AnimationPage from './pages/AnimationPage';
import ComedyPage from './pages/ComedyPage';
import DramaPage from './pages/DramaPage';
import FamilyPage from './pages/FamilyPage';
import HorrorPage from './pages/HorrorPage';
import RomancePage from './pages/RomancePage';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/trendingmovies" element={<TrendingPage />} />
        <Route path="/actionmovies" element={<ActionPage />} />
        <Route path="/animationmovies" element={<AnimationPage />} />
        <Route path="/comedymovies" element={<ComedyPage />} />
        <Route path="/dramamovies" element={<DramaPage />} />
        <Route path="/familymovies" element={<FamilyPage />} />
        <Route path="/horrormovies" element={<HorrorPage />} />
        <Route path="/romancemovies" element={<RomancePage />} />
        <Route path="/User" element={<User />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="/User/:userId/favorites" element={<Favorites />} />
        <Route path="/User/:userId/watchlist" element={<Watchlist />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
