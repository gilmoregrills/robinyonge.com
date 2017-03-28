import React from 'react';
import {render} from 'react-dom';

const titleStyle = {
	color: '#ffffff',	
};

const divStyle = {
	backgroundColor: '#f4c6ff',
	textAlign: 'center',
	marginTop: '-20px',
};

function Header(props) {
	return(
	<div style={divStyle}>
		<h1 style={titleStyle}>Robin Yonge</h1>
	</div>
	);
}

export default Header;
