import React from 'react';
import store from '../containers/store';
import PresentIcon from 'material-ui/svg-icons/maps/person-pin';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import red500 from 'material-ui/styles/colors';

const style = {
    margin: 0,
    top: 0,
    right: 100,
    bottom:'auto',
    left: 'auto',
    position: 'fixed',
    backgroundColor:'#9c27b0', 
    textColor:'white',

};


const Footer = React.createClass( {
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
		let percent = this.state.data.attendance/this.state.data.total*100;
		if (percent!==0 && !percent) {
			console.log('change percent');
			percent=0;
		}
		return (
			
			<Chip  style={style} >
       			<p style={{color:'#ffffff'}}>{percent.toPrecision(4)}%</p>
        		<IconButton tooltip="Attendance">
				<PresentIcon />
				</IconButton>
      		</Chip>
				
		   
			 
		);
	}
});

export default Footer;