import React from 'react';
import store from '../containers/store';
import PresentIcon from 'material-ui/svg-icons/maps/person-pin';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import red500 from 'material-ui/styles/colors';


const Percentage = React.createClass( {
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
	render:function(){
		let percent = this.state.data.attendance/this.state.data.total*100 || 0;
	
		return (
      			<span style={{fontSize:'26px'}}>{percent.toPrecision(4)}%</span>				
		   
			 
		);
	}
});

export default Percentage;