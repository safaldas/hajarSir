import React from 'react';
import store from './store';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add'
import SocialPerson from 'material-ui/svg-icons/social/person'
import SvgIcon from 'material-ui/SvgIcon'
import { red500} from 'material-ui/styles/colors';


const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding:10

};


const CheckBox =(item) =>{
		return (<Paper style={style} key={item.id} >  

			       <Checkbox id={item.id} 
			       				
			      				defaultChecked={item.checked}
			      				style={{top:'37%',left:'17%'}}
			      				checkedIcon={<SocialPerson style={{width: 48,height: 48,padding: 24,}}/>}
			      				uncheckedIcon={<SvgIcon style={{width: 48,height: 48,marginLeft:-10,marginTop:-10}}>
			      					<path  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
			      				</SvgIcon>}
						        onTouchTap={function(e){	
						           	store.dispatch({type:"UPDATE_STATE",id:item.id});
						           }
							      }
					          name='check'/> 
			      
			    </Paper>
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

