import React from "react";

class NotFound extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="center">
				<br />
				<br />
				<div className="bg-holder">bg-holder</div>
				<br />
				<br />
				Not found! &nbsp; <span style={{fontSize: "40px", color: "orange"}}>404</span> &nbsp;!
			</div>
		)
	}
}

export default NotFound;