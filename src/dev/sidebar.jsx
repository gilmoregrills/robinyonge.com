import React from 'react'; 
import {render} from 'react-dom';

class Sidebar extends React.Component {

	render() {
		var SidebarStyle = {	
			background: '#fef4f8',
			//boxShadow: '4px 5px 1px gray',
			float: 'right',
			position: 'relative',
			marginTop: '67px', 
			marginRight: '10px',
			marginLeft: '10px',
			padding: '14px 16px',
			maxWidth: '20%',
		};

		return (
			<div style={SidebarStyle}>
				<small>Lorem Khaled Ipsum is a major key to success. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. Another one. Mogul talk. Another one. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh.</small>
			</div>

		);
	}
}

export default Sidebar;
