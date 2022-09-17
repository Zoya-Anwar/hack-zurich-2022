import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import CVUpload from './pages/CVUpload';

import { Tab, Tabs } from '@mui/material';
import TaskMatch from './pages/Task';
import EventMatch from './pages/Event';

import HomePage from './pages/Homepage';

function App() {
	return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/cv" element={<CVUpload />} />

                <Route path="/task" element={<TaskMatch />} />
                <Route path="/event" element={<EventMatch />} />

            </Routes>
        </Router>
	);
}

export default App;
