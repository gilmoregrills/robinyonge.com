import React from 'react';
import {render} from 'react-dom';

const Project = ({proj}) => {

	return(
		<div>
			<p>
				{proj.name}
			</p>
			<p>
				{proj.language}
			</p>
			<p>
				{proj.description}
			</p> 
		</div>
	);
};

Project.propTypes = {
	proj: React.PropTypes.object.isRequired
};

export default Project;
