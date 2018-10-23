import React from 'react';
import {render} from 'react-dom';

const titleStyle = {
	marginTop: '-28px',
	marginBottom: '25px',
	color: '#c5dafa',
	padding: '0px',
	fontSize: '11em',
	marginRight: '20px',

};

function Header(props) {
	return(
	<div>
		<h1 style={titleStyle}>Robin Yonge</h1>
	</div>
	);
}

export default Header;
