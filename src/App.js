import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Matchup from './components/Matchup';
import NavBar from './components/NavBar';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<NavBar />
				<Switch>
					<Route exact path='/home' component={Home} />
					<Route exact path='/matchup' component={Matchup} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
