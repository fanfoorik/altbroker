import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//reducers
import reducers from './reducers.js';

import App from "App";
import Pg from "./pages/Pg";
import ProtectedRoute from "./components/ProtectedRoute";


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

//styles
import style from "./styles/style.sass";


const store = createStore(reducers, composeWithDevTools( applyMiddleware(thunk) ));


function authenticate(nextState, replace){
	const authenticated = localStorage.getItem('token') && localStorage.getItem('login');

	if (!authenticated) {
		replace({
	      pathname: '/altbroker3/login/',
	      state: { nextPath: nextState.location.pathname }
	    });
	}
}

window.ondblclick = function(){
	console.log(localStorage.getItem('token'), localStorage.getItem('login'));
	console.log("Attempt to remove", localStorage.getItem('token') );
	localStorage.removeItem('token');
	console.log( localStorage.getItem('token') );
};

ReactDOM.render(	
	<Provider store={store}>

		<Router history={browserHistory}>

			<Route path="/altbroker3" component={App} onEnter={authenticate}>

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
			
			<Route path="/altbroker3/pg" component={ProtectedRoute(Pg)} />

			<Route path="/altbroker3/login" component={Auth} />

			<Route path="*" component={NotFound} />

		</Router>
	</Provider>
, document.getElementById("root") );