import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Asset from "./pages/Asset"
import Biling from "./pages/Biling"
import Profile from "./pages/Profile"
import Sources from "./pages/Sources"
import Invitations from "./pages/Invitations"
import './index.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Asset/>} />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/biling" element={<Biling/>} />
          <Route path="/sources" element={<Sources/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
