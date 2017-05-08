import React, { Component } from "react";
import { connect } from 'react-redux';

import { index_url } from 'path.js';

import Login from './Login/Login';
import RecoverEmail from './RecoverEmail/RecoverEmail';
import RecoverEmailSuccess from './RecoverEmailSuccess';
import RecoverPassword from './RecoverPassword/RecoverPassword';

import UserCheckword from './UserCheckword/UserCheckword';
import RecoverPasswordSuccess from './RecoverPasswordSuccess';

//actions
import userCheckword from './actions/userCheckwordAction';


class Auth extends Component {

	// componentWillMount(){
	// 	console.log("redirect -", this.props.auth.redirect)
	// 	if(this.props.auth.redirect){
	// 		let nextPath = (this.props.location.state && this.props.location.state.nextPath) ? this.props.location.state.nextPath : index_url;
	// 		this.props.dispatchRedirect();
	// 		this.props.router.replace(nextPath);
	// 	}
	// }

	componentWillUpdate(nextProps){
		if(nextProps.auth.redirect){
			
			console.log(this.props.location.state);

			let nextPath = (this.props.location.state && this.props.location.state.nextPath) ? this.props.location.state.nextPath : index_url;
			this.props.dispatchRedirect();
			this.props.router.replace(nextPath);
		}
	}
	
	render(){

		let { auth } = this.props;
		let { recoverPasswordUser } = this.props;
		
		let checkword = this.props.location.query.USER_CHECKWORD;
		let login = this.props.location.query.USER_LOGIN;

		if(checkword && login){

			if( recoverPasswordUser.checkword !== checkword && recoverPasswordUser.login !== login ){

				this.props.dispatchUserCheckword({
					"USER_LOGIN":login,
					"USER_CHECKWORD":checkword
				})
			}
		}

		return (
			<div className="auth-page">
				<div className="auth-page__container">

					{
						// console.log( this.props.router )
					}

					{ 
						// auth.login && <Login />
						auth.login && <Login />
					}

					{ 
						auth.recoverEmail && <RecoverEmail />
					}

					{ 
						auth.recoverEmailSuccess && <RecoverEmailSuccess />
					}

					{ 
						auth.recoverPasword && <RecoverPassword />
					}

					{ 
						auth.recoverPasswordSuccess && <RecoverPasswordSuccess />
					}

					{
						auth.userCheckword && <UserCheckword />
					}

				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		recoverPasswordUser: state.recoverPassword.user
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

		dispatchUserCheckword(user_checkword){
			dispatch( userCheckword(user_checkword) );
		},

		dispatchRedirect(){
			dispatch({type: "AUTH_REDIRECT", payload: false});
		},

		dispatchRedirectToTrue(){
			dispatch({type: "AUTH_REDIRECT", payload: true});
		}
	}
};

export default connect( mapStateToProps,  mapDispatchToProps)(Auth);
