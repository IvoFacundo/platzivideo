import React from 'react';
import './regular-error.css';

function RegularError(props) {
	return (
		<div className="RegularError">
			<div className="RegularError-image">
				<img src="http://chittagongit.com//images/not-found-icon/not-found-icon-7.jpg" width="400" height="400" />
			</div>
			
			<div className="RegularError-description">
				<h1>Ops, ha ocurrido un error :(</h1>
			</div>
		</div>
	)
}

export default RegularError;