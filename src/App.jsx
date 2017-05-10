import React, { Component } from "react";
import { connect } from "react-redux";

//js
import ajax from "./js/ajax";
import axios from "axios";

//components
import Header from "./components/header/Header";
import Footer from "./components/footer/";
import Icons from "./components/Icons";

import { fetchInit } from "./actions/fetchInitAction";

class App extends Component{
	
	componentDidMount(){

        let { dispatchFetchInit } = this.props;
        let { authenticated } = this.props.state.auth.components;

        if(authenticated){
        	dispatchFetchInit();
        }
	}

	render(){
		return (
			<main>
				<Icons />
				
				<Header />

				{this.props.children}

                {
        		  // <Footer />
                }

			</main>
		)
	}
}

const mapStateToProps = state => {
    return{
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        dispatchFetchInit(){
            dispatch(fetchInit());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
