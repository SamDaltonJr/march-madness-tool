import React from 'react';

import TeamCard from '../TeamCard';

export default class Matchup extends React.Component {
	render() {
		return (
			<React.Fragment>
				<TeamCard />
				<TeamCard />
			</React.Fragment>
		);
	}
}
