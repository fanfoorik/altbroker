import React, { Component } from "react";
import Sticker from "./Sticker";

export default class Stickers extends Component {
	componentDidMount(){
		document.addEventListener('click', this.onOutsideClick);
		document.addEventListener('keyup', this.onOutsideClick);
	}
	componentWillUnmount(){
		document.removeEventListener('click', this.onOutsideClick);
		document.removeEventListener('keyup', this.onOutsideClick);
	}
	onOutsideClick = (ev) => {
		let stickers = this.refs.stickers;
		if(ev.type === "click" && !stickers.contains(ev.target) || ev.target === stickers || ev.type === "keyup" && ev.which === 27){
			this.props.handleOuterClick();
		}
	}
	render(){
		return(
			<div className="stickers__overlay" ref="stickers">
				<div className="center">
					<Sticker />
					<Sticker />
					<Sticker />
					<Sticker />
					<Sticker />
				</div>
			</div>
		)
	}
};