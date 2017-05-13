import React, { Component } from "react";

//components
import Icon from "components/Icon";
import Search from "./components/Search";
import IsActive from "components/IsActive";

export default class SearchComponent extends Component {

	constructor(props){
		super();

		this.state = {
			"active":false
		}
	}

	trigger(){
		this.setState({
			...this.state,
			active:!this.state.active
		});
	}

	render(){

		let { active } = this.state;

		return(

			<div className="searchbar">

				<div className="top-trigger" onClick={()=>this.trigger()}>
					<Icon className="top-trigger__icon" icon="lens" width="19" height="20" />
				</div>

				<IsActive component={Search} active={active} handleSearchClose={()=>this.trigger()} />
				
			</div>
		);
	}
};

