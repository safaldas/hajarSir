import React from 'react';
import store from '../containers/store';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};
const RemovePresentBox = () => {
	return (
		<FloatingActionButton secondary={true} style={style}
				onTouchTap={() => {
				if(store.getState().total <1) return false;
				store.dispatch({type:"REMOVE_ITEM"});
			}}>
      <ContentRemove />
    </FloatingActionButton>
		

	);
}

export default RemovePresentBox;