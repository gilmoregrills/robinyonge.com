import React from 'react';
import {render} from 'react-dom';
const octokit = require('@octokit/rest')();
import Project from './project.jsx';

class Projects extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: undefined
		};
		this.fetchProjects()
	}

	fetchProjects() {
	// fetch public projects from Github
		octokit.repos.getForUser({username: 'gilmoregrills', type: 'owner', sort: 'pushed'})
		.then(result => {
			console.log(result.data)
 			this.setState({projects: result.data})
		})
	}

	gridStyle = {
		display: 'grid',
		gridColumnGap: '15px',
		gridRowGap: '15px',
		gridTemplateColumns: '30% 30% 30%',
	}

	render() {
		if (window.innerWidth < 768) {
			this.gridStyle.gridTemplateColumns = '100%';
		}
		if (this.state.projects == undefined) {
			return (<p> loading... </p>);
		} else {		
			return (
				<div style={this.gridStyle}>
					{this.state.projects.map((project, i) => <Project proj={project} key={i}/>)}
				</div>
			);
		}
	}
}

export default Projects;
