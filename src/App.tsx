import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SongList from "./components/SongList/SongList";
import AddSong from "./components/AddSong/AddSong";
import EditSong from "./components/EditSong/EditSong";
import SongStats from "./components/SongStats/SongStats";

const App: React.FC = () => {
  return (
    <Router>
      <h1>Full Stack MERN Songs Application</h1>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/add" element={<AddSong />} />
        <Route path="/edit/:id" element={<EditSong />} />{" "}
        <Route path="/stats" element={<SongStats />} />
      </Routes>
    </Router>
  );
};

export default App;
