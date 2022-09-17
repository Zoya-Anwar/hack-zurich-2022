import App from './App';
export function Template() {
	return (
		<div id="template" style={{
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'black',
			overflow: 'hidden',
		}}>
			<div id="wrapper" style={{
				width: '390px',
				height: '844px',
				backgroundColor: 'white',
				overflow: 'auto'
			}}>
				<App />
			</div>
		</div>
	);
}

export default Template;
