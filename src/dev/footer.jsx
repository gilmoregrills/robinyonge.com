import React from 'react';
import {render} from 'react-dom';

const titleStyle = {
	color: '#E4E4E4',
};

const divStyle = {
	backgroundColor: '#8489D8',
	minHeight: '100px',
	textAlign: 'center',
};

function Footer(props) {
	return(
	<div style={divStyle}>
		<h1 style={titleStyle}>Footer!</h1>	
	</div>
	);
}

export default Footer;
