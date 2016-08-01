import React from 'react';
import PresentBoxContainer from '../containers/PresentBoxContainer';
import AddPresentBox from './AddPresentBox';
import RemovePresentBox from './RemovePresentBox';

const AttendanceContainer = () => {
	return (
		<div id='attendanceContainer'>
			<PresentBoxContainer />
			<AddPresentBox />
			<RemovePresentBox />
		</div>
	);
}

export default AttendanceContainer;