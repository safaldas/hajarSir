import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import NavBar from './NavBar';
import AttendanceContainer from './AttendanceContainer';
import Percentage from './Percentage';
import {Card,CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import {signIn,signOut,saveToFirebase} from '../firebaseConfig.js';
import Avatar from 'material-ui/Avatar';
import EditIcon from 'material-ui/svg-icons/image/edit';
import store from '../containers/store';
class App extends React.Component {
	
	render(){
		
		return (
			<div >
				<NavBar/>
				<Toolbar>
					<ToolbarGroup  firstChild={true}>
						
					</ToolbarGroup>
					<ToolbarGroup>
			          <ToolbarTitle text="Options" />
			          <ToolbarSeparator />
			          <RaisedButton ref='signInButton' 
			          				label="Sign in"
			          				onTouchTap={signIn}
			          				primary={true} />
			          <RaisedButton ref='signOutButton' 
			          				label="Sign Out"
			          				onTouchTap={signOut}
			          				secondary={true} />
					  <RaisedButton ref='saveButton' 
									label="Save"
									onTouchTap={saveToFirebase}
									primary={true} />
			           
			        </ToolbarGroup>
				</Toolbar>
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