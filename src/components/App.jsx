import React from 'react';
import NavBar from './NavBar';
import AttendanceContainer from './AttendanceContainer';
import Percentage from './Percentage';
import {Card,CardHeader} from 'material-ui/Card';
import ToolBar from './ToolBar';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

class App extends React.Component {
	
	render(){
		
		return (
			<div >
				<NavBar/>
				<ToolBar/>
				<Card>
				<CardHeader
					title={<Percentage/>}
				/>
	
				<AttendanceContainer />
				</Card>
				
			</div>
		);
	}
}

export default App;