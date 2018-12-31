import React from 'react';
import {render} from 'react-dom';

class Sidebar extends React.Component {

	render() {
		var SidebarStyle = {
			background: '#fef4f8',
			//boxShadow: '4px 5px 1px gray',
			float: 'right',
			//position: 'relative',
			marginTop: '59px',
			marginRight: '10px',
			marginLeft: '10px',
			padding: '14px 16px',
			maxWidth: '20%',
			height: '85%', // make the same height as the main/tabsmenu component
		};

		var ListStyle = {
			listStyleType: 'none',
			 marginLeft: '-40px',
		};

		return (
			<div style={SidebarStyle}>
				<ul style={ListStyle}>
					<li>👩‍💻 <a href="https://github.com/gilmoregrills">github:gilmoregrills</a></li>
					-> add github bio and organisations here
					<li>📷 <a href="https://www.instagram.com/tonlehrling/">instagram:tonlehrling</a></li>
					-> add instagram bio and most recent photo here??
					<li>🐦 <a href="https://twitter.com/eel_boy">twitter:eel_boy</a></li>
					-> add twitter bio and a few of my most recent tweets here
				</ul>
				<p>Really slowly working on this site on the side so please don't judge me for how basic it is! The intention with it is to have almost all the content gathered from the APIs of other services I actually use so I don't have to bother updating it manually ever.</p>
			</div>
		);
	}
}

export default Sidebar;
