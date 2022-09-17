import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import CVUpload from './pages/CVUpload';
import OnlineTask from './pages/OnlineTask'
import { Tabs, Tab } from '@mui/material';


function App() {
	return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cv" element={<CVUpload />} />
                <Route path="/onlinetask" element={<OnlineTask />} />
            </Routes>
        </Router>
	);
}

export default App;
