var Greeting = React.createClass({
	render: function() {
		return (
			<p>Hello, Universe</p>
		)
	}
});

React.render(
	<Greeting/>,
	document.getElementById('greeting-div')
);

