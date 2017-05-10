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


export const store = createStore(reducers, composeWithDevTools( applyMiddleware(thunk) ));


let login = localStorage.getItem('login');
let token = localStorage.getItem('token');

if(login && token){
	store.dispatch({type: "AUTH_USER", payload: true});
}

ReactDOM.render(	
	<Provider store={store}>

		<Router history={browserHistory}>

			<Route path="/altbroker3" component={ProtectedRoute(App)}>

				<IndexRoute component={ProtectedRoute(Index)} />

				<Route path="about" component={ProtectedRoute(About)} />

				<Route path="broker" component={ProtectedRoute(Broker)}>
					<Route path=":page" />
				</Route>

				<Route path="deal" component={ProtectedRoute(Deal)}>
					<Route path=":page" />
				</Route>

				<Route path="evolution" component={ProtectedRoute(Evolution)}>
					<Route path=":page" />
				</Route>

				<Route path="stat" component={ProtectedRoute(Stat)}>
					<Route path=":page" />
				</Route>

				<Route path="admin" component={ProtectedRoute(Admin)}>
					<Route path=":page" />
				</Route>

			</Route>
			
			<Route path="/altbroker3/pg" component={ProtectedRoute(Pg)} />

			<Route path="/altbroker3/login" component={Auth} />

			<Route path="*" component={NotFound} />

		</Router>
	</Provider>
, document.getElementById("root") );