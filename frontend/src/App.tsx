import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CVUpload from './pages/CVUpload';

function App() {
	return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CVUpload />} />
            </Routes>
        </Router>
	);
}

export default App;
