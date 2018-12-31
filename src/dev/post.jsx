import React from 'react';
import {render} from 'react-dom';

function parseContent(contentEncoded) {
	let firstTagRemoved = contentEncoded.slice(3)
	let tagIndex = 0
	for (var i = 0; i < firstTagRemoved.length; i++) {
		if (firstTagRemoved[i] == "<") {
			tagIndex = i
			break;
		}
	}
	let secondTagRemoved = contentEncoded.slice(3, i + 3)
	return secondTagRemoved
}

const Post = ({postData}) => {
	// console.log('at post component level: ', JSON.stringify(postData))
	return(
		<div>
			<h3>{postData.title}</h3>
			<h4>Author: {postData.creator}</h4>
			{parseContent(postData['content:encoded'])}
		</div>
	);
};

// Post.propTypes = {
// 	postData: React.PropTypes.object.isRequired
// };

export default Post;