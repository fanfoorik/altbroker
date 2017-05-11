import React, { Component } from "react";

export default class StickersOverlay extends Component {
	componentDidMount(){
		document.addEventListener('click', this.onOutsideClick);
		document.addEventListener('keyup', this.onOutsideClick);
	}
	componentWillUnmount(){
		document.removeEventListener('click', this.onOutsideClick);
		document.removeEventListener('keyup', this.onOutsideClick);
	}
	onOutsideClick = (ev) => {
		let stickersOverlay = this.refs.stickersOverlay;
		if(ev.type === "click" && !stickersOverlay.contains(ev.target) || ev.type === "keyup" && ev.which === 27){
			this.props.handleOuterClick();
		}
	}
	render(){
		return(
			<div className="stickers__overlay" ref="stickersOverlay">
				{this.props.children}
			</div>
		)
	}
};