import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import CVUpload from './pages/CVUpload';
import { Tabs, Tab } from '@mui/material';

function App() {
	return (
        <Router>
            	<div style={{display:'flex',
			height: '100vh',
			flexDirection:'column',
			backgroundColor: 'white',
			width: '390px',

}}> 

	<div id="wrapper" style={{
				flex:'1',
				overflowY: 'scroll',
				backgroundColor: 'white',
			}}>
                            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cv" element={<CVUpload />} />
            </Routes>
            </div>

        
            <div >
            <Tabs value={'a'} onChange={(c)=>{

            }} aria-label="nav tabs example">
			
			<Link to='/cv'>
				
			<Tab  label="Item One" aria-label="phone" />
			</Link>

			<Link to='/'>
            <Tab  label="Item One"  aria-label="aa" />
			</Link>
            <Tab label="Item One" aria-label="cc" />
            </Tabs>
            </div>

        </div>
        </Router>
	);
}

export default App;
