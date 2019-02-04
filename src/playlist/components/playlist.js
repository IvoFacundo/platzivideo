import React from 'react';
import Media from './media';

import './playlist.css';

function Playlist(props) {
	const playlist = props.playlist;
	
	return (
		<div className="Playlist">
			<div className="Playlist-description">
				<h4>{props.description}</h4>
			</div>
			<div className="Playlist-title">
				<h2>{props.title}</h2>
			</div>
			<div className="Playlist-content">
				{
					playlist.map( (item) => {
						return <Media openModal={props.handleOpenModal} key={item.id} {...item} />
					})
				}
			</div>
		</div>

	)
}

export default Playlist;