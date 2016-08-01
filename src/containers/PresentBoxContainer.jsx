import React from 'react';
import store from './store';
const CheckBox =(item) =>{
	return (<div key={item.id}  className="slideOne">  
		      <input type ='checkbox' id={item.id} 
		      				defaultChecked={item.checked}
					           onClick={function(e){	
						           	store.dispatch({type:"UPDATE_STATE",id:item.id});
						           }
						       }
				           name='check'/> 
		      <label htmlFor={item.id} ></label>
		    </div>
	);
}
const PresentBoxContainer = React.createClass( {
	getInitialState: function() {
		return {data:store.getState()};
	},
	componentDidMount:function() {
		store.subscribe(() => {
			let stateData=this.state.data;
			stateData = store.getState();
			this.setState(stateData);
		});
	},
	render: function(){
		console.log(this.state.data.periods);
		let items =this.state.data.periods.map(function(item) {
			return CheckBox(item);
			});
		return (
			<div>
				{items}			
				
			</div>
		);
	}
});

export default PresentBoxContainer;

