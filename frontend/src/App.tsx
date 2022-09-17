import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link, useLocation } from 'react-router-dom';

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
				backgroundColor: '#15083E',
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
				<TabBar/>
        	</div>
        </Router>
	);
}


function TabBar (){

	const location= useLocation()
	console.log(location);

	if(location.pathname==='/'){
		return <></>
	}
	return  (<div  className='bg-white'>
	<Tabs value={'a'} onChange={(c)=>{

	}} aria-label="nav tabs example">
	
	<Link to='/homepage'>
		
	<Tab  label="Home" aria-label="homepage" />
	</Link>

	<Link to='/task'>
	<Tab  label="Tasks"  aria-label="task finder" />
	</Link>

	<Link to='/event'>
	<Tab label="Events" aria-label="event finder" />
	</Link>

	</Tabs>
	</div>);
}


export default App;
