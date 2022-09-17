import React from 'react';
import App from './App';

function Template() {
	return (
		<div id="Template" style={{
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'black',
		}}>
			<div id="Wrapper" style={{
				height: '844px',
				width: '390px',
				backgroundColor: 'white',
			}}>
				<App />
			</div>
		</div>
	);
}

export default Template;
