import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Asset from "./pages/Asset"
import Biling from "./pages/Biling"
import Profile from "./pages/Profile"
import Sources from "./pages/Sources"
import Invistations from "./pages/Invistations"
import './index.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Asset/>} />
          <Route path="/invistations" element={<Invistations />} />
          <Route path="/biling" element={<Biling/>} />
          <Route path="/sources" element={<Sources/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
