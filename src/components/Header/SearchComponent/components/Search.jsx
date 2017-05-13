import React, { Component } from "react";

//components
import Icon from "components/Icon";

export default class Notifications extends Component {

	componentDidMount(){
		document.addEventListener('keyup', this.searchClose);
	}
	
	componentWillUnmount(){
		document.removeEventListener('keyup', this.searchClose);
	}

	searchClose = (ev) => {
		if(ev.which === 27){
			this.props.handleSearchClose();
		}
	}

	render(){

		return(
			<div className="search">	
				
				<div className="search__content">
					
					<div className="search__center clear">
						<div className="search__close" onClick={()=>this.props.handleSearchClose()}>
							Отменить
							<Icon className="search__close-icon" icon="close" width="19" height="19" />
						</div>
						<div className="search__text">
							<input className="search__input" type="text" placeholder="Что вы ищите?" />
						</div>
					</div>

					<div className="search-categs">
						<div className="center">
							asdasdsad
						</div>
					</div>

				</div>

				<div className="search__overlay" onClick={()=>this.props.handleSearchClose()}></div>
			</div>
		);
	}
};

