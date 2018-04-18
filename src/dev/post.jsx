import React from 'react';
import {render} from 'react-dom';


const Post = ({postData}) => {
	console.log('at post component level: ', JSON.stringify(postData))
	console.log('creator: ')
	return(
		<div>
			<p>
				{postData.creator}
				{postData.title}
			</p>
			{postData['content:encoded']}
		</div>
	);
};

Post.propTypes = {
	postData: React.PropTypes.object.isRequired
};

export default Post;