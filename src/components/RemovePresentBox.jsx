import React from 'react';
import store from '../containers/store';

const RemovePresentBox = () => {
	return (
		<div className='col-xs-6  text-center' >
			<span className='btn btn-add button-red' onClick={function() {
				if(store.getState().total <1) return false;
				
				store.dispatch({type:"REMOVE_ITEM"});
			}}>-</span>
			
		</div>
	);
}

export default RemovePresentBox;