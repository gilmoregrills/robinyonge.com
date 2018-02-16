//afaik, I should be using functional components for
//any instances when I'm just taking props and rendering them
//and classes when I need more functionality/state
import React from 'react';
import {render} from 'react-dom';
import Body from './body.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';

const headStyle = {
	textAlign: 'left',
	marginTop: '-20px',
	marginBottom: '-3.5%',
	float: 'left',
	//clear: 'right',
	minWidth: '0%',
};

const wrapStyle = {
	backgroundColour: '#E4E4E4',
	minHeight: 'calc(100vh - 100px)',
	marginTop:'20px'
}

const footStyle = {
	backgroundColour: '#E4E4E4',
	minHeight: '100px',
	marginBottom: '-20px',
}

function App(props) {
	return(
		<div>
			<div style={headStyle}>
				<Header />
			</div>
			<div style={wrapStyle}>
				<Body />	
			</div>
			<div style={footStyle}>
				<Footer />
			</div>
		</div>
	);
}

render (
	<App/>,
	document.getElementById('app')
);
