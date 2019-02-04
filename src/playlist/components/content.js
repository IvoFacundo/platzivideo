import React, { Component } from 'react';
import Playlist from './playlist';

class Content extends Component {
	render() {

		const categories = this.props.data.categories;

		return (
			<div className="Content">
				{
					categories.map( (item) => {
						return <Playlist key={item.id} {...item} />
					})
				}
			</div>
		)
	}
}

export default Content;