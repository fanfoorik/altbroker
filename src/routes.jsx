import React, { Component } from "react";


export default (
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
	
	<Route path="/altbroker3/login" component={Auth} />

	<Route path="*" component={NotFound} />
)