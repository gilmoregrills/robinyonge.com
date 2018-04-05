import React from 'react';
import {render} from 'react-dom';


const Post = ({postData}) => {
	console.log('at post level ' + postData)
	return(
		<div>
			<p>
				{postData}
			</p>
		</div>
	);
};

Post.propTypes = {
	post: React.PropTypes.array.isRequired
};

export default Post;