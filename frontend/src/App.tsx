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
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/cv" element={<CVUpload />} />
				<Route path="/task" element={<TaskMatch />} />
				<Route path="/event" element={<EventMatch />} />

            </Routes>
            </div>

        
            <div >
            <Tabs value={'a'} onChange={(c)=>{

            }} aria-label="nav tabs example">
			
			<Link to='/homepage'>
				
			<Tab  label="Home" aria-label="phone" />
			</Link>

			<Link to='/task'>
            <Tab  label="Tasks"  aria-label="aa" />
			</Link>

			<Link to='/event'>
            <Tab label="Events" aria-label="cc" />
			</Link>

            </Tabs>
            </div>

        </div>
        </Router>
	);
}

export default App;
