import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link, useLocation, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import CVUpload from './pages/CVUpload';
import { Tab, Tabs } from '@mui/material';
import TaskMatch from './pages/Task';
import EventMatch from './pages/Event';

import HomePage from './pages/Homepage';


import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {HomeIcon} from './resources/home-2'
import { CalenderIcon } from './resources/calendar';
import MessagesIcon from './resources/message-square-lines';
import { EventIcon } from './resources/event';
import { TaskIcon } from './resources/task';
import { ImportContacts } from '@mui/icons-material';



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
			<SimpleBottomNavigation/>

			{/* <TabBar/> */}

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



export  function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const location= useLocation()
	const navigate= useNavigate()
  if(location.pathname==='/'){
	  return <></>
  }
  return (
    <Box sx={{ width: '100%' ,paddingTop:'0'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {

          setValue(newValue);
		  navigate('/'+newValue)

        }}
      >
        <BottomNavigationAction value='homepage' label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction value='task' label="Task" icon={<TaskIcon />} />
        <BottomNavigationAction value='calender' label="Calender" icon={<CalenderIcon />} />
		<BottomNavigationAction value='message' label="Messages" icon={<MessagesIcon />} />
		<BottomNavigationAction value='event' label="Event" icon={<EventIcon />} />
		
      </BottomNavigation>
    </Box>
  );
}



export default App;
