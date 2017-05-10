import React, { Component } from "react";

export default class DropTip extends Component {
	constructor(){
		super();
	}

	componentWillMount() {
	    document.body.addEventListener('click', this.outerClick);
	}

	componentWillUnmount() {
	    document.body.removeEventListener('click', this.outerClick);
	}

	outerClick = (ev) => {
		// console.log("ev", ev.target);
		console.log(this.refs.droptip);
	}

	render(){

		let classAttr = this.props.className;
	
		return(
			<div className={classAttr ? "droptip " + classAttr : "droptip"} ref="droptip">
				{this.props.children}
			</div>
		);
	}
};