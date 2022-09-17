import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import CVUpload from './pages/CVUpload';
import { Tab, Tabs } from '@mui/material';

function App() {
	return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cv" element={<CVUpload />} />
            </Routes>
        </Router>
	);
}

export default App;
