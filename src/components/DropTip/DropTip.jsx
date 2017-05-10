import React, { Component } from "react";

export default class DropTip extends Component {
	constructor(){
		super()
	}
	componentWillMount(){
		console.log("componentWillMount");
	}
	componentWillUnmount(){
		console.log("componentWillUnmount");
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