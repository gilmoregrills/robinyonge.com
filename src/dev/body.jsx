import React from 'react';
import {render} from 'react-dom';
import TabsMenu from './tabsMenu.jsx';
import Sidebar from './sidebar.jsx';

class Body extends React.Component {

	render() {
		let width = window.innerWidth;
		console.log(width)
		if (width > 768) {
			return(
				<div>
					<TabsMenu />
					<Sidebar />
				</div>
			);
		} else {
			return(
				<div>
					<TabsMenu />
				</div>
			);
		}
	}
}

export default Body;
