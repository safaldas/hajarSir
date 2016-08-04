import React from 'react';
import store from '../containers/store'
const DateBar = () => {
	return (
		<div className='title' >
			{store.getState().now.replace(/_/g,' ').replace(' ',', ')}
		</div>
	);
}

export default DateBar;