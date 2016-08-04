import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import NavBar from './NavBar';
import AttendanceContainer from './AttendanceContainer';
import Percentage from './Percentage';
import {Card,CardHeader} from 'material-ui/Card';

let text="Your attendance percentage is" +<Percentage/> ;
class App extends React.Component {
	
	render(){
		return (
			<div >
				<NavBar/>
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