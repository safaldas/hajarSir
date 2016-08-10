import React from 'react';
import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import {signIn,signOut,saveToFirebase} from '../firebaseConfig.js';
import Avatar from 'material-ui/Avatar';
import store from '../containers/store';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
var signInStyle={},
	signOutStyle={},
	saveStyle={};
const ToolBar = React.createClass({
	getInitialState: function() {
		return {data:store.getState()};
	},
	componentDidMount:function() {
		store.subscribe(() => {
			let stateData=this.state.data;
			stateData = store.getState();
			this.setState({data:stateData});
		});

	},
	isSignedIn:function(){
		if(this.state.data.name){
			
			signInStyle={display:'none'};
			signOutStyle={display:'block'};
			saveStyle={display:'block'};

		}else{
			
			signInStyle={display:'block'};
			signOutStyle={display:'none'};
			saveStyle={display:'none'};
		}
	},
	render:function(){	
		this.isSignedIn();
	        return (
				<Toolbar>
					<ToolbarGroup  firstChild={true}>
						
					</ToolbarGroup>
					<ToolbarGroup>
			          <Avatar src={this.state.data.photoURL||'../images/profile_placeholder.png'} style={{marginTop:'9px'}}/>
			          <ToolbarTitle className='name' text={this.state.data.name} />
			          <ToolbarSeparator />
			          <RaisedButton label="Sign in"
			          				style={signInStyle}
			          				onTouchTap={signIn}
			          				primary={true} />
			          <RaisedButton label="Sign Out"
			          				style={signOutStyle}
			          				onTouchTap={signOut}
			          				secondary={true} />
					  <RaisedButton label="Save"
									style={saveStyle}
									onTouchTap={saveToFirebase}
									primary={true} />
			           
			        </ToolbarGroup>
				</Toolbar>
			);
    }
});
export default ToolBar;