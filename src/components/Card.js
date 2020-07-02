import React from 'react';

const Card = (props) => {
	return (
		<div className="column card">
			<div className="photo">
				<img src={props.photo}/>
			</div>
			<div className="name">
				<h3>{props.firstName} {props.lastName}</h3>
			</div>
			<div className="job">
				<h5>{props.job}</h5>
			</div>
		</div>
	)
}

export default Card;