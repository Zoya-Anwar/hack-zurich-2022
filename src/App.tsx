import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CVUpload from './pages/CVUpload';
import { Tabs, Tab } from '@mui/material';

function App() {
	return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cv" element={<CVUpload />} />
            </Routes>

            <Tabs value={'a'} onChange={(c)=>{
                
                
            }} aria-label="nav tabs example">
            <Tab   label="Item One" aria-label="phone"  />
            <Tab  label="Item One"  aria-label="aa" />
            <Tab label="Item One" aria-label="cc" />
            </Tabs>
        </Router>
	);
}

export default App;
