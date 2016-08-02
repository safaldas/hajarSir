import React from 'react';
import DateBar from './DateBar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';


const NavBar = () => {
	return (
		<AppBar
		    title={<DateBar />}
		    iconElementLeft={  <IconButton tooltip="prev">
      								<ImageNavigateBefore/>
   								</IconButton>}
		    iconElementRight={  <IconButton tooltip="next">
      								<ImageNavigateNext/>
   								</IconButton>}
		    >
		</AppBar>
	);
}

export default NavBar;