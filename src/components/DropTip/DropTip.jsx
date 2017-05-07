import React, { Component } from "react";

export default class DropTip extends Component {
	constructor(){
		super();
	}

	componentWillMount() {
	    document.body.addEventListener('click', this.outerClick);
	}

	componentWillUnmount() {
	    // remember to remove all events to avoid memory leaks
	    document.body.removeEventListener('click', this.outerClick);
	}

	outerClick = (ev) => {
		// console.log("ev", ev.target);
		console.log(this.refs.droptip);
	}

	render(){
		
		return(
			<div className="patch-notes__droptip droptip" ref="droptip">

				{this.props.children}

			</div>
		);
	}
};