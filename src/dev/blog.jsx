import React from 'react';
import {render} from 'react-dom';
import Post from './post.jsx';
const Parser = require('rss-parser');
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.posts = undefined
		this.fetchPosts().then(result => {
			console.log('results from fetchposts', result)
			this.posts = result
			this.setState({posts: result})
		});
	}

	async fetchPosts() {
	//fetch public feed of posts from medium
		let feed = await parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@tonlehrling')
		return feed.items
	}

	render() {
		if (this.posts == undefined) {
			return (<p> loading posts... </p>);
		} else {
			// console.log('using var not state at blog component render level: ', this.posts)
			return (
				<div>
					{this.posts.map((post, i) => <Post postData={post} key={i}/>)}
				</div>
			);
		}
	}
}

export default Blog;
