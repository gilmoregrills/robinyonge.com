import React from 'react';
import {render} from 'react-dom';

const titleStyle = {
	color: '#E4E4E4',
	paddingTop: '20px',
};

const divStyle = {
	minHeight: '100px',
	backgroundColor: '#8267D5',
	textAlign: 'center',
	marginTop: '-20px',
	marginBottom: '20px',
};

function Header(props) {
	return(
	<div style={divStyle}>
		<h1 style={titleStyle}>Robin Yonge</h1>
	</div>
	);
}

export default Header;
