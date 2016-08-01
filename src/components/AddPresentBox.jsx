import React from 'react';
import store from '../containers/store';


const AddPresentBox = () => {
	return (

		<div className='col-xs-6 text-center' >
			
			<span className='btn btn-add button-green' onClick={function() {
				store.dispatch({type:"ADD_ITEM"});
			}}>+</span>
			
		</div>
	);
}

export default AddPresentBox;