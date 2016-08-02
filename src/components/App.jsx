import React from 'react';
import NavBar from './NavBar';
import AttendanceContainer from './AttendanceContainer';
import Footer from './Footer';
class App extends React.Component {
	render(){
		return (
			<div >
				<NavBar/>
				<AttendanceContainer />
				<Footer />
			</div>
		);
	}
}

export default App;