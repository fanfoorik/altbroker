import React, { Component } from "react";

import App from "App";

//pages
import Auth from "./pages/auth/Auth";
import Broker from "./pages/Broker";
import Deal from "./pages/Deal";
import Evolution from "./pages/Evolution";
import Stat from "./pages/Stat";
import Admin from "./pages/Admin";

import Index from "./pages/Index";
import About from "./pages/about";
import NotFound from "./pages/404";

export default Altrouter =()=> {
	return (
		<Router history={browserHistory}>
			<Route path="/altbroker3" component={App}>
				{
					// onEnter={authenticate}
				}

				<IndexRoute component={Index} />

				<Route path="about" component={About} />

				<Route path="broker" component={Broker}>
					<Route path=":page" />
				</Route>

				<Route path="deal" component={Deal}>
					<Route path=":page" />
				</Route>

				<Route path="evolution" component={Evolution}>
					<Route path=":page" />
				</Route>

				<Route path="stat" component={Stat}>
					<Route path=":page" />
				</Route>

				<Route path="admin" component={Admin}>
					<Route path=":page" />
				</Route>

			</Route>
			
			<Route path="/altbroker3/login" component={Auth} />

			<Route path="*" component={NotFound} />
		</Router>
	)
};