import React from 'react';
import DateBar from './DateBar';


const NavBar = () => {
	return (
		<div className='row lead text-center' >
			<button className="col-md-3 col-sm-3 col-xs-3 btn btn-lg"> prev </button>
			<DateBar />
			<button className="col-md-3 col-sm-3 col-xs-3 btn btn-lg"> next</button>
		</div>
	);
}

export default NavBar;