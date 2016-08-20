import React from 'react';
import DateBar from './DateBar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import DatePicker from 'material-ui/DatePicker';
import EditIcon from 'material-ui/svg-icons/image/edit';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';

import store from '../containers/store';


const NavBar= React.createClass({
	openDatePicker:function(){
		this.refs.datepicker.openDialog();
	},
	getInitialState: function() {
		return {data:store.getState()};
	},
	componentDidMount:function() {
		store.subscribe(() => {
			let stateData=this.state.data;
			stateData = store.getState();
			this.setState(stateData);
		});
		console.log('in NavBar componentDidMount');
	},
	render:function(){
		return (
			
				
				<AppBar title={<DateBar />}
						iconElementRight={
							<IconButton tooltip="next" 
										onTouchTap={() =>{
											store.dispatch({
												type:'DATE_NAV',
												option:'next'
											});
										}}> 
								<ImageNavigateNext/>
							</IconButton>
						}

						iconElementLeft={
							<IconButton tooltip="prev" 
										onTouchTap={() =>{
											store.dispatch({
												type:'DATE_NAV',
												option:'prev'
											});
										}}> 
								<ImageNavigateBefore/>
							</IconButton>
						}

						onTitleTouchTap={this.openDatePicker}
				>	
								
				
					<DatePicker ref='datepicker' 
										id='datepicker' 
										style={{display:'none'}}
										onChange={(n,date) => {
											store.dispatch({
												type:'SET_DATE',
												date:date
											});
										}} 
										autoOk={true}  />
				
				</AppBar>
			
		);
	}
});

export default NavBar;