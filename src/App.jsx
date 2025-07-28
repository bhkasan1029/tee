// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Story from './pages/Story';
import Memories from './pages/Memories';
import Playlist from './pages/Playlist';
import ComplimentGallery from './pages/ComplimentGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story" element={<Story />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/compliments" element={<ComplimentGallery />} />

      </Routes>
    </Router>
  );
}

export default App;

