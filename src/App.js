import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './updateProfile/home';
import Landing from './Landing/index';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/update-profile" component={Home} />
					<Route path="/" component={Landing} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
