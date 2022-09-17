import App from './App';
function Template() {
	return (
		<div id="template" style={{
			// height: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'black',
		}}>
			<div id="wrapper" style={{
				minHeight: '100vh',
				width: '390px',
				backgroundColor: 'white',
			}}>
				<App />
	
			</div>
		</div>
	);
}

export default Template;
