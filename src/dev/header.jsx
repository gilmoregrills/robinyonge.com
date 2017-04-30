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
	height: '50px',
	width: '100vw',
	background: '#c5dafa',

};

const divStyle = {
	textAlign: 'right',
	marginTop: '-20px',
	marginBottom: '-7%',
	float: 'right',
	//clear: 'right',
	minWidth: '0%',
};

function Header(props) {
	return(
	//spin out menu and title into their own properties? 
	<div style={divStyle}>
		<div style={menuStyle}>
		</div>
		<h1 style={titleStyle}>Robin Yonge</h1>
	</div>
	);
}

export default Header;
