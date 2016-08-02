import React from 'react';
import store from '../containers/store';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
    margin: 0,
    top: 'auto',
    right: 100,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};
const AddPresentBox = () => {
	return (

		<FloatingActionButton style={style} 
		 	onTouchTap={() => {				
				store.dispatch({type:"ADD_ITEM"});
			}} >
     		<ContentAdd />
    	</FloatingActionButton>
	);
}

export default AddPresentBox;