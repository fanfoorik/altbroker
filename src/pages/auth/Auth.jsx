import React from "react";
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


const Auth = props => {

	let { auth } = props;
	let { recoverPasswordUser } = props;

	if(auth.redirect){
		let nextPath = (props.location.state && props.location.state.nextPath) ? props.location.state.nextPath : index_url;
		props.dispatchRedirect();
		props.router.replace(nextPath);
	}
	
	let checkword = props.location.query.USER_CHECKWORD;
	let login = props.location.query.USER_LOGIN;	

	if(checkword && login){

		if( recoverPasswordUser.checkword !== checkword && recoverPasswordUser.login !== login ){

			props.dispatchUserCheckword({
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
					// auth.login && <Login />
				}

				{ 
					auth.recoverEmail && <RecoverEmail />
				}

				{ 
					auth.recoverEmailSuccess && <RecoverEmailSuccess />
				}

				{ 
					auth.recoverPasword && <RecoverPassword />
				},

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
		}
	}
};

export default connect( mapStateToProps,  mapDispatchToProps)(Auth);
