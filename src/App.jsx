import React, { Component } from "react";
import { connect } from "react-redux";

//js
import ajax from "./js/ajax";
import axios from "axios";
import $ from "jquery";

//components
import Header from "./components/header/Header";
import Footer from "./components/footer/";
import Icons from "./components/Icons";

import { fetchInit } from "./actions/fetchInitAction";

console.log($("#root").attr("id"));

class App extends Component{
	
	componentDidMount(){

        let { dispatchFetchInit } = this.props;

        dispatchFetchInit();

		// axios.get("http://esjs.ru/data.json")
		// 	.then((res)=>{
		// 		console.log(res);
		// 	})
		// 	.catch((error)=>{
		// 		console.log(error);
		// 	})

		// axios.post("https://alterainvest.ru/api/v2/altbroker3/test/", {
		// 	headers:{
		// 		"Accept":"application/json, text/plain, */*",
		// 		"Accept-Encoding":"gzip, deflate, br",
		// 		"Accept-Language":"ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4",
		// 		"Cache-Control":"max-age=0",
		// 		"Connection":"keep-alive",
		// 		"Content-Length":"0",
		// 		"Host":"alterainvest.ru",
		// 		"Origin":"http://localhost:8080",
		// 		"Referer":"http://localhost:8080/altbroker3/",
		// 		"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36"
		// 	}
		// })
		// .then(function(res){
		// 	console.log(res);
		// })
		// .catch(function(error){
		// 	console.log(error);
		// });

		$.ajax({
			url: "http://alterainvest.ru/api/v2/altbroker3/init/",
			type: "GET",
			data: {
				name: "bav"
			},
			crossDomain: true,
			headers: {
				"login": "vh.mrk@alterainvest.ru",
				"token": "707e180ee0d2048098fe6be7a084e054"
			},
			processData: false,
			success: function(data){
				console.log(data);
			},
			error: function(err){
				console.log("err -",err);
			}
		})
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

const mapStateToProps = (state) => {
    return{
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatchFetchInit(){
            dispatch(fetchInit());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
