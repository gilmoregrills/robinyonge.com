import React from 'react';
import {render} from 'react-dom';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import Projects from './projects.jsx';
import About from './about.jsx';


class TabsMenu extends React.Component {
	
	state = {
		index: 0
	};

	tabChange = (index) => { 
		this.setState({index: index});
	};
	
	render() {
		var TabsStyle = {
			backgroundColour: 'blue',
			marginTop: '-20px',
		};
		//this is so gross! find a way to inherit this stuff better
		//inline css is still weird
		var ActiveTabStyle = {	
			textAlign: 'center',
			borderBottom: '1px solid #C3D7E0',
			padding: '14px 16px',
			float: 'left',
			cursor: 'pointer',
			marginLeft: '10px',
			background: '#C3D7E0',
			boxShadow: '3px 5px 1px gray',
		};
		var InactiveTabStyle = {	
			borderBottom: '1px solid #A3B8DC',
			textAlign: 'center',
			padding: '14px 16px',
			float: 'left',
			cursor: 'pointer',
			marginLeft: '10px',
			background: '#A3B8DC',
			boxShadow: '1px 5px 1px gray',
		};
		var ContentStyle = {
			padding: '14px 16px',
			float: 'left',
			clear: 'left',
			marginLeft: '10px',
			width: 'calc(100% - 20px)',
			maxHeight: '100px',
			overflow: 'auto',
			background: '#C3D7E0',
			boxShadow: '4px 5px 1px gray',

		};
		return(
			<div>
			<Tabs style={TabsStyle} index={this.state.index} onChange={this.tabChange} fixed>
			//shouldn't need to be in two if/else, but putting it in one didn't work even with enclosing tags
			{this.state.index == 0? (
				<Tab style={ActiveTabStyle} label='Projects'><span style={ContentStyle}><Projects /></span></Tab>
			) : (
				<Tab style={InactiveTabStyle} label='Projects'><span style={ContentStyle}><Projects /></span></Tab>	
			)}
			{this.state.index == 0? (
				<Tab style={InactiveTabStyle} label='About'><span style={ContentStyle}><About /></span></Tab>
			) : (
				<Tab style={ActiveTabStyle} label='About'><span style={ContentStyle}><About /></span></Tab>	
			)}
			</Tabs>
			</div>
		);
	}
}

export default TabsMenu;
