import React from 'react';
import {render} from 'react-dom';
import TabsMenu from './tabsMenu.jsx';

class Body extends React.Component {

	constructor(props) {
		super(props);
		this.state = {likesCount : 0};
		this.onLike = this.onLike.bind(this);
	}

	onLike () {
		let newLikesCount = this.state.likesCount + 1;
		this.setState({likesCount: newLikesCount});
	}

	render() {
		return (
			<div>
			<TabsMenu />
			</div>
		);
	}

}

export default Body;
