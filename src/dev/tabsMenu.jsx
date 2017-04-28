import React from 'react';
import {render} from 'react-dom';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';

class TabsMenu extends React.Component {
	
	state = {
		index: 1
	};

	tabChange = (index) => { 
		this.setState({index: index});
	};
	
	render() {
		return(
			<section>
			<Tabs index={this.state.index} onChange={this.tabChange} fixed>
				<Tab label='Projects'><p>render content components here</p></Tab>
				<Tab label='About'><p>render about page here?</p></Tab>
			</Tabs>
			</section>
		);
	}
}

export default TabsMenu;
