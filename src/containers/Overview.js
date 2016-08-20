import React from 'react';
import Card from 'material-ui/Card';
import Daybox from '../components/Daybox';

const Overview =React.createClass({
	render:function() {
		dayboxes=()=>{
			return(<h1>daybox</h1>);
		}
		return(
			<Card>
				{dayboxes}
			</Card>
		);
	}
});
export default Overview;