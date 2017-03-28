//afaik, I should be using functional components for
//any instances when I'm just taking props and rendering them
//and classes when I need more functionality/state
import React from 'react';
import {render} from 'react-dom';
import TestComponent from './testComponent.jsx';

class App extends React.Component {
	render() {
		return( 
		<div>
			<p>test!</p>
			<TestComponent />
		</div>
		);
	}
}

render (
	<App/>,
	document.getElementById('app')
);
