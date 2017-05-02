import React, { Component } from "react";
import { connect } from "react-redux";

//js
import ajax from "./js/ajax";
import axios from "axios";

//components
import Header from "./components/header/Header";
import Footer from "./components/footer/";
import { fetchInit } from "./actions/fetchInitAction";

class App extends Component{
	
	componentDidMount(){

        let { dispatchFetchInit } = this.props;

        if(dev){
            dispatchFetchInit();
        }
	
		// axios.get("http://esjs.ru/data.json")
		// 	.then((res)=>{
		// 		console.log(res);
		// 	})
		// 	.catch((error)=>{
		// 		console.log(error);
		// 	})

		// ajax.get("init/")
		// 	.then(function(res){
		// 		console.log(res);
		// 	})
		// 	.catch(function(error){
		// 		console.log(error);
		// 	});

		// axios.get("http://alterainvest.ru/api/v2/altbroker3/init/", {
		// 	headers: {
		// 		"token": localStorage.getItem('token'),
		// 		"login":"vh.mrk@alterainvest.ru",
		// 	}
		// })
		// .then(function(res){
		// 	console.log(res);
		// })
		// .catch(function(error){
		// 	console.log(error);
		// });
	}

	render(){
		return (
			<main>
				
				<Header />

				{this.props.children}

                {
        		  // <Footer />
                }

			</main>
		)
	}
}

const mapStateToProps = (state) => {
    return{
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatchFetchInit(){
            console.log("0000000");
            dispatch(fetchInit());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
