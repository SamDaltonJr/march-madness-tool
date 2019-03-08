import React from 'react';

import './NavBar.css';

export default class NavBar extends React.Component {
	render() {
		console.log('hi there');
		return (
			<div className='NavBar-container'>
				<nav className='NavBar'>
					<ul>
						<li>
							<a href='/home'>Home</a>
						</li>
						<li>
							<a href='/matchup'>H2H Matchup</a>
						</li>
						<li>
							<a href='/teams'>Teams</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
