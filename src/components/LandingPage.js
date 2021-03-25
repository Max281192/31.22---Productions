import React from 'react';
import logo from '../img/logo.svg';

const LandingPage = () => {
	return(
		<div>
			<div className="left-panel">

			</div>

			<div className="middle">
				<div className="image">
					<img src={logo} alt="logo"/>
				</div>
				<div className="hide">
					<h3>EVENT</h3>
				</div>
				<div className="hide">
					<h3>CORPORATE</h3>
				</div>
				<div className="hide">
					<h3>Paris - Lyon - Bordeaux</h3>
				</div>
			</div>

			<div className="right-panel">

			</div>
		</div>
	)
}

export default LandingPage;