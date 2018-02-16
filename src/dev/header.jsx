import React from 'react';
import {render} from 'react-dom';

const titleStyle = {
	marginTop: '-28px',
	color: '#c5dafa',
	padding: '0px',
	fontSize: '11em',
	marginRight: '20px',

};

const menuStyle = {
	height: '20px',
	width: '100vw',
	background: '#c5dafa',

};

function Header(props) {
	return(
	<div>
		<div style={menuStyle}>
		</div>
		<h1 style={titleStyle}>Robin Yonge</h1>
	</div>
	);
}

export default Header;
