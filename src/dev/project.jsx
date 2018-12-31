import React from 'react';
import {render} from 'react-dom';

const Project = ({proj}) => {
    console.log('at project component level: ', JSON.stringify(proj))
    var isfork = proj.fork.toString()
	return(
		<div>
			<h3><a href={proj.html_url}>{proj.full_name}</a></h3>
            <h4>{proj.description}</h4>
		</div>
	);
};

// Project.propTypes = {
// 	proj: React.PropTypes.object.isRequired
// };

export default Project;
