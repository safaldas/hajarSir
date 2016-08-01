import React from 'react';
import Date from './Date';
import Month from './Month';
import Year from './Year';

const DateBar = () => {
	return (
		<div className='col-md-6 col-sm-6 col-xs-6 btn button-green btn-lg ' >
			<Date />
			<Month />
			<Year />
		</div>
	);
}

export default DateBar;