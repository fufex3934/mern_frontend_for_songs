import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes and Route from React Router v6
import SongList from "./components/SongList/SongList";
import AddSong from "./components/AddSong/AddSong";
import EditSong from "./components/EditSong/EditSong"; // Import EditSong if needed
import SongStats from "./components/SongStats/SongStats";

const App: React.FC = () => {
  return (
    <Router>
      <h1>MERN Songs</h1>
      <Routes>
        {/* Define routes using element prop with JSX */}
        <Route path="/" element={<SongList />} />
        <Route path="/add" element={<AddSong />} />
        <Route path="/edit/:id" element={<EditSong />} />{" "}
        {/* Define edit route */}
        <Route path="/stats" element={<SongStats />} />
      </Routes>
    </Router>
  );
};

export default App;
