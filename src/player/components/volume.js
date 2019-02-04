import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

const Volume = props => (
	<button className="Volume" onClick={props.handleVolumeClick}>
		<VolumeIcon color="white" size={25} />
		<div className="Volume-range">
			<input ref={props.setRef} type="range" min={0} max={1} step={.05} onChange={props.handleVolumeChange} />
		</div>
	</button>
)

export default Volume;