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

	componentWillMount(){
		if(this.props.auth.authenticated){
			let nextPath = (this.props.location.state && this.props.location.state.location) || index_url;
			this.props.router.replace(nextPath);
		}
	}

	componentWillUpdate(nextProps){
		if(nextProps.auth.authenticated){
			let nextPath = (this.props.location.state && this.props.location.state.location) || index_url;
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
		auth: state.auth.components,
		recoverPasswordUser: state.auth.recoverPassword.user
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchUserCheckword(user_checkword){
			dispatch( userCheckword(user_checkword) );
		}
	}
};

export default connect(mapStateToProps,  mapDispatchToProps)(Auth);
