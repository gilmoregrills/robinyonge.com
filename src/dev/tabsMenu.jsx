import React from 'react';
import {render} from 'react-dom';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import Projects from './projects.jsx';
import Blog from './blog.jsx';

class TabsMenu extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			index: 0
		};
		this.tabChange = this.tabChange.bind(this);
	}


	tabChange(index) {
		this.setState({index: index});
	};

	render() {
		var TabsStyle = {
			float: 'left',
			width: '72%',
			marginTop: '12px',
			// minWidth: '420px',
		};
		if (window.innerWidth < 768) {TabsStyle.width = '100%'}
		//this is so gross! find a way to trim this down
		//inline css is still weird
		var ActiveTabStyle = {
			textAlign: 'center',
			borderBottom: '1px solid #fef4f8',
			padding: '14px 16px',
			float: 'left',
			cursor: 'pointer',
			marginLeft: '10px',
			background: '#fef4f8',
		};
		var InactiveTabStyle = {
			textAlign: 'center',
			borderBottom: '1px solid #feeff5',
			padding: '14px 16px',
			float: 'left',
			cursor: 'pointer',
			marginLeft: '10px',
			background: '#eddfec',
		};
		var ContentStyle = {
			padding: '14px 16px',
			float: 'left',
			clear: 'left',
			marginLeft: '10px',
			// maxHeight: '85%',
			width: '100%',
			overflow: 'auto',
			background: '#fef4f8',

		};
		return(
			<span style={TabsStyle}>
			<Tabs index={this.state.index} onChange={this.tabChange} fixed>
			//shouldn't need to be in two if/else, but putting it in one didn't work even with enclosing tags
			{this.state.index == 0? (
				<Tab style={ActiveTabStyle} label='Projects'><span style={ContentStyle}><Projects /></span></Tab>
			) : (
				<Tab style={InactiveTabStyle} label='Projects'><span style={ContentStyle}><Projects /></span></Tab>
			)}
			{this.state.index == 0? (
				<Tab style={InactiveTabStyle} label='Blog'><span style={ContentStyle}><Blog /></span></Tab>
			) : (
				<Tab style={ActiveTabStyle} label='Blog'><span style={ContentStyle}><Blog /></span></Tab>
			)}
			</Tabs>
			</span>
		);
	}
}

export default TabsMenu;
