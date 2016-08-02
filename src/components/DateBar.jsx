import React from 'react';
import Date from './Date';
import Month from './Month';
import Year from './Year';

const DateBar = () => {
	return (
		<div className='title' >
			<Date />
			<Month />
			<Year />
		</div>
	);
}

export default DateBar;