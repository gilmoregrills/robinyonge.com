import React from 'react';
import {render} from 'react-dom';

const titleStyle = {
	color: '#ffffff',
};

const divStyle = {
	backgroundColor: '#f4c6ff',
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
