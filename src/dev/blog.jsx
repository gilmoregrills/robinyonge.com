import React from 'react';
import {render} from 'react-dom';
import Post from './post.jsx';
const Parser = require('rss-parser');
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: undefined
		};
		this.fetchPosts();
	}

	async fetchPosts() {
	//fetch public feed of posts from medium
		let feed = await parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@tonlehrling')	
		this.setState({posts: feed.items})			
	}

	render() {
		if (this.state.posts == undefined) {
			return (<p> loading posts... </p>);
		} else {
			console.log('at blog component level ' + this.state.posts)
			return (
				<div>
					<Post post={this.state.posts} />
				</div>
			);
		}
	}
}

export default Blog;
