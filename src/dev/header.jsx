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
	textAlign: 'left',
	marginTop: '-20px',
	marginBottom: '-3.5%',
	float: 'left',
	//clear: 'right',
	minWidth: '0%',
};

function Header(props) {
	return(
	<div style={divStyle}>
		<div style={menuStyle}>
		</div>
		<h1 style={titleStyle}>Robin Yonge</h1>
	</div>
	);
}

export default Header;
