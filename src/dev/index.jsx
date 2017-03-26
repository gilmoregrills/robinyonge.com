//afaik, I should be using functional components for
//any instances when I'm just taking props and rendering them
//and classes when I need more functionality/state
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	render() {
		return <p>Webpack is watching!</p>;
	}
}

render (
	<App/>,
	document.getElementById('app')
);
